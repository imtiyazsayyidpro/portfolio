/**
 * Marks an element to reveal (fade in while rising) when its enclosing
 * <Reveal> group scrolls into view. Stagger is worked out at runtime from the
 * items that enter together. Plain function (not a client module) so server
 * components can use it.
 */
export function revealItem() {
  return { "data-reveal-item": "", "data-reveal": "pending" } as const;
}
