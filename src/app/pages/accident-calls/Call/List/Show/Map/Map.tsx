import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat, toLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";
import Overlay from "ol/Overlay";
import { Select } from "ol/interaction";
import "./MapOverlay.css";

interface Marker {
  id: number;
  location: [number, number];
  status: string;
  date: string;
  time: string;
  iconUrl: string;
  details?: {
    address?: string;
    description?: string;
    responsible?: string;
  };
}

const OpenLayersMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);
  const [mapInstance, setMapInstance] = useState<Map | null>(null);
  const [popup, setPopup] = useState<Overlay | null>(null);

  const [markers, setMarkers] = useState<Marker[]>([
    {
      id: 1,
      location: [49.958627, 40.3643615],
      status: "Tamamlanib",
      date: "25-11-2024",
      time: "20:30",
      iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      details: {
        address: "Ehmed Recebli 205",
        description: "Yol qəzası",
        responsible: "Əliyev Əli"
      }
    },
    {
      id: 2,
      location: [49.8519, 40.3877],
      status: "Işe başlayıb",
      date: "25-11-2024",
      time: "20:29",
      iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
      details: {
        address: "Elsen Suleymanov 49",
        description: "Yanğın",
        responsible: "Həsənov Həsən"
      }
    },
    {
      id: 3,
      location: [49.8319, 40.3677],
      status: "Yola çıxıb",
      date: "25-11-2024",
      time: "20:28",
      iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
      details: {
        address: "AzNefr krugu",
        description: "Texniki qəza",
        responsible: "Quliyev Qulu"
      }
    },
  ]);

  useEffect(() => {
    if (!mapRef.current || !popupRef.current) return;

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

    // Создаем popup
    const popupOverlay = new Overlay({
      element: popupRef.current,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });
    map.addOverlay(popupOverlay);
    setPopup(popupOverlay);

    setMapInstance(map);

    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    map.addLayer(vectorLayer);

    // Добавляем маркеры на карту
    markers.forEach(marker => {
      const feature = new Feature({
        geometry: new Point(fromLonLat(marker.location)),
        data: marker
      });

      feature.setStyle(
        new Style({
          image: new Icon({
            src: marker.iconUrl,
            scale: 1,
            anchor: [0.5, 1],
          }),
        })
      );

      vectorSource.addFeature(feature);
    });

    // Добавляем обработчик кликов по маркерам
    const select = new Select({
      layers: [vectorLayer]
    });

    select.on('select', (e) => {
      if (e.selected.length > 0) {
        const feature = e.selected[0];
        const markerData = feature.get('data');
        setSelectedMarker(markerData);
        
        // Показываем popup
        if (popupOverlay) {
          const coordinates = feature.getGeometry().getCoordinates();
          popupOverlay.setPosition(coordinates);
        }

        // Центрируем карту на выбранном маркере
        map.getView().animate({
          center: fromLonLat(markerData.location),
          zoom: 14,
          duration: 500
        });
      } else {
        setSelectedMarker(null);
        if (popupOverlay) {
          popupOverlay.setPosition(undefined);
        }
      }
    });

    map.addInteraction(select);

    // Закрываем popup при клике на карту
    map.on('click', (evt) => {
      if (!map.hasFeatureAtPixel(evt.pixel)) {
        setSelectedMarker(null);
        if (popupOverlay) {
          popupOverlay.setPosition(undefined);
        }
      }
    });

    return () => map.setTarget(undefined);
  }, [markers]);

  const handleMarkerClick = (marker: Marker) => {
    setSelectedMarker(marker);
    if (mapInstance && popup) {
      mapInstance.getView().animate({
        center: fromLonLat(marker.location),
        zoom: 14,
        duration: 500
      });
      
      // Показываем popup
      popup.setPosition(fromLonLat(marker.location));
    }
  };

  return (
    <div className="map-container">
      <div ref={mapRef} className="map-view" />
      
      {/* Popup для маркера */}
      <div ref={popupRef} className="ol-popup">
        {selectedMarker && (
          <div className="popup-content">
            <div className="popup-header">
              <h4>{selectedMarker.status}</h4>
              <button 
                className="popup-close"
                onClick={() => {
                  setSelectedMarker(null);
                  if (popup) popup.setPosition(undefined);
                }}
              >
                ×
              </button>
            </div>
            <div className="popup-body">
              <div className="detail-item">
                <span className="detail-label"><i class="fa-solid fa-clock"></i></span>
                <span className="detail-value">{selectedMarker.date} {selectedMarker.time}</span>
              </div>
              {selectedMarker.details?.address && (
                <div className="detail-item">
                  <span className="detail-label"><i class="fa-solid fa-map-location-dot"></i></span>
                  <span className="detail-value">{selectedMarker.details.address}</span>
                </div>
              )}
              {selectedMarker.details?.description && (
                <div className="detail-item">
                  <span className="detail-label"><i class="fa-solid fa-file-waveform"></i></span>
                  <span className="detail-value">{selectedMarker.details.description}</span>
                </div>
              )}
              {selectedMarker.details?.responsible && (
                <div className="detail-item">
                  <span className="detail-label"><i class="fa-solid fa-user"></i></span>
                  <span className="detail-value">{selectedMarker.details.responsible}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="map-overlay">
        <div className="overlay-content">
          <div className="markers-list">
            {markers.map(marker => (
              <div 
                key={marker.id} 
                className={`marker-item ${selectedMarker?.id === marker.id ? 'active' : ''}`}
                onClick={() => handleMarkerClick(marker)}
              >
                <div className="marker-icon">
                  <img src={marker.iconUrl} alt="Marker" />
                </div>
                <div className="marker-info">
                  <p className="marker-status">{marker.status}</p>
                  <p className="marker-date">{marker.date} {marker.time}</p>
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