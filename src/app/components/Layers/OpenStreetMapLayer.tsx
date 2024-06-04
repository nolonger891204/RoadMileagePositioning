"use client";

import { useContext, useEffect } from "react";
import { MapContext } from "@/app/components/hook/MapContext";
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile';

interface OpenStreetMapLayerProps {
  name: string;
  zIndex?: number;
}

const OpenStreetMapLayer: React.FC<OpenStreetMapLayerProps> = ({ name, zIndex = 0 }) => {
  const { map } = useContext(MapContext);

  useEffect(() => {
    if (!map) return;
    let tileLayer = new TileLayer({
        source: new OSM(),
        name
    });

    map.addLayer(tileLayer);
    tileLayer.setZIndex(zIndex);
    return () => {
      if (map) {
        map.removeLayer(tileLayer);
      }
    };
  }, [map]);

  return null;
}

export { OpenStreetMapLayer };
