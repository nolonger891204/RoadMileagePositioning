"use client";

import React, { createContext, useState, useRef } from 'react';
import {fromLonLat} from 'ol/proj';
import { Feature } from 'ol';

// Create the context with initial values
export const MapContext = createContext({
  map: null,
  mapRef: null,
  zoom: 0,
  center: [0, 0],
  feature: null,
  setCenter: () => {},
  setMap: () => {},
  setZoom: () => {},
  setFeature: () => {},
  extent: null,
  setExtent: () => {},
});

// Create a provider component
export const MapProvider = ({ children }) => {
  const [map, setMap] = useState<any>(null);
  const mapRef = useRef<any>(null);
  const [zoom, setZoom] = useState<number>(13);
  const [center, setCenter] = useState<[number, number]>(fromLonLat([121.56783529839825, 25.070623499178023]));
  const [feature, setFeature] = useState<any>(new Feature());
  const [extent, setExtent] = useState<any>(null);

  return (
    <MapContext.Provider
      value={{
        map,
        mapRef,
        zoom,
        center,
        feature,
        setCenter,
        setMap,
        setZoom,
        setFeature,
        extent,
        setExtent,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
