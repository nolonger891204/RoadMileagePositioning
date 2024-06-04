"use client";

import { useContext, useEffect } from "react";
import { MapContext } from "@/app/components/hook/MapContext";
import OLVectorLayer from "ol/layer/Vector";
import { Map as OLMap, Feature } from "ol";

interface VectorLayerProps {
  name: string;
  source: any; // You might want to replace 'any' with the actual type of your source
  style: any; // You might want to replace 'any' with the actual type of your style
  zIndex?: number;
}

const VectorLayer: React.FC<VectorLayerProps> = ({ name, source, style, zIndex }) => {
  const { map, feature, setExtent } = useContext(MapContext);

  useEffect(() => {
		if (!map) return;
		let vectorLayer = new OLVectorLayer({
			name,
			source,
			style,
			zIndex
		});
		vectorLayer.setZIndex(zIndex);
		map.getLayers().forEach(function(l) {
			if (l.get("name") === "feature"){
				let source = l.getSource();
				// setExtent(source.getExtent());
			}
		});
		return () => {
			if (map) map.removeLayer(vectorLayer);
		};
	}, [map]);

	const clearLayer = () => {
		map.getLayers().forEach((layer) => {
			if (layer.get('name') === 'feature') {
				layer.getSource().clear();
			}
		});
	};

	useEffect(()=>{
		if (!map) return;
		
		console.log(zIndex);
		clearLayer();
		let vectorLayer = new OLVectorLayer({
			name,
			source,
			style
		});
		map.addLayer(vectorLayer);
		vectorLayer.setZIndex(zIndex);
		map.getLayers().forEach(function(l) {
			if (l.get("name") === "feature"){
				let source = l.getSource();
				setExtent(source.getExtent());
			}
		});
	}, [feature]);

	return null;
};

export { VectorLayer };
