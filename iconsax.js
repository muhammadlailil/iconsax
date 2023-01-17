document.addEventListener("DOMContentLoaded", () => {
  initIconsax();
});
function initIconsax() {
  document.querySelectorAll("iconsax").forEach((iconsax) => {
    const icon = iconsax.getAttribute("name").toLowerCase().trim();
    const type =
      iconsax.getAttribute("type")?.toLowerCase().trim() || "outline";
    const size = iconsax.getAttribute("size")?.toLowerCase().trim() || null;
    const color = iconsax.getAttribute("color")?.toLowerCase().trim() || null;

    var svgObject = document.createElement("object");
    svgObject.type = "image/svg+xml";
    svgObject.class = `iconsax-icon`;
    svgObject.data = `./icons/${type}/${icon}.svg`;
    iconsax.prepend(svgObject);
    svgObject.addEventListener("load", function () {
      const svg = this.getSVGDocument().documentElement;
      if (color) {
        svg.setAttribute("fill", color);
        svg.querySelectorAll("path").forEach((path) => {
          path.setAttribute("fill", color);
        });
      }
      if (size) {
        svg.setAttribute("width", size);
        svg.setAttribute("height", size);
      }
    });
  });
}
