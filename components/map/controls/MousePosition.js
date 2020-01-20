const MousePosition = require('ol/control/MousePosition').default
const { createStringXY } = require('ol/coordinate')

const mousePosition = new MousePosition({
    coordinateFormate: createStringXY(),
    projection: 'EPSG:4326'
})

module.exports = mousePosition