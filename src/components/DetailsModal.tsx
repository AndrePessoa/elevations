import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useElevation } from '../context/ElevationContext';

export function DetailsModal() {
  const { openTag, setOpenTag, setHoveredCardId } = useElevation();

  useEffect(() => {
    if (!openTag) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenTag(null);
        setHoveredCardId(null);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [openTag, setOpenTag, setHoveredCardId]);

  if (!openTag) return null;

  const close = () => {
    setOpenTag(null);
    setHoveredCardId(null);
  };

  return createPortal(
    <div
      className="modal-backdrop"
      onClick={close}
      role="presentation"
    >
      <div
        className="modal"
        data-cat={openTag.category}
        data-tag={openTag.name}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-header">
          <code id="modal-title" className="modal-title">{`<${openTag.name} />`}</code>
          <span className="modal-display-name">{openTag.displayName}</span>
          <button
            type="button"
            className="modal-close"
            aria-label="Close"
            onClick={close}
          >
            ×
          </button>
        </header>
        <div className="modal-body">
          <section className="modal-row">
            <h3>Type</h3>
            <p>{openTag.type}</p>
          </section>
          <section className="modal-row">
            <h3>Usage</h3>
            <pre className="modal-usage"><code>{openTag.usage}</code></pre>
          </section>
          <section className="modal-row">
            <h3>Description</h3>
            <p>{openTag.description}</p>
          </section>
        </div>
        <footer className="modal-footer">
          <a
            className="modal-link"
            href={openTag.w3cUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            W3C spec ↗
          </a>
          <a
            className="modal-link"
            href={openTag.mdnUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            MDN reference ↗
          </a>
        </footer>
      </div>
    </div>,
    document.body,
  );
}
