"use client";

import React, { useContext } from "react";
import { fromLonLat, toLonLat } from "ol/proj";
import { Map } from "@/app/components/Map/Map";
// import { Layers, MapBoxLayer, VectorLayer } from "@/app/components/Layers";
import { Layers, MapBoxLayer } from "@/app/components/Layers";
import { MapContext } from "@/app/components/hook/MapContext";

// import Geolocation from 'ol/Geolocation.js';
// import Feature from "ol/Feature";
// import Point from "ol/geom/Point";
// import { Icon, Circle as CircleStyle, Style, Fill, Stroke } from "ol/style";
// import { vector } from "../components/Sources";
// import MapContext from "../hook/MapContext";
// import GeoJSON from "ol/format/GeoJSON";
// import PinGreen from './../assets/pin_green.svg';
// import { spots } from "../assets/spot";

const MapContainer = () => {
    const { mapView, setMapView } = useContext(MapContext);

    return (
        <div id="map_container"
        style={{
            height: "500px",
            width: "100%",
            borderRadius: "5px",
            overflow: "hidden",
        }}
        >
            <Map>
                <Layers>
                    <MapBoxLayer name={"basemap_mapbox"} zIndex={1} />
                    {/* <VectorLayer 
                        name={"feature"} 
                        source={vector({
                        features: new GeoJSON().readFeatures(recordGeojsonObject, { featureProjection: 'EPSG:3857' }),
                        })}
                        style={
                        new Style({
                            image: new Icon({
                            anchor: [0.5, 16],
                            anchorXUnits: 'fraction',
                            anchorYUnits: 'pixels',
                            width: 40,
                            height: 40,
                            src: PinGreen,
                            })
                        })
                        }
                        zIndex={1} 
                    /> */}
                </Layers>
            </Map>
        </div>
    );
};

export { MapContainer }