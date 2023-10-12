//import//
import { Autocomplete } from "@react-google-maps/api";

type SearchProps = {
  isLoaded: any
}

export const Search: React.FC<SearchProps> = ({ isLoaded }) => {
  
  if (!isLoaded) return <div>Loading...</div>
  
  return (
    <div className="">
      <Autocomplete>
        <input type="text" placeholder="Search..." className="m-4 border" />
      </Autocomplete>
    </div>
  );
};
