import "https://unpkg.com/@eox/layout/dist/eox-layout.js";
import "https://unpkg.com/@eox/map/dist/eox-map-advanced-layers-and-sources.js";
import "https://unpkg.com/@eox/map/dist/eox-map.js";
import "https://unpkg.com/@eox/layercontrol/dist/eox-layercontrol.js";
import "https://unpkg.com/@eox/itemfilter/dist/eox-itemfilter.js";
// import the @eox/stacinfo package

// add eox-stacinfo config

Object.assign(document.querySelector("eox-itemfilter"), {
  config: {
    filterProperties: [
      {
        keys: ["title"],
        title: "Search",
        type: "text",
        expanded: true,
      },
      {
        key: "themes",
        title: "Theme",
        type: "multiselect",
        expanded: true,
      },
    ],
    onSelect: (item) => {
      const eoxMap = document.querySelector("eox-map");
      fetch(item.stac)
        .then((response) => response.json())
        .then((json) => {
          const wmsLink = json.links.find((l) => l.rel === "wms");
          eoxMap.layers = [
            {
              type: "Tile",
              properties: {
                id: item.id,
                title: item.title,
              },
              source: {
                type: "TileWMS",
                url: wmsLink.href,
                params: {
                  LAYERS: wmsLink["wms:layers"],
                },
              },
            },
            ...eoxMap.layers,
          ];
        });
      // set the `for` property of eox-stacinfo
    },
  },
  items: [
    {
      title: "Global Temperature",
      id: "global-temperature",
      themes: ["Air", "Meteorology"],
      stac: "https://eurodatacube.github.io/eodash-catalog/RACE/meteorological_variables/temperature/collection.json",
    },
    {
      title: "Carbon Monoxide",
      id: "carbon-monoxide",
      themes: ["Air", "Pollution"],
      stac: "https://eurodatacube.github.io/eodash-catalog/RACE/global_parameters/CO_3_daily/collection.json",
    },
    {
      title: "Vessel Density",
      id: "vessel-density",
      themes: ["Economy", "Oceans"],
      stac: "https://eurodatacube.github.io/eodash-catalog/RACE/vessel_density/vessel_density_all/collection.json",
    },
  ],
});

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
