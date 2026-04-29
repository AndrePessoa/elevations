import type { Tag } from '../types';
import { useElevation } from '../context/ElevationContext';

interface PopoverProps {
  tag: Tag;
}

export function Popover({ tag }: PopoverProps) {
  const { setOpenTag } = useElevation();

  return (
    <div className="popover" data-cat={tag.category} data-tag={tag.name} role="dialog" aria-label={`Actions for <${tag.name}>`}>
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
    </div>
  );
}
