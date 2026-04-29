import { useEffect, useRef } from 'react';
import type { Tag } from '../types';
import { useElevation } from '../context/ElevationContext';
import { Popover } from './Popover';

interface TagCardProps {
  tag: Tag;
}

const CLOSE_DELAY_MS = 120;

export function TagCard({ tag }: TagCardProps) {
  const { hoveredCardId, setHoveredCardId, openTag } = useElevation();
  const isActive = hoveredCardId === tag.name;
  const closeTimer = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => {
      setHoveredCardId((current) => (current === tag.name ? null : current));
      closeTimer.current = null;
    }, CLOSE_DELAY_MS);
  };

  useEffect(() => () => cancelClose(), []);

  const handleEnter = () => {
    if (openTag) return;
    cancelClose();
    setHoveredCardId(tag.name);
  };

  const handleLeave = () => {
    if (openTag) return;
    scheduleClose();
  };

  return (
    <div
      className="tag-card-wrapper"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <article
        className="tag-card"
        data-cat={tag.category}
        data-tag={tag.name}
        data-active={isActive ? 'true' : undefined}
        aria-label={`<${tag.name} /> — ${tag.type}`}
      >
        <code className="tag-card-code">{`<${tag.name} />`}</code>
      </article>
      {isActive ? <Popover tag={tag} /> : null}
    </div>
  );
}
