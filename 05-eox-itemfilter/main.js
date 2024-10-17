import "https://unpkg.com/@eox/layout/dist/eox-layout.js";
import "https://unpkg.com/@eox/map/dist/eox-map-advanced-layers-and-sources.js";
import "https://unpkg.com/@eox/map/dist/eox-map.js";
import "https://unpkg.com/@eox/layercontrol/dist/eox-layercontrol.js";
// Import the @eox/itemfilter package

// Add config and items for eox-itemfilter

document.querySelector("eox-map").config = {
  layers: [
    {
      type: "Tile",
      properties: {
        id: "s2cloudless",
        title: "Sentinel-2 Cloudless",
      },
      source: {
        type: "WMTSCapabilities",
        url: "https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",
        layer: "s2cloudless-2020_3857",
      },
    },
  ],
};
