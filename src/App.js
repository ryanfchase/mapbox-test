import { useRef, useEffect, useState } from "react";

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoicnlhbmNoYXNlIiwiYSI6ImNsN2pvbG8wMTAwOHczeHFuYWNqbDJhaG4ifQ.BEyTQiMJSHPJX7uHLAGzCg';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [lng, lat],
      zoom: zoom
    });
  })

  return (
    <div>
      Hello World
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}