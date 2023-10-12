//import//
import { useState, useCallback } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
    width: '400px',
    height: '400px'
}

const center = { lat: 39.09, lng: -94.57 };

type MapProps = {
  isLoaded: any
}

export const Map: React.FC<MapProps> = ({ isLoaded }) => {

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
