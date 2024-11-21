"use client";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

export default function MapChart({ bowlingCenterData }) {
  const containerStyle = {
    width: "100%",
    height: "60svh",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

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
        disableDefaultUI={true}
      >
        {bowlingCenterData && bowlingCenterData.length > 0 ? (
          bowlingCenterData.map((center, index) => {
            return (
              <AdvancedMarker key={index} position={center.coordinates}>
                <Pin
                  background={"#118ad7"}
                  glyphColor={"#000"}
                  borderColor={"#000"}
                />
              </AdvancedMarker>
            );
          })
        ) : (
          <p>No data available</p>
        )}
      </Map>
    </APIProvider>
  );
}
