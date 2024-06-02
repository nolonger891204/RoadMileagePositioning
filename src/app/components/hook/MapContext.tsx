"use client";

import React, { createContext, useState, useRef } from 'react';

// Create the context with initial values
export const MapContext = createContext({
  map: null,
  mapRef: null,
  zoom: 0,
  center: [0, 0],
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
  const [zoom, setZoom] = useState<number>(0);
  const [center, setCenter] = useState<[number, number]>([0, 0]);
  const [feature, setFeature] = useState<any>(null);
  const [extent, setExtent] = useState<any>(null);

  return (
    <MapContext.Provider
      value={{
        map,
        mapRef,
        zoom,
        center,
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
