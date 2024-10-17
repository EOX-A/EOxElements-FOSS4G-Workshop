import "https://unpkg.com/@eox/layout/dist/eox-layout.js";
// Import the @eox/map/dist/eox-map-advanced-layers-and-sources.js package

import "https://unpkg.com/@eox/map/dist/eox-map.js";

document.querySelector("eox-map").layers = [
  // Add a Layer from STAC
  // Add a Tile layer with WMTS source from capabilities
];
