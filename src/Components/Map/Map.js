import React from 'react';
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import './Map.css';

function Map({center, zoom}) {
    return (
        <div claassName="map">
            <h1>I am a map</h1>
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer url="https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
            </LeafletMap>
        </div>
    )
}

export default Map
