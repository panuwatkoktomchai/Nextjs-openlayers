import React, { Component, createRef } from 'react';

export default class MainMap extends Component {
    constructor(props) {
        super(props);
    
        this.MapRef = createRef()
    }

    componentDidMount() {
        
    }
    
    render() {
        return (
        <div ref={this.MapRef}></div>
        );
    }
}
