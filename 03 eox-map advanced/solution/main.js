import "https://unpkg.com/@eox/layout";
// Import the @eox/map package
import "https://unpkg.com/@eox/map/dist/eox-map-advanced-layers-and-sources.js";
import "https://unpkg.com/@eox/map";

document.querySelector("eox-map").config = {
  layers: [
    {
      type: "STAC",
      properties: {
        id: "stacLayer",
      },
      url: "https://tamn.snapplanet.io/search?bbox=125.727770,-29.514858,133.412707,-23.673395&collections=S2",
      displayPreview: true,
    },
    {
      type: "Tile",
      properties: {
        id: "s2cloudless",
      },
      source: {
        type: "WMTSCapabilities",
        url: "https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",
        layer: "s2cloudless-2020_3857",
      },
    },
  ],
  view: {
    zoomExtent: [
      13073258.63003, -4560251.803262, 15027354.843273, -2011037.446905,
    ],
  },
};
