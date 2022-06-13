import { Wrapper } from "@googlemaps/react-wrapper";
import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const latLng = { lat: -26.048187, lng: 28.005688 };

const MapComponent = () => {
  const [map, setMap] = React.useState<google.maps.Map>();
  const [markerBounce, setMarkerBounce] = useState(true);
  const [marketLatLng, setMarketLatLng] = useState<google.maps.LatLngLiteral>(latLng);


  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  useEffect(() => {
    if (markerBounce) {
      setMarketLatLng(latLng);
      const zoom = map?.getZoom() || 0;
      if (zoom > 13) {
        map?.setZoom(13);
      }
    } else {
      setMarketLatLng({ lat: -26.048147, lng: 28.005768 });
      map?.setZoom(16);
      map?.setCenter(latLng);
    }
  }, [map, markerBounce]);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(undefined);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: "400px",
      }}
      zoom={13}
      center={latLng}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <Marker
        opacity={markerBounce ? 1 : 0.3}
        onClick={() => setMarkerBounce(!markerBounce)}
        animation={markerBounce ? google.maps.Animation.BOUNCE : undefined}
        position={marketLatLng} />
    </GoogleMap>
  );
};

export const Map = () => {
  return (
    <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ""} libraries={["places"]}>
      <MapComponent />
    </Wrapper>
  );
};
