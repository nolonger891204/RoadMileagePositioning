"use client";

import { MapProvider } from "@/app/components/hook/MapContext";
import { MapContainer } from "@/app/pages/MapContainer";
import SiteHeader from "@/app/components/Navbar";
import { CodeMirrorComponent } from "@/app/pages/CodeMirrorContainer";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
  <main className="relative h-full w-full bg-gray-950">
    <SiteHeader></SiteHeader>
    <main className="relative grid h-[calc(100vh-48px)] w-full p-2 flex-1 gap-4 overflow-auto md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-3 md:grid-rows-3">
      <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/80 lg:col-span-2 md:col-span-2 lg:row-span-3 sm:row-span-2">
        <MapProvider>
          <MapContainer />
        </MapProvider>
      </div>
      <div className="relative hidden flex-col items-start gap-8 lg:col-span-1 sm:col-span-2 lg:row-span-3 sm:row-span-1 md:flex md:order-last">
        <CodeMirrorComponent value={"TEST"} onChange={handleCodeChange} />
      </div>
    </main>
  </main>
  );
}