#!/usr/bin/env node

/**
 * SFTP Deployment Script
 * Uploads the build directory to the configured remote target.
 *
 * Required environment variables (see .env.example):
 * - SFTP_HOST: SFTP host
 * - SFTP_USER: SFTP username
 * - SFTP_PASS: SFTP password
 * - SFTP_PATH: Remote directory path
 */

require("dotenv").config();
const Client = require("ssh2-sftp-client");
const path = require("path");
const fs = require("fs");

const requiredEnvVars = [
  "SFTP_HOST",
  "SFTP_USER",
  "SFTP_PASS",
  "SFTP_PATH",
];
const missingVars = requiredEnvVars.filter((v) => !process.env[v]);

if (missingVars.length > 0) {
  console.error("❌ Missing required environment variables:");
  missingVars.forEach((v) => console.error(`   - ${v}`));
  console.error("\nPlease set these variables before running deploy.");
  process.exit(1);
}

const sftp = new Client();
const localBuildDir = path.join(__dirname, "../build");
const remotePath = process.env.SFTP_PATH;

if (!fs.existsSync(localBuildDir)) {
  console.error('❌ Build directory not found. Run "npm run build" first.');
  process.exit(1);
}

async function deploy() {
  try {
    console.log("🔌 Connecting to SFTP...");
    await sftp.connect({
      host: process.env.SFTP_HOST,
      username: process.env.SFTP_USER,
      password: process.env.SFTP_PASS,
      port: process.env.SFTP_PORT || 22,
    });

    console.log("✅ Connected");

    // Clear remote directory
    console.log(`🗑️  Clearing remote directory: ${remotePath}`);
    try {
      const files = await sftp.list(remotePath);
      for (const file of files) {
        if (file.name === "." || file.name === "..") continue;
        const filePath = `${remotePath}/${file.name}`;
        if (file.type === "d") {
          await sftp.rmdir(filePath, true);
        } else {
          await sftp.delete(filePath);
        }
      }
    } catch (err) {
      if (err.code !== 2) {
        // 2 = file doesn't exist
        throw err;
      }
      // Directory doesn't exist, we'll create it
      await sftp.mkdir(remotePath, true);
    }

    // Upload build directory
    console.log(`📤 Uploading build files to ${remotePath}...`);
    await sftp.uploadDir(localBuildDir, remotePath);

    console.log("✅ Deployment completed successfully!");
  } catch (error) {
    console.error("❌ Deployment failed:", error.message);
    process.exit(1);
  } finally {
    await sftp.end();
  }
}

deploy();
