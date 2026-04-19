import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Vendor } from '../types';
import { CITY_COORDINATES } from '../constants';
import { MapPin, ExternalLink, Building2 } from 'lucide-react';

// Fix for Leaflet default icon issue in React/Vite
import 'leaflet/dist/leaflet.css';

// Using CDN URLs for markers to avoid build-time asset resolution issues in this environment
const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapViewProps {
  vendors: Vendor[];
  onSelectVendor: (vendor: Vendor) => void;
}

// Component to handle map resizing and centering
function ChangeView({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

export const MapView: React.FC<MapViewProps> = ({ vendors, onSelectVendor }) => {
  // Group vendors by city to avoid overlapping markers
  const vendorsByCity = vendors.reduce((acc, vendor) => {
    const city = vendor.headquarters.city;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(vendor);
    return acc;
  }, {} as Record<string, Vendor[]>);

  const defaultCenter: [number, number] = [56.1304, -106.3468]; // Center of Canada
  const defaultZoom = 4;

  return (
    <div className="h-[calc(100vh-200px)] w-full rounded-2xl overflow-hidden border border-black/5 shadow-sm bg-white relative">
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {Object.entries(vendorsByCity).map(([city, cityVendors]) => {
          const coordinates = CITY_COORDINATES[city];
          if (!coordinates) return null;

          return (
            <Marker key={city} position={coordinates}>
              <Popup className="custom-popup">
                <div className="p-1 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-black/5">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold text-sm">{city}, {(cityVendors as Vendor[])[0].headquarters.province}</span>
                  </div>
                  <div className="space-y-3 max-h-[200px] overflow-y-auto pr-1">
                    {(cityVendors as Vendor[]).map((vendor) => (
                      <div 
                        key={vendor.id} 
                        className="group cursor-pointer hover:bg-black/5 p-2 rounded-lg transition-colors"
                        onClick={() => onSelectVendor(vendor)}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-medium text-sm group-hover:text-emerald-600 transition-colors">
                            {vendor.name}
                          </span>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs text-black/50 line-clamp-1 mt-0.5">
                          {vendor.softwareTypes.join(', ')}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-2 border-t border-black/5 text-[10px] text-black/40 flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    {(cityVendors as Vendor[]).length} {(cityVendors as Vendor[]).length === 1 ? 'Vendor' : 'Vendors'} in this city
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Legend / Overlay */}
      <div className="absolute bottom-6 left-6 z-[1000] bg-white/90 backdrop-blur-md p-4 rounded-xl border border-black/5 shadow-lg max-w-[200px]">
        <h3 className="text-xs font-bold uppercase tracking-wider text-black/40 mb-2">Map Legend</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
            <span className="text-xs font-medium">Software Vendor</span>
          </div>
          <p className="text-[10px] text-black/50 leading-relaxed">
            Click on markers to see vendors headquartered in each city. Zoom in for better precision.
          </p>
        </div>
      </div>
    </div>
  );
};
