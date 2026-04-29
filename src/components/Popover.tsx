import { useLayoutEffect, useState, type RefObject } from 'react';
import { createPortal } from 'react-dom';
import type { Tag } from '../types';
import { useElevation } from '../context/ElevationContext';

interface PopoverProps {
  tag: Tag;
  anchorRef: RefObject<HTMLElement | null>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function Popover({ tag, anchorRef, onMouseEnter, onMouseLeave }: PopoverProps) {
  const { setOpenTag } = useElevation();
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);

  useLayoutEffect(() => {
    const update = () => {
      const el = anchorRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setCoords({
        top: rect.bottom + 8,
        left: rect.left + rect.width / 2,
      });
    };
    update();
    window.addEventListener('scroll', update, true);
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update, true);
      window.removeEventListener('resize', update);
    };
  }, [anchorRef]);

  if (!coords) return null;

  return createPortal(
    <div
      className="popover"
      data-cat={tag.category}
      data-tag={tag.name}
      role="dialog"
      aria-label={`Actions for <${tag.name}>`}
      style={{ top: coords.top, left: coords.left }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="popover-arrow" aria-hidden />
      <div className="popover-header">
        <code className="popover-tag">{`<${tag.name} />`}</code>
        <span className="popover-display-name">{tag.displayName}</span>
        <span className="popover-type">{tag.type}</span>
      </div>
      <div className="popover-actions">
        <button
          type="button"
          className="popover-action"
          onClick={() => setOpenTag(tag)}
        >
          Details
        </button>
        <a
          className="popover-action"
          href={tag.w3cUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          W3C ↗
        </a>
        <a
          className="popover-action"
          href={tag.mdnUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          Mozilla ↗
        </a>
      </div>
    </div>,
    document.body,
  );
}
