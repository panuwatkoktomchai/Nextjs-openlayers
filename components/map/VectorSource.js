const khonkean = require('../../public/static/data/thailand.json')
const GeoJSON = require('ol/format/GeoJSON').default
const VectorLayer = require('ol/layer/Vector').default
const VectorSource = require('ol/source/Vector').default
const Style = require('ol/style/Style').default
const Stroke = require('ol/style/Stroke').default
const Fill = require('ol/style/Fill').default
const Feature = require('ol/Feature').default
const Circle = require('ol/geom/Circle').default
const Proj = require('ol/proj')
// const {OSM, Vector as VectorSource} = require('ol/source').default
// const {Circle as CircleStyle, Fill, Stroke, Style} = require('ol/style').default
var geojsonObject = {
    type: 'FeatureCollection',
    crs: {
        type: 'name',
        properties: {
            name: 'EPSG:4326'
        }
    },
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Polygon',
                coordinates: khonkean.coordinates,
                properties: khonkean.properties
            }
        }
    ]
}

const styles = {
    'Polygon': new Style({
        stroke: new Stroke({
          color: 'white',
          line: [4],
          width: 3
        }),
        fill: new Fill({
          color: 'rgba(255,255,0,0.1)'
        })
    }),
}
var styleFunction = function(feature) {
    return styles[feature.getGeometry().getType()];
};

/**
 * Convert coordinates befor add feature
 */
var Features = (new GeoJSON()).readFeatures(geojsonObject)
Features.forEach(function(source) {
    console.log(source)
    let geometry = source.getGeometry(),
    coords = geometry.getCoordinates();
    geometry.setCoordinates(transformPolyCoords(coords));
})

/**
 * function convert coordinates EPSG:3857 to EPSG:4326
 */
function transformPolyCoords(/* Array */ a){
    return a.map(function(aa){
        return aa.map(function(coords){
            return  Proj.transform(coords, 'EPSG:4326', 'EPSG:3857');
        });
    });
}

var vectorSource = new VectorSource({
    features: Features
});

var vectorLayer = new VectorLayer({
    source: vectorSource,
    style: styleFunction
});

// vectorLayer.on('')
module.exports = vectorLayer