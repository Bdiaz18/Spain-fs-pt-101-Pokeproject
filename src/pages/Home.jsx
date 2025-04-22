import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { PokeCard } from "../components/card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>My Pokemon blog.</h1>
			<div className="row">
			{store.pokemons?.results.map((el, i) => <PokeCard key={i} name={el.name} url={el.url}/> )}
			</div>
			
		</div>
	);
}; 