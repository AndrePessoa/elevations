import { useMemo } from "react";
import { TAGS } from "../data/tags";
import { TagCard } from "./TagCard";
import { useElevation } from "../context/ElevationContext";
import { CATEGORY_ORDER } from "../types";

const categoryRank = new Map(CATEGORY_ORDER.map((c, i) => [c, i]));

const sortedTags = [...TAGS].sort(
  (a, b) =>
    (categoryRank.get(a.category) ?? 0) - (categoryRank.get(b.category) ?? 0) ||
    a.name.localeCompare(b.name),
);

export function Grid() {
  const { activeCategories } = useElevation();
  const visibleTags = useMemo(
    () => sortedTags.filter((tag) => activeCategories.has(tag.category)),
    [activeCategories],
  );

  return (
    <div className="grid">
      {visibleTags.map((tag) => (
        <TagCard key={tag.name} tag={tag} />
      ))}
    </div>
  );
}
