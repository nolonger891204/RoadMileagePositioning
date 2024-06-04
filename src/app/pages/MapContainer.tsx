"use client";

import React, { useContext, useEffect, useState } from "react";
import { fromLonLat, toLonLat, transform } from "ol/proj";
import { Map } from "@/app/components/Map/Map";
// import { Layers, MapBoxLayer, VectorLayer } from "@/app/components/Layers";
// import { Layers, MapBoxLayer } from "@/app/components/Layers";
import { Layers } from "@/app/components/Layers/Layers";
import { MapBoxLayer } from "@/app/components/Layers/MapboxLayer";
import { OpenStreetMapLayer } from "@/app/components/Layers/OpenStreetMapLayer";
import { VectorLayer } from "@/app/components/Layers/VectorLayer";

import { Vector } from "ol/source";
import { Style, Icon, Circle, Fill, Stroke } from 'ol/style';
import { Point } from "ol/geom";
import { Feature } from "ol";
import GeoJSON from 'ol/format/GeoJSON';
import { MapContext } from "@/app/components/hook/MapContext";
import HW from "@/app/assets/HW.json";
import measureStations from "@/app/assets/measureStations.json";
import VectorSource from "ol/source/Vector";

const MapContainer = () => {
    const { feature } = useContext(MapContext);

    return (
        <div id="map_container" className="h-full w-full rounded-lg overflow-hidden">
            <Map>
                <Layers>
                    <OpenStreetMapLayer name={"basemap_mapbox"} zIndex={2} />
                    <VectorLayer 
                        name={"base_feature"}
                        source={
                            new VectorSource({
                                features: new GeoJSON({
                                    defaultDataProjection: 'EPSG:4326',
                                    featureProjection: 'EPSG:3857'
                                }).readFeatures(HW)
                            })
                        }

                        style={
                            new Style({
                                stroke: new Stroke({
                                    color: 'rgba(255,255,0,0.5)',
                                    width: 5,
                                }),
                            })
                        }
                        zIndex={10} 
                    />
                    { feature ? 
                        <VectorLayer 
                            name={"feature"} 
                            source={
                                new Vector({
                                    features: [feature],
                                })
                            }
                            style={
                                new Style({
                                    image: new Circle({
                                        radius: 8, // Adjust the radius as needed
                                        fill: new Fill({
                                            color: 'red', // Set fill color to red
                                        }),
                                        stroke: new Stroke({
                                            color: 'black', // Set stroke color to black
                                            width: 2, // Set stroke width
                                        }),
                                    })
                                })
                            }
                            zIndex={99} 
                        />:
                        <></>
                    }

                </Layers>
            </Map>
        </div>
    );
};

export { MapContainer }