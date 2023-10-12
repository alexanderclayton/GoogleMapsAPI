//import//
import { useLoadScript } from "@react-google-maps/api";
import Logo from "../assets/react.svg";
import { Map } from "../components/Map";
import { Search } from "../components/Search";

function Home() {

  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <img src={Logo} alt="logo" />
        <h1 className="font-bold">Hello World!</h1>
        <Map isLoaded={{ isLoaded }}/>
        <Search isLoaded={{ isLoaded }}/>
      </div>
    </>
  );
}

export default Home;