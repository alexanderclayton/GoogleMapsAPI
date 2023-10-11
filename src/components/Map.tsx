//import//
import { useState, useCallback } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
    width: '400px',
    height: '400px'
}

const center = { lat: 39.09, lng: -94.57 };

export const Map: React.FC = () => {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (<div>
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={onLoad} onUnmount={onUnmount}></GoogleMap>
  </div>) : <></>;
};
