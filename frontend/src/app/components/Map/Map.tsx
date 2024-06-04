"use client";

import { useEffect, useContext } from "react";
import { MapContext } from "@/app/components/hook/MapContext";
import * as ol from "ol";
import { Point } from "ol/geom";
import { getMile } from "@/app/api/getMile";
import { transform } from "ol/proj";

interface MapProps {
	children: React.ReactNode;
}

const Map: React.FC<MapProps> = ({ children }) => {
	const { map, mapRef, zoom, center, extent, setFeature, setMap } = useContext(MapContext);

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

		// OnClick
		mapObject.on('click', (event) => {
			const clickedCoordinates = event.coordinate;
			const ptFeature = new ol.Feature();
			ptFeature.setGeometry(new Point(clickedCoordinates));
			const clickedLatanLon = transform(clickedCoordinates, 'EPSG:3857', 'EPSG:4326');

			setFeature(ptFeature);
			const fetchMile = async () => {
				const mileData = await getMile(clickedLatanLon[0], clickedLatanLon[1]);
				console.log(mileData);
			};
			fetchMile();
		});

        return () => {
            mapObject.setTarget(undefined);
        }
    }, []);

	// zoom change handler
	useEffect(() => {
		if (!map) return;
		map.getView().setZoom(zoom);
	}, [zoom]);

	// center change handler
	useEffect(() => {
		if (!map) return;
		map.getView().setCenter(center);
	}, [center]);

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
