//import//
import Logo from "../assets/react.svg";
import { Map } from "../components/Map";
import { Search } from "../components/Search";

function Home() {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <img src={Logo} alt="logo" />
        <h1 className="font-bold">Hello World!</h1>
        <Map />
        <Search />
      </div>
    </>
  );
}

export default Home;