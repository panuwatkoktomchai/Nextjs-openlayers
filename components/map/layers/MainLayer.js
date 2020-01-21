
/**
 * Roadmap
 * http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}
 
 * Terrain
 * http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}
 
 * Altered roadmap
 * http://mt0.google.com/vt/lyrs=r&hl=en&x={x}&y={y}&z={z}
 
 * Satellite only
 * http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}
 
 * Terrain only
 * http://mt0.google.com/vt/lyrs=t&hl=en&x={x}&y={y}&z={z}
 
 * Hybrid
 * http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}
 * 
 */
const XYZ = require('ol/source/XYZ').default
const TileLayer = require('ol/layer/Tile').default

module.exports = new TileLayer({
    source: new XYZ({
        url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
    })
})