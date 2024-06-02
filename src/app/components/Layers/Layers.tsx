import React, { ReactNode } from "react";

interface LayersProps {
  children: ReactNode;
}

const Layers: React.FC<LayersProps> = ({ children }) => {
  return <>{children}</>;
};

export default Layers;