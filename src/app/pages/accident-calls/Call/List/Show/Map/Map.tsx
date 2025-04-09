import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";
import { Click } from "ol/events/condition";
import { Select } from "ol/interaction";
import "./MapOverlay.css";

interface Marker {
  id: number;
  title: string;
  location: [number, number];
  type: "accident" | "station" | "hospital";
  status: string;
  date: string;
  time: string;
  icon: string;
}

const OpenLayersMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  const [markers, setMarkers] = useState<Marker[]>([
    {
      id: 1,
      title: "Brix, Boylar",
      location: [49.958627, 40.3643615],
      type: "accident",
      status: "Tamamlanib",
      date: "25-11-2024",
      time: "20:30",
      icon: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    },
    {
      id: 2,
      title: "Whyonerle",
      location: [49.8519, 40.3877],
      type: "station",
      status: "Işe başlayıb",
      date: "25-11-2024",
      time: "20:29",
      icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
    },
    {
      id: 3,
      title: "Mauri pompelli",
      location: [49.8319, 40.3677],
      type: "hospital",
      status: "Yola çıxıb",
      date: "25-11-2024",
      time: "20:28",
      icon: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
    },
  ]);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([49.8419, 40.3777]),
        zoom: 12,
      }),
    });

    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    map.addLayer(vectorLayer);

    // Добавляем маркеры на карту
    markers.forEach((marker) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat(marker.location)),
        data: marker,
      });
    });

    return () => map.setTarget(undefined);
  }, [markers]);

  return (
    <div className="map-container">
      <div ref={mapRef} className="map-view" />

      <div className="map-overlay">
        <div className="overlay-content">
          <h3 className="overlay-header">Qəza Nöqtələri</h3>

          <div className="markers-list">
            {markers.map((marker) => (
              <div
                key={marker.id}
                className={`marker-item `}
                onClick={() => setSelectedMarker(marker)}
              >
                <div className="imgUrl">
                  <img src={marker.icon} alt="" />
                </div>
                <div className="marker-info">
                  <p>
                    {marker.status} - {marker.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenLayersMap;
