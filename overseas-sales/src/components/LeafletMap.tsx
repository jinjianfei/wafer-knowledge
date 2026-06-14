import { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { fabSites, type FabSite } from '../data/learningData';

// Kill default image markers
L.Marker.prototype.options.icon = L.divIcon({ className: 'hidden', iconSize: [0, 0] });

const countryColor = (code: string) => {
  if (code === 'FR') return '#3b6cf6';
  if (code === 'IT') return '#e8453c';
  return '#f5a623';
};

interface LeafletMapProps {
  onSiteClick: (site: FabSite) => void;
}

export default function LeafletMap({ onSiteClick }: LeafletMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [42, 15],
      zoom: 4,
      minZoom: 2,
      maxZoom: 12,
      scrollWheelZoom: true,
      zoomControl: true,
      attributionControl: false,
    });
    mapRef.current = map;

    // Light/voyager tiles for bright theme
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OSM &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    const allMarkers: L.Marker[] = [];

    fabSites.forEach((site) => {
      const color = countryColor(site.countryCode);
      const icon = L.divIcon({
        className: 'factory-marker-root',
        html: `
          <div class="factory-pin">
            <div class="factory-pin-dot" style="background:${color};">${site.countryCode}</div>
            <div class="factory-pin-label">${site.name}</div>
          </div>
        `,
        iconSize: [60, 40],
        iconAnchor: [30, 20],
      });

      const marker = L.marker([site.lat, site.lng], { icon }).addTo(map);
      allMarkers.push(marker);

      marker.bindTooltip(
        `<strong>${site.name}</strong><br>${site.city}, ${site.country}<br><em>${site.type}</em>`,
        { direction: 'top', offset: [0, -18], className: 'doc-tooltip', opacity: 1 }
      );

      marker.on('click', () => onSiteClick(site));
    });

    const group = L.featureGroup(allMarkers);
    group.addTo(map);
    map.fitBounds(group.getBounds().pad(0.25));

    return () => { map.remove(); mapRef.current = null; };
  }, [onSiteClick]);

  return <div ref={containerRef} className="w-full h-full rounded-lg" />;
}
