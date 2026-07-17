'use client';

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';

export type StateMemberCount = {
  state: string;
  count: number;
  lat: number;
  lng: number;
};

function radiusFor(count: number, max: number) {
  const min = 8;
  const scale = 26;
  return min + (count / max) * scale;
}

export function IndiaMap({ data }: { data: StateMemberCount[] }) {
  const max = Math.max(...data.map((d) => d.count));

  return (
    <div className="overflow-hidden rounded-[1.4rem] border border-white/10">
      <MapContainer
        center={[22.5, 80]}
        zoom={4.4}
        scrollWheelZoom={false}
        style={{ height: '460px', width: '100%', background: '#0c1210' }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; OpenStreetMap contributors'
        />
        {data.map((entry) => (
          <CircleMarker
            key={entry.state}
            center={[entry.lat, entry.lng]}
            radius={radiusFor(entry.count, max)}
            pathOptions={{
              color: '#6befd7',
              weight: 1.5,
              fillColor: '#6befd7',
              fillOpacity: 0.35
            }}
          >
            <Tooltip direction="top" offset={[0, -4]} opacity={1}>
              <span className="tv-mono text-xs">
                {entry.state}: {entry.count}+ members
              </span>
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
