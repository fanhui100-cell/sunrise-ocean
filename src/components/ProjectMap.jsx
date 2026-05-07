import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { projectCoords } from '../data/projectCoords';

// Custom gold marker icon (SVG inlined as data URL)
const goldIcon = L.divIcon({
  className: 'soe-marker',
  html: `<div style="
    width: 22px; height: 22px;
    background: #C9A84C;
    border: 2px solid #0A1628;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    display: flex; align-items: center; justify-content: center;
  "><div style="
    width: 7px; height: 7px;
    background: #0A1628;
    border-radius: 50%;
    transform: rotate(45deg);
  "></div></div>`,
  iconSize: [22, 22],
  iconAnchor: [11, 22],
  popupAnchor: [0, -22],
});

export default function ProjectMap({ projects }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
      <MapContainer
        center={[15, 110]}
        zoom={3}
        scrollWheelZoom={false}
        className="h-[420px] w-full"
        worldCopyJump={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {projects.map((proj, i) => {
          const c = projectCoords[i];
          if (!c) return null;
          const thumb = proj.images?.[0] || proj.image || null;
          return (
            <Marker key={i} position={[c.lat, c.lng]} icon={goldIcon}>
              <Popup minWidth={200} maxWidth={260}>
                <div style={{ width: '220px' }}>
                  {thumb && (
                    <img
                      src={thumb}
                      alt=""
                      style={{
                        width: '100%',
                        height: '120px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        marginBottom: '8px',
                        display: 'block',
                      }}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                  <div style={{ fontWeight: 600, color: '#0A1628', fontSize: '13px', lineHeight: 1.4, marginBottom: '4px' }}>
                    {proj.nameShort || proj.name}
                  </div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>
                    {proj.location} · {proj.category}
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
