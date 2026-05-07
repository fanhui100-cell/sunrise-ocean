import { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { projectCoords } from '../data/projectCoords';

const DARK_STYLE = [
  { elementType: 'geometry', stylers: [{ color: '#0d1f3c' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#0a1628' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#8ab4d4' }] },
  { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#1f3a5f' }] },
  { featureType: 'landscape.natural', elementType: 'geometry', stylers: [{ color: '#0a1e3a' }] },
  { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#0d2040' }] },
  { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#6b8cba' }] },
  { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#0a2035' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#1e3a5f' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#0d2040' }] },
  { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#9ca8b8' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#1a3460' }] },
  { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#0e2040' }] },
  { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#0d2040' }] },
  { featureType: 'transit.station', elementType: 'labels.text.fill', stylers: [{ color: '#6b8cba' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#06111f' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#3d5a7a' }] },
  { featureType: 'water', elementType: 'labels.text.stroke', stylers: [{ color: '#06111f' }] },
];

const GOLD_ICON = {
  path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
  fillColor: '#C9A84C',
  fillOpacity: 1,
  strokeColor: '#0A1628',
  strokeWeight: 1.5,
  scale: 1,
  anchor: { x: 0, y: 0 },
};

export default function ProjectMap({ projects }) {
  const [activeIdx, setActiveIdx] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
  });

  if (!isLoaded) {
    return (
      <div className="rounded-2xl overflow-hidden border border-white/10 h-[420px] bg-navy-900 flex items-center justify-center">
        <span className="text-white/40 text-sm">地图加载中…</span>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-sm">
      <GoogleMap
        mapContainerClassName="h-[420px] w-full"
        center={{ lat: 15, lng: 112 }}
        zoom={3}
        options={{
          styles: DARK_STYLE,
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          scrollwheel: false,
        }}
      >
        {projects.map((proj, i) => {
          const c = projectCoords[i];
          if (!c) return null;
          return (
            <Marker
              key={i}
              position={{ lat: c.lat, lng: c.lng }}
              icon={GOLD_ICON}
              onClick={() => setActiveIdx(i)}
            />
          );
        })}

        {activeIdx !== null && projectCoords[activeIdx] && (
          <InfoWindow
            position={{ lat: projectCoords[activeIdx].lat, lng: projectCoords[activeIdx].lng }}
            onCloseClick={() => setActiveIdx(null)}
          >
            <div style={{ width: '210px' }}>
              {projects[activeIdx]?.images?.[0] && (
                <img
                  src={projects[activeIdx].images[0]}
                  alt=""
                  style={{ width: '100%', height: '110px', objectFit: 'cover', borderRadius: '5px', marginBottom: '7px', display: 'block' }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              )}
              <div style={{ fontWeight: 700, color: '#0A1628', fontSize: '13px', lineHeight: 1.4, marginBottom: '4px' }}>
                {projects[activeIdx]?.nameShort || projects[activeIdx]?.name}
              </div>
              <div style={{ fontSize: '11px', color: '#6B7280' }}>
                {projects[activeIdx]?.location} · {projects[activeIdx]?.category}
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}
