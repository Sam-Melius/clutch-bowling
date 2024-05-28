"use client";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
  Pin,
} from "@vis.gl/react-google-maps";
import { centersGeodataArray } from "./data/CentersGeodata";
import { useState } from "react";

export default function MapChart() {
  const [openInfoWindowId, setOpenInfoWindowId] = useState(null);

  const containerStyle = {
    width: "100%",
    height: "80svh",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const markers = centersGeodataArray.map((center, index) => {
    const [markerRef, marker] = useAdvancedMarkerRef();
    const isOpen = openInfoWindowId === index;

    return {
      markerRef,
      marker,
      isOpen,
      center,
      index,
    };
  });

  return (
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      libraries={["marker"]}
    >
      <Map
        mapId={`Map-id`}
        style={containerStyle}
        defaultCenter={center}
        zoom={2}
        disableDefaultUI={false}
      >
        {markers && markers.length > 0 ? (
          markers.map(({ markerRef, marker, isOpen, center, index }) => (
            <AdvancedMarker
              ref={markerRef}
              key={index}
              position={center.location}
              onClick={() => setOpenInfoWindowId(index)}
            >
              <Pin
                background={"#118ad7"}
                glyphColor={"#000"}
                borderColor={"#000"}
              />
              {isOpen && (
                <InfoWindow
                  anchor={marker}
                  onCloseClick={() => setOpenInfoWindowId(null)}
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-xl font-medium text-primaryDark">
                      {center.name}
                    </p>
                    <p className="text-gray-600">{center.locationName}</p>
                    <a
                      href={center.website}
                      target="_blank"
                      className="text-clutchBlue-900 font-medium"
                    >
                      Website
                    </a>
                  </div>
                </InfoWindow>
              )}
            </AdvancedMarker>
          ))
        ) : (
          <p>No data available</p>
        )}
      </Map>
    </APIProvider>
  );
}
