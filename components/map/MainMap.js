import React, { Component, createRef } from 'react';
// Openlayer importing
import 'ol/ol.css';
export default class MainMap extends Component {
    constructor(props) {
        super(props);
        
        this.MapRef = createRef()
    }

    componentDidMount() {
        const Map = require('ol/Map').default
        const View = require('ol/View').default
        const Proj = require('ol/proj')
        const Layers = require('./Layer')
        const Controls = require('./controls')
        const defaultControls = require('ol/control').defaults
        const ProvinceSource = require('./VectorSource')
        console.log(Controls)
        // MultiPolygon
        const map = new Map({
            target: this.MapRef.current,
            layers: [
                Layers,
                ProvinceSource
            ],
            view: new View({
                center: [11436235.978741916, 1853280.3773635803],
                // center: Proj.transform([103.10125732421892,16.911651611328125], 'EPSG:4326', 'EPSG:3857'),
                zoom: 8,
            }),
            controls: defaultControls().extend([
                Controls.MousePosition
            ])
        })

        map.on('click', (e) => {
            console.log('Click event')
        })
    }
    
    render() {
        return (
        <div className="map" ref={this.MapRef}></div>
        );
    }
}

