import "https://unpkg.com/@eox/layout";
import "https://unpkg.com/@eox/map/dist/eox-map-advanced-layers-and-sources.js";
import "https://unpkg.com/@eox/map";

document.querySelector("eox-map").layers = [
  {
    type: "Tile",
    source: {
      type: "WMTSCapabilities",
      url: "https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",
      layer: "s2cloudless-2020_3857",
    },
  },
  {
    type: "Tile",
    source: {
      type: "OSM",
    },
  },
];
