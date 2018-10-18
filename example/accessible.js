import Map from 'https://github.com/openlayers/openlayers/tree/master/src/ol/Map.js';
import View from 'https://github.com/openlayers/openlayers/tree/master/src/ol/View.js';
import TileLayer from 'https://github.com/openlayers/openlayers/tree/master/src/ol/layer/Tile.js';
import OSM from 'https://github.com/openlayers/openlayers/tree/master/src/ol/source/OSM.js';


const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

document.getElementById('zoom-out').onclick = function() {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom - 1);
};

document.getElementById('zoom-in').onclick = function() {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom + 1);
};
