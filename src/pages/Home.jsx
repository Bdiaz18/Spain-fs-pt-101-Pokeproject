import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { PokeCard } from "../components/card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="container mt-5">
			<h2 className="text-danger fw-bold text-center px-3  MainTitle" >My Pokemon blog.</h2>
			<div className="d-flex overflow-auto px-3">
			{store.pokemons?.results.map((el, i) => <PokeCard key={i} name={el.name} url={el.url}/> )}
			</div>
			
		</div>
	);
}; 
//asdf