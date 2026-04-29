import type { Tag } from "../types";

const mdn = (name: string) =>
  `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${name}`;

const spec = (anchor: string) => `https://html.spec.whatwg.org/#${anchor}`;

export const TAGS: Tag[] = [
  // --- structure ---
  {
    name: "header",
    displayName: "Banner",
    category: "structure",
    type: "Sectioning content",
    usage: "<header>\n  <h1>Site title</h1>\n</header>",
    description:
      "Introductory content for its nearest sectioning ancestor — typically a logo, title, or navigation row.",
    w3cUrl: spec("the-header-element"),
    mdnUrl: mdn("header"),
  },
  {
    name: "nav",
    displayName: "Navigation",
    category: "structure",
    type: "Sectioning content",
    usage: '<nav>\n  <a href="/">Home</a>\n</nav>',
    description:
      "A section of a page that links to other pages or to parts within the page — a major navigation block.",
    w3cUrl: spec("the-nav-element"),
    mdnUrl: mdn("nav"),
  },
  {
    name: "main",
    displayName: "Main content",
    category: "structure",
    type: "Grouping content",
    usage: "<main>\n  <article>…</article>\n</main>",
    description:
      "The dominant content of the document. There can be only one visible <main> per page.",
    w3cUrl: spec("the-main-element"),
    mdnUrl: mdn("main"),
  },
  {
    name: "section",
    displayName: "Section",
    category: "structure",
    type: "Sectioning content",
    usage: "<section>\n  <h2>Chapter 1</h2>\n</section>",
    description:
      "A generic standalone section of a document, typically with a heading.",
    w3cUrl: spec("the-section-element"),
    mdnUrl: mdn("section"),
  },
  {
    name: "article",
    displayName: "Article",
    category: "structure",
    type: "Sectioning content",
    usage: "<article>\n  <h2>Post title</h2>\n</article>",
    description:
      "A self-contained composition that could be distributed independently — a post, a comment, a card.",
    w3cUrl: spec("the-article-element"),
    mdnUrl: mdn("article"),
  },
  {
    name: "aside",
    displayName: "Sidebar",
    category: "structure",
    type: "Sectioning content",
    usage: "<aside>\n  <p>Related links…</p>\n</aside>",
    description:
      "Content tangentially related to the surrounding content — sidebars, pull quotes, related links.",
    w3cUrl: spec("the-aside-element"),
    mdnUrl: mdn("aside"),
  },

  // --- multimedia ---
  {
    name: "img",
    displayName: "Image",
    category: "multimedia",
    type: "Embedded content",
    usage: '<img src="cat.jpg" alt="A cat" />',
    description:
      "Embeds a raster image into the document. The alt attribute provides a text alternative.",
    w3cUrl: spec("the-img-element"),
    mdnUrl: mdn("img"),
  },
  {
    name: "picture",
    displayName: "Responsive image",
    category: "multimedia",
    type: "Embedded content",
    usage:
      '<picture>\n  <source srcset="lg.jpg" media="(min-width:800px)">\n  <img src="sm.jpg" alt="" />\n</picture>',
    description:
      "A container for multiple <source> elements and one <img>, used for art-directed responsive images.",
    w3cUrl: spec("the-picture-element"),
    mdnUrl: mdn("picture"),
  },
  {
    name: "video",
    displayName: "Video",
    category: "multimedia",
    type: "Embedded media",
    usage: '<video src="movie.mp4" controls></video>',
    description: "Embeds a media player for video and optional captions.",
    w3cUrl: spec("the-video-element"),
    mdnUrl: mdn("video"),
  },
  {
    name: "audio",
    displayName: "Audio",
    category: "multimedia",
    type: "Embedded media",
    usage: '<audio src="song.mp3" controls></audio>',
    description:
      "Embeds a sound resource. Can include multiple <source> elements for format fallbacks.",
    w3cUrl: spec("the-audio-element"),
    mdnUrl: mdn("audio"),
  },
  {
    name: "source",
    displayName: "Media source",
    category: "multimedia",
    type: "Embedded content",
    usage: '<source src="movie.webm" type="video/webm">',
    description:
      "Specifies one of several alternative media or image resources for <picture>, <video> or <audio>.",
    w3cUrl: spec("the-source-element"),
    mdnUrl: mdn("source"),
  },
  {
    name: "track",
    displayName: "Text track",
    category: "multimedia",
    type: "Embedded content",
    usage: '<track kind="subtitles" src="en.vtt" srclang="en" />',
    description:
      "Adds a timed text track (subtitles, captions, descriptions) to a parent <video> or <audio>.",
    w3cUrl: spec("the-track-element"),
    mdnUrl: mdn("track"),
  },

  // --- text ---
  {
    name: "h1",
    displayName: "Page heading",
    category: "text",
    type: "Heading",
    usage: "<h1>Page title</h1>",
    description:
      "The highest-level section heading. One per document is the conventional best practice.",
    w3cUrl: spec("the-h1-h2-h3-h4-h5-and-h6-elements"),
    mdnUrl: mdn("Heading_Elements"),
  },
  {
    name: "h2",
    displayName: "Subheading",
    category: "text",
    type: "Heading",
    usage: "<h2>Section title</h2>",
    description:
      "A second-level section heading, typically a major sub-section under the page title.",
    w3cUrl: spec("the-h1-h2-h3-h4-h5-and-h6-elements"),
    mdnUrl: mdn("Heading_Elements"),
  },
  {
    name: "p",
    displayName: "Paragraph",
    category: "text",
    type: "Flow content",
    usage: "<p>A paragraph of text.</p>",
    description: "A single paragraph of text. Block-level by default.",
    w3cUrl: spec("the-p-element"),
    mdnUrl: mdn("p"),
  },
  {
    name: "strong",
    displayName: "Strong importance",
    category: "text",
    type: "Phrasing content",
    usage: "<strong>Important.</strong>",
    description:
      "Strong importance, seriousness, or urgency. Renders bold by default.",
    w3cUrl: spec("the-strong-element"),
    mdnUrl: mdn("strong"),
  },
  {
    name: "em",
    displayName: "Emphasis",
    category: "text",
    type: "Phrasing content",
    usage: "<em>stressed</em>",
    description:
      "Stress emphasis. Renders italic by default; nesting increases emphasis.",
    w3cUrl: spec("the-em-element"),
    mdnUrl: mdn("em"),
  },
  {
    name: "code",
    displayName: "Code",
    category: "text",
    type: "Phrasing content",
    usage: "<code>Array.map()</code>",
    description:
      "A fragment of computer code. Renders in a monospace font by default.",
    w3cUrl: spec("the-code-element"),
    mdnUrl: mdn("code"),
  },

  // --- semantic ---
  {
    name: "figure",
    displayName: "Figure",
    category: "semantic",
    type: "Grouping content",
    usage:
      '<figure>\n  <img src="x.png" alt="" />\n  <figcaption>Caption.</figcaption>\n</figure>',
    description:
      "Self-contained content (image, diagram, code) optionally with a caption, referenced from the main flow.",
    w3cUrl: spec("the-figure-element"),
    mdnUrl: mdn("figure"),
  },
  {
    name: "figcaption",
    displayName: "Figure caption",
    category: "semantic",
    type: "Grouping content",
    usage: "<figcaption>Fig. 1 — Sample.</figcaption>",
    description: "A caption or legend for the contents of its parent <figure>.",
    w3cUrl: spec("the-figcaption-element"),
    mdnUrl: mdn("figcaption"),
  },
  {
    name: "time",
    displayName: "Time",
    category: "semantic",
    type: "Phrasing content",
    usage: '<time datetime="2026-04-28">Apr 28</time>',
    description:
      "Represents a specific period in time, with an optional machine-readable datetime attribute.",
    w3cUrl: spec("the-time-element"),
    mdnUrl: mdn("time"),
  },
  {
    name: "details",
    displayName: "Disclosure",
    category: "semantic",
    type: "Interactive (disclosure)",
    usage:
      "<details>\n  <summary>More</summary>\n  <p>Hidden content.</p>\n</details>",
    description:
      "A disclosure widget that hides its contents until toggled by the user.",
    w3cUrl: spec("the-details-element"),
    mdnUrl: mdn("details"),
  },
  {
    name: "summary",
    displayName: "Disclosure label",
    category: "semantic",
    type: "Interactive (disclosure)",
    usage: "<summary>Click to expand</summary>",
    description:
      "The visible summary or label for its parent <details> element.",
    w3cUrl: spec("the-summary-element"),
    mdnUrl: mdn("summary"),
  },
  {
    name: "address",
    displayName: "Contact info",
    category: "semantic",
    type: "Flow content",
    usage: '<address>\n  Contact: <a href="mailto:a@b">a@b</a>\n</address>',
    description:
      "Contact information for the nearest <article> or <body> ancestor.",
    w3cUrl: spec("the-address-element"),
    mdnUrl: mdn("address"),
  },

  // --- interactive ---
  {
    name: "dialog",
    displayName: "Dialog",
    category: "interactive",
    type: "Interactive",
    usage: "<dialog open>\n  <p>Hello!</p>\n</dialog>",
    description:
      "A modal or non-modal dialog box. Pair with the showModal() and close() methods.",
    w3cUrl: spec("the-dialog-element"),
    mdnUrl: mdn("dialog"),
  },
  {
    name: "form",
    displayName: "Form",
    category: "interactive",
    type: "Form",
    usage: '<form action="/api" method="post">\n  <input name="q" />\n</form>',
    description:
      "A document section containing interactive controls for submitting information.",
    w3cUrl: spec("the-form-element"),
    mdnUrl: mdn("form"),
  },
  {
    name: "input",
    displayName: "Input",
    category: "interactive",
    type: "Form control",
    usage: '<input type="email" name="email" required />',
    description:
      'A typed input control. The "type" attribute selects from text, email, number, checkbox, and many more.',
    w3cUrl: spec("the-input-element"),
    mdnUrl: mdn("input"),
  },
  {
    name: "button",
    displayName: "Button",
    category: "interactive",
    type: "Form control",
    usage: '<button type="submit">Send</button>',
    description: 'A clickable button. Type defaults to "submit" inside a form.',
    w3cUrl: spec("the-button-element"),
    mdnUrl: mdn("button"),
  },
  {
    name: "select",
    displayName: "Dropdown",
    category: "interactive",
    type: "Form control",
    usage:
      "<select>\n  <option>One</option>\n  <option>Two</option>\n</select>",
    description:
      "A dropdown menu of options. Add the multiple attribute for a multi-select list.",
    w3cUrl: spec("the-select-element"),
    mdnUrl: mdn("select"),
  },
  {
    name: "label",
    displayName: "Form label",
    category: "interactive",
    type: "Form control",
    usage: '<label for="email">Email</label>',
    description:
      "A caption for an associated form control. Wrap or use the for attribute to associate.",
    w3cUrl: spec("the-label-element"),
    mdnUrl: mdn("label"),
  },

  // --- misc ---
  {
    name: "iframe",
    displayName: "Inline frame",
    category: "misc",
    type: "Embedded content",
    usage: '<iframe src="https://example.com" title="Example"></iframe>',
    description:
      "Embeds another HTML page into the current one. Use the sandbox attribute to restrict capabilities.",
    w3cUrl: spec("the-iframe-element"),
    mdnUrl: mdn("iframe"),
  },
  {
    name: "canvas",
    displayName: "Canvas",
    category: "misc",
    type: "Embedded content",
    usage: '<canvas id="c" width="300" height="150"></canvas>',
    description:
      "A bitmap surface for drawing graphics on the fly via the 2D context or WebGL APIs.",
    w3cUrl: spec("the-canvas-element"),
    mdnUrl: mdn("canvas"),
  },
  {
    name: "svg",
    displayName: "Vector graphics",
    category: "misc",
    type: "SVG root",
    usage:
      '<svg viewBox="0 0 24 24">\n  <circle cx="12" cy="12" r="10" />\n</svg>',
    description:
      "The root of an inline SVG document. Renders crisp vector graphics natively.",
    w3cUrl: "https://www.w3.org/TR/SVG2/struct.html#SVGElement",
    mdnUrl: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg",
  },
  {
    name: "script",
    displayName: "Script",
    category: "misc",
    type: "Scripting",
    usage: '<script type="module" src="/app.js"></script>',
    description:
      'Embeds or references executable script. Use type="module" for ES modules.',
    w3cUrl: spec("the-script-element"),
    mdnUrl: mdn("script"),
  },
  {
    name: "template",
    displayName: "Template",
    category: "misc",
    type: "Scripting",
    usage: '<template id="row">\n  <tr><td></td></tr>\n</template>',
    description:
      "Holds inert client-side content that is parsed but not rendered until cloned by script.",
    w3cUrl: spec("the-template-element"),
    mdnUrl: mdn("template"),
  },
  {
    name: "meta",
    displayName: "Metadata",
    category: "misc",
    type: "Metadata",
    usage: '<meta name="viewport" content="width=device-width" />',
    description:
      "Document-level metadata that can't be expressed by other head elements — encoding, viewport, descriptions.",
    w3cUrl: spec("the-meta-element"),
    mdnUrl: mdn("meta"),
  },

  // --- text (continuação) ---
  {
    name: "br",
    displayName: "Line break",
    category: "text",
    type: "Phrasing content",
    usage: "First line<br />Second line",
    description:
      "Produces a line break in text. Should only be used for meaningful breaks like poems or addresses.",
    w3cUrl: spec("the-br-element"),
    mdnUrl: mdn("br"),
  },
  {
    name: "wbr",
    displayName: "Break opportunity",
    category: "text",
    type: "Phrasing content",
    usage: "verylongword<wbr />thatcanbreak",
    description:
      "Word Break Opportunity: specifies where the browser may optionally break a line of text.",
    w3cUrl: spec("the-wbr-element"),
    mdnUrl: mdn("wbr"),
  },
  {
    name: "abbr",
    displayName: "Abbreviation",
    category: "text",
    type: "Phrasing content",
    usage: '<abbr title="HyperText Markup Language">HTML</abbr>',
    description:
      "Represents an abbreviation or acronym; the title attribute can provide the full expansion.",
    w3cUrl: spec("the-abbr-element"),
    mdnUrl: mdn("abbr"),
  },
  {
    name: "cite",
    displayName: "Citation",
    category: "text",
    type: "Phrasing content",
    usage: "<cite>The Starry Night</cite> by Van Gogh",
    description:
      "Represents the title of a creative work (book, movie, song, etc.).",
    w3cUrl: spec("the-cite-element"),
    mdnUrl: mdn("cite"),
  },
  {
    name: "q",
    displayName: "Inline quote",
    category: "text",
    type: "Phrasing content",
    usage: "<q>To be, or not to be.</q>",
    description:
      "An inline quotation. Most browsers wrap this in quotation marks automatically.",
    w3cUrl: spec("the-q-element"),
    mdnUrl: mdn("q"),
  },
  {
    name: "s",
    displayName: "Strikethrough",
    category: "text",
    type: "Phrasing content",
    usage: "<s>$50</s> Now $40!",
    description:
      "Renders text with a strikethrough, indicating things that are no longer relevant or accurate.",
    w3cUrl: spec("the-s-element"),
    mdnUrl: mdn("s"),
  },
  {
    name: "sub",
    displayName: "Subscript",
    category: "text",
    type: "Phrasing content",
    usage: "H<sub>2</sub>O",
    description:
      "Defines subscript text, used for chemical formulas or mathematical indices.",
    w3cUrl: spec("the-sub-and-sup-elements"),
    mdnUrl: mdn("sub"),
  },
  {
    name: "sup",
    displayName: "Superscript",
    category: "text",
    type: "Phrasing content",
    usage: "E=mc<sup>2</sup>",
    description:
      "Defines superscript text, used for exponents or ordinal numbers.",
    w3cUrl: spec("the-sub-and-sup-elements"),
    mdnUrl: mdn("sup"),
  },

  // --- description lists ---
  {
    name: "dl",
    displayName: "Description list",
    category: "semantic",
    type: "Grouping content",
    usage: "<dl>\n  <dt>Term</dt>\n  <dd>Description</dd>\n</dl>",
    description:
      "A description list, enclosing a groups of terms (dt) and descriptions (dd).",
    w3cUrl: spec("the-dl-element"),
    mdnUrl: mdn("dl"),
  },
  {
    name: "dt",
    displayName: "Term",
    category: "semantic",
    type: "Grouping content",
    usage: "<dt>Coffee</dt>",
    description: "Specifies a term in a description or definition list.",
    w3cUrl: spec("the-dt-element"),
    mdnUrl: mdn("dt"),
  },
  {
    name: "dd",
    displayName: "Description",
    category: "semantic",
    type: "Grouping content",
    usage: "<dd>Black hot drink</dd>",
    description:
      "Provides the description, definition, or value for the preceding term (dt).",
    w3cUrl: spec("the-dd-element"),
    mdnUrl: mdn("dd"),
  },

  // --- tables ---
  {
    name: "table",
    displayName: "Table",
    category: "structure",
    type: "Flow content",
    usage: "<table>...</table>",
    description: "The root element for defining tabular data.",
    w3cUrl: spec("the-table-element"),
    mdnUrl: mdn("table"),
  },
  {
    name: "thead",
    displayName: "Table header",
    category: "structure",
    type: "Table content",
    usage: "<thead>\n  <tr><th>Name</th></tr>\n</thead>",
    description:
      "Defines the set of rows defining the head of the columns of the table.",
    w3cUrl: spec("the-thead-element"),
    mdnUrl: mdn("thead"),
  },
  {
    name: "tbody",
    displayName: "Table body",
    category: "structure",
    type: "Table content",
    usage: "<tbody>\n  <tr><td>John</td></tr>\n</tbody>",
    description:
      "Encapsulates a set of table rows (tr), indicating that they comprise the body of the table.",
    w3cUrl: spec("the-tbody-element"),
    mdnUrl: mdn("tbody"),
  },
  {
    name: "tfoot",
    displayName: "Table footer",
    category: "structure",
    type: "Table content",
    usage: "<tfoot>\n  <tr><td>Total: 10</td></tr>\n</tfoot>",
    description: "Defines a set of rows summarizing the columns of the table.",
    w3cUrl: spec("the-tfoot-element"),
    mdnUrl: mdn("tfoot"),
  },
  {
    name: "tr",
    displayName: "Table row",
    category: "structure",
    type: "Table content",
    usage: "<tr>\n  <td>Data</td>\n</tr>",
    description: "Defines a row of cells in a table.",
    w3cUrl: spec("the-tr-element"),
    mdnUrl: mdn("tr"),
  },
  {
    name: "th",
    displayName: "Header cell",
    category: "structure",
    type: "Table content",
    usage: '<th scope="col">Header</th>',
    description: "Defines a cell as a header for a group of table cells.",
    w3cUrl: spec("the-th-element"),
    mdnUrl: mdn("th"),
  },
  {
    name: "td",
    displayName: "Data cell",
    category: "structure",
    type: "Table content",
    usage: "<td>Cell content</td>",
    description: "Defines a standard data cell in a table.",
    w3cUrl: spec("the-td-element"),
    mdnUrl: mdn("td"),
  },
  {
    name: "caption",
    displayName: "Table caption",
    category: "structure",
    type: "Table content",
    usage: "<caption>Monthly Sales</caption>",
    description:
      "Specifies the title of a table. Must be the first child of its parent <table>.",
    w3cUrl: spec("the-caption-element"),
    mdnUrl: mdn("caption"),
  },

  // --- forms (adicionais) ---
  {
    name: "fieldset",
    displayName: "Field group",
    category: "interactive",
    type: "Form control",
    usage: "<fieldset>\n  <legend>Profile</legend>\n</fieldset>",
    description: "Used to group several controls and labels within a web form.",
    w3cUrl: spec("the-fieldset-element"),
    mdnUrl: mdn("fieldset"),
  },
  {
    name: "legend",
    displayName: "Group caption",
    category: "interactive",
    type: "Form control",
    usage: "<legend>Contact Details</legend>",
    description:
      "Represents a caption for the content of its parent <fieldset>.",
    w3cUrl: spec("the-legend-element"),
    mdnUrl: mdn("legend"),
  },
  {
    name: "textarea",
    displayName: "Multiline input",
    category: "interactive",
    type: "Form control",
    usage: '<textarea rows="4" cols="50"></textarea>',
    description: "A multi-line plain-text editing control.",
    w3cUrl: spec("the-textarea-element"),
    mdnUrl: mdn("textarea"),
  },
  {
    name: "progress",
    displayName: "Progress bar",
    category: "interactive",
    type: "Form control",
    usage: '<progress value="70" max="100">70%</progress>',
    description:
      "Displays an indicator showing the completion progress of a task.",
    w3cUrl: spec("the-progress-element"),
    mdnUrl: mdn("progress"),
  },
  {
    name: "meter",
    displayName: "Gauge",
    category: "interactive",
    type: "Form control",
    usage: '<meter value="2" min="0" max="10">2 out of 10</meter>',
    description:
      "Represents a scalar measurement within a known range, or a fractional value.",
    w3cUrl: spec("the-meter-element"),
    mdnUrl: mdn("meter"),
  },
  {
    name: "optgroup",
    displayName: "Option group",
    category: "interactive",
    type: "Form control",
    usage: '<optgroup label="Fruits">\n  <option>Apple</option>\n</optgroup>',
    description: "Creates a grouping of options within a <select> element.",
    w3cUrl: spec("the-optgroup-element"),
    mdnUrl: mdn("optgroup"),
  },

  // --- ruby (anotações de pronúncia) ---
  {
    name: "ruby",
    displayName: "Ruby annotation",
    category: "semantic",
    type: "Phrasing content",
    usage: "<ruby>漢 <rt>kan</rt> 字 <rt>ji</rt></ruby>",
    description:
      "Used to present small annotations next to base text, common for East Asian typography.",
    w3cUrl: spec("the-ruby-element"),
    mdnUrl: mdn("ruby"),
  },

  // --- document metadata & scripting (restantes) ---
  {
    name: "head",
    displayName: "Document head",
    category: "misc",
    type: "Metadata",
    usage: "<head>\n  <title>Title</title>\n</head>",
    description:
      "Container for metadata (data about data) and is placed between the <html> and <body> tags.",
    w3cUrl: spec("the-head-element"),
    mdnUrl: mdn("head"),
  },
  {
    name: "title",
    displayName: "Document title",
    category: "misc",
    type: "Metadata",
    usage: "<title>The Page Title</title>",
    description:
      "Defines the document's title that is shown in a browser's title bar or a page's tab.",
    w3cUrl: spec("the-title-element"),
    mdnUrl: mdn("title"),
  },
  {
    name: "link",
    displayName: "Resource link",
    category: "misc",
    type: "Metadata",
    usage: '<link rel="stylesheet" href="styles.css" />',
    description:
      "Specifies relationships between the current document and an external resource.",
    w3cUrl: spec("the-link-element"),
    mdnUrl: mdn("link"),
  },
  {
    name: "style",
    displayName: "Inline styles",
    category: "misc",
    type: "Metadata",
    usage: "<style>\n  body { color: red; }\n</style>",
    description:
      "Contains styling information for a document, or part of a document.",
    w3cUrl: spec("the-style-element"),
    mdnUrl: mdn("style"),
  },
  {
    name: "noscript",
    displayName: "No-script fallback",
    category: "misc",
    type: "Scripting",
    usage: "<noscript>Enable JavaScript to view this site.</noscript>",
    description:
      "Defines an alternate content for users that have disabled scripts in their browser.",
    w3cUrl: spec("the-noscript-element"),
    mdnUrl: mdn("noscript"),
  },
  {
    name: "ins",
    displayName: "Insertion",
    category: "semantic",
    type: "Edit",
    usage: "<ins>New text</ins>",
    description:
      "Represents a range of text that has been added to a document.",
    w3cUrl: spec("the-ins-element"),
    mdnUrl: mdn("ins"),
  },
  {
    name: "del",
    displayName: "Deletion",
    category: "semantic",
    type: "Edit",
    usage: "<del>Deleted text</del>",
    description:
      "Represents a range of text that has been deleted from a document.",
    w3cUrl: spec("the-del-element"),
    mdnUrl: mdn("del"),
  },
  {
    name: "mark",
    displayName: "Highlight",
    category: "text",
    type: "Phrasing content",
    usage: "<mark>Highlighted</mark>",
    description:
      "Represents text which is marked or highlighted for reference or notation purposes.",
    w3cUrl: spec("the-mark-element"),
    mdnUrl: mdn("mark"),
  },
  {
    name: "data",
    displayName: "Machine-readable value",
    category: "semantic",
    type: "Phrasing content",
    usage: '<data value="2105">Product Name</data>',
    description:
      "Links a given piece of content with a machine-readable translation.",
    w3cUrl: spec("the-data-element"),
    mdnUrl: mdn("data"),
  },
  {
    name: "kbd",
    displayName: "Keyboard input",
    category: "text",
    type: "Phrasing content",
    usage: "<kbd>Ctrl</kbd> + <kbd>C</kbd>",
    description:
      "Represents user input, typically from a keyboard or voice command.",
    w3cUrl: spec("the-kbd-element"),
    mdnUrl: mdn("kbd"),
  },
  {
    name: "samp",
    displayName: "Sample output",
    category: "text",
    type: "Phrasing content",
    usage: "<samp>File not found</samp>",
    description: "Represents sample output from a computer program or system.",
    w3cUrl: spec("the-samp-element"),
    mdnUrl: mdn("samp"),
  },
  {
    name: "var",
    displayName: "Variable",
    category: "text",
    type: "Phrasing content",
    usage: "<var>x</var> = <var>y</var> + 2",
    description:
      "Represents the name of a variable in a mathematical expression or programming context.",
    w3cUrl: spec("the-var-element"),
    mdnUrl: mdn("var"),
  },
  {
    name: "dfn",
    displayName: "Definition",
    category: "text",
    type: "Phrasing content",
    usage: "<dfn>HTML</dfn> is the standard markup language.",
    description:
      "Indicates the term being defined within the context of a definition phrase or sentence.",
    w3cUrl: spec("the-dfn-element"),
    mdnUrl: mdn("dfn"),
  },
  {
    name: "small",
    displayName: "Small print",
    category: "text",
    type: "Phrasing content",
    usage: "<small>© 2026</small>",
    description:
      "Represents side-comments and small print, like copyright and legal text, independent of its styled size.",
    w3cUrl: spec("the-small-element"),
    mdnUrl: mdn("small"),
  },

  // --- structure & grouping (restantes) ---
  {
    name: "hr",
    displayName: "Thematic break",
    category: "structure",
    type: "Grouping content",
    usage: "<p>Paragraph 1</p>\n<hr />\n<p>Paragraph 2</p>",
    description:
      "Represents a thematic break between paragraph-level elements (e.g., a scene change in a story).",
    w3cUrl: spec("the-hr-element"),
    mdnUrl: mdn("hr"),
  },
  {
    name: "pre",
    displayName: "Preformatted",
    category: "text",
    type: "Grouping content",
    usage: "<pre>\n  L i n e s\n    p r e s e r v e d\n</pre>",
    description:
      "Represents preformatted text in which white space is retained exactly as written in the HTML file.",
    w3cUrl: spec("the-pre-element"),
    mdnUrl: mdn("pre"),
  },

  // --- interactive & forms (específicos) ---
  {
    name: "output",
    displayName: "Calculation result",
    category: "interactive",
    type: "Form control",
    usage: '<output name="result" for="a b">10</output>',
    description:
      "A container element into which a site or app can inject the results of a calculation or the outcome of a user action.",
    w3cUrl: spec("the-output-element"),
    mdnUrl: mdn("output"),
  },
  {
    name: "search",
    displayName: "Search region",
    category: "interactive",
    type: "Sectioning content",
    usage: "<search>\n  <form>...</form>\n</search>",
    description:
      "A container for the parts of a document or application that are used to perform search or filtering operations.",
    w3cUrl: spec("the-search-element"),
    mdnUrl: mdn("search"),
  },

  // --- multimedia & embedded (avançados) ---
  {
    name: "map",
    displayName: "Image map",
    category: "multimedia",
    type: "Embedded content",
    usage:
      '<map name="infographic">\n  <area shape="rect" coords="0,0,50,50" href="a.html" alt="A">\n</map>',
    description:
      "Used with <area> elements to define an image map (clickable link areas on an image).",
    w3cUrl: spec("the-map-element"),
    mdnUrl: mdn("map"),
  },
  {
    name: "area",
    displayName: "Map area",
    category: "multimedia",
    type: "Embedded content",
    usage:
      '<area shape="circle" coords="10,10,5" href="link.html" alt="Description">',
    description:
      "Defines an area inside an image map that has potentially associated hyperlinks.",
    w3cUrl: spec("the-area-element"),
    mdnUrl: mdn("area"),
  },
  {
    name: "embed",
    displayName: "Embedded resource",
    category: "misc",
    type: "Embedded content",
    usage:
      '<embed type="video/quicktime" src="movie.mov" width="300" height="200">',
    description:
      "A container for an external resource, such as a plugin or interactive content (use <iframe> or <video> when possible).",
    w3cUrl: spec("the-embed-element"),
    mdnUrl: mdn("embed"),
  },
  {
    name: "object",
    displayName: "External resource",
    category: "misc",
    type: "Embedded content",
    usage:
      '<object data="manual.pdf" type="application/pdf" width="500" height="500"></object>',
    description:
      "Represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.",
    w3cUrl: spec("the-object-element"),
    mdnUrl: mdn("object"),
  },

  // --- document level ---
  {
    name: "html",
    displayName: "Root",
    category: "misc",
    type: "Root element",
    usage: '<html lang="en">\n  ...\n</html>',
    description:
      "The root of an HTML document. All other elements must be descendants of this element.",
    w3cUrl: spec("the-html-element"),
    mdnUrl: mdn("html"),
  },
  {
    name: "body",
    displayName: "Document body",
    category: "misc",
    type: "Sectioning root",
    usage: "<body>\n  <h1>Hello world</h1>\n</body>",
    description:
      "Represents the content of an HTML document. There can be only one <body> element in a document.",
    w3cUrl: spec("the-body-element"),
    mdnUrl: mdn("body"),
  },
  {
    name: "base",
    displayName: "Base URL",
    category: "misc",
    type: "Metadata",
    usage: '<base href="https://www.example.com/" target="_blank">',
    description:
      "Specifies the base URL and/or target for all relative URLs in a document. Must be in <head>.",
    w3cUrl: spec("the-base-element"),
    mdnUrl: mdn("base"),
  },
  {
    name: "div",
    displayName: "Generic container",
    category: "misc",
    type: "Flow content",
    usage: '<div class="container">\n  …\n</div>',
    description:
      "A generic container for flow content. It has no intrinsic meaning and should be used as a last resort.",
    w3cUrl: spec("the-div-element"),
    mdnUrl: mdn("div"),
  },
  {
    name: "a",
    displayName: "Hyperlink",
    category: "text",
    type: "Phrasing content",
    usage: '<a href="/about">About us</a>',
    description:
      "A hyperlink to another page, file, location within the same page, email address, or any other URL.",
    w3cUrl: spec("the-a-element"),
    mdnUrl: mdn("a"),
  },
];
