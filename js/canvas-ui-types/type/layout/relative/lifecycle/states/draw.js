import { draw } from "../../../../../utils/draw.js";

export const setupDrawLifecycleFunctions = function (relative) {
  relative.lifecycle.set("onDrawItself", function (relative, inner, ctx) {
    const coords = relative.coords;
    const size = relative.size;
    const background = relative.get("background");
    const border = relative.get("border");
    const corner = relative.get("corner");
    draw.area(ctx, coords, size, background, border, corner);
  });

  relative.lifecycle.set("onSortChildsToDraw", function (relative, inner) {
    return [...relative.childs].sort(
      (first, second) =>
        first.layoutParams.get("zIndex") - second.layoutParams.get("zIndex")
    );
  });
};
