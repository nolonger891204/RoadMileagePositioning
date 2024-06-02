import { MapProvider } from "@/app/components/hook/MapContext";
import { MapContainer } from "@/app/pages/MapContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <MapProvider>
          <MapContainer />
        </MapProvider>
      </div>
    </main>
  );
}
