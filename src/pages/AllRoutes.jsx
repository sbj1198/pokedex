import { Route, Routes } from "react-router-dom";
import { Pokemon } from "./Pokemon";
import { Favorites } from "./Favorites";
import { Types } from "./Types";
import App from "../App";
import { PokemonDetails } from "./PokemonDetails";
import { PokemonType } from "./PokemonType";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/pokemon/:pokemon_name" element={<PokemonDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/types" element={<Types />} />
      <Route path="/types/:types_id" element={<PokemonType />} />
    </Routes>
  );
};
