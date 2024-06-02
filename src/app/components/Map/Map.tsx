"use client";

import { useEffect, useContext } from "react";
import { MapContext } from "@/app/components/hook/MapContext";
import * as ol from "ol";

interface MapProps {
	children: React.ReactNode;
}

const Map: React.FC<MapProps> = ({ children }) => {
	const { map, mapRef, zoom, center, extent, setMap } = useContext(MapContext);

	// on component mount
    useEffect(() => {
        let options = { 
            view: new ol.View({ zoom, center }),
            layers: [],
            controls: [],
            overlays: [],
        };
        
        let mapObject = new ol.Map(options);

        setMap(mapObject);
		mapObject.setTarget(mapRef.current);

        return () => {
            mapObject.setTarget(undefined);
        }
    }, [center, setMap, zoom]);

	// zoom change handler
	useEffect(() => {
		if (!map) return;
		map.getView().setZoom(zoom);
	}, [map, zoom]);

	// center change handler
	useEffect(() => {
		if (!map) return;
		map.getView().setCenter(center);
	}, [center, map]);

	// fit extend
	useEffect(() => {
		if (!map || !extent) return;
		map.getView().fit(extent,{
			maxZoom: 15,
			padding: [50, 50, 50, 50]
		});
	}, [extent, map]);

	return (
		<div id="map" ref={mapRef} className="w-full h-full" >
			{children}
		</div>
	)
}

export { Map };
