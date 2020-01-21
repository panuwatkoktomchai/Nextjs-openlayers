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
        const Layers = require('./layers')
        const Controls = require('./controls/')

        const Style = require('ol/style/Style').default
        const Stroke = require('ol/style/Stroke').default
        const Fill = require('ol/style/Fill').default

        const map = new Map({
            target: this.MapRef.current,
            layers: Layers,
            view: new View({
                center: [11436235.978741916, 1853280.3773635803],
                zoom: 8,
            }),
            controls: Controls,
        })

        var highlightStyle = new Style({
            fill: new Fill({
              color: 'rgba(255,255,255,0.1)'
            }),
            stroke: new Stroke({
              color: '#3399CC',
              width: 3
            })
        });
        var selected = null
        var hover = 0
        map.on('pointermove', (e) => {
            if (selected !== null) {
                selected.setStyle(undefined);
                selected = null;
                hover = 0
                e.map.getTargetElement().style.cursor = ''
            }else {
                hover = 1
            }
            map.forEachFeatureAtPixel(e.pixel, (f) => {
                selected = f
                e.map.getTargetElement().style.cursor = 'pointer'
                f.setStyle(highlightStyle)
                return true
            })
            if (selected) {
                if (hover === 1) {
                    hover++
                    console.log(selected.get('province'))
                }
            }
        })
    }
    
    render() {
        return (
        <div className="map" ref={this.MapRef}></div>
        );
    }
}

