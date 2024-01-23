import Image from "next/image";
import { CitySearch } from "./components/citySearch";

export default function Forecasts() {
  return (
    <main>
      <h1 className="display-3">home</h1>
      <CitySearch />
      <div>
        <h1>All Cities</h1>
      </div>
    </main>
  );
}
