"use client";

import { useContext, useEffect } from "react";
import { MapContext } from "@/app/components/hook/MapContext";
import { MapboxVectorLayer } from 'ol-mapbox-style';
import Map from 'ol/Map.js';


interface MapBoxLayerProps {
  name: string;
  zIndex?: number;
}

const MapBoxLayer: React.FC<MapBoxLayerProps> = ({ name, zIndex = 0 }) => {
  const { map } = useContext(MapContext);

  useEffect(() => {
    if (!map) return;
    let vectorLayer = new MapboxVectorLayer({
      styleUrl: 'mapbox://styles/tinglong/ckyn5bs5300qb15o4lf1broft',
      accessToken: process.env.MAPBOX_ACCESS_TOKEN,
      name
    });

    map.addLayer(vectorLayer);
    vectorLayer.setZIndex(zIndex);
    return () => {
      if (map) {
        map.removeLayer(vectorLayer);
      }
    };
  }, [map]);

  return null;
}

export { MapBoxLayer };
