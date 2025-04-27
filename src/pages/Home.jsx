import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { PokeCard } from "../components/card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import pokeApiServices from "../services/pokeApiServices.js";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const typesData = await pokeApiServices.getTypes();
				dispatch({ type: 'pokemon_types', payload: typesData.results });

				const itemsData = await pokeApiServices.getItems();
				dispatch({ type: 'pokemon_items', payload: itemsData.results });
			} catch (error) {
				console.error("Error in Home fetching:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="container mt-5">
			<h2 className="text-danger fw-bold text-center px-3  MainTitle" >My Pokemon blog.</h2>
			<div className="d-flex overflow-auto px-3 mb-5 ">
				{store.pokemons?.results.map((el, i) => <PokeCard key={i} name={el.name} url={el.url} />)}
			</div>


			<h2 className="text-success fw-bold text-center px-3 MainTitle">Pokemon Types.</h2>
			<div className="d-flex overflow-auto px-4 mb-5">
				{store.types?.map((type, i) => (
					<div key={i} className="card m-2" style={{ minWidth: "150px" }}>
						<div className="card-body text-center">
							<h5 className="card-title text-capitalize">{type.name}</h5>
						</div>
					</div>
				))}
			</div>


			<h2 className="text-info fw-bold text-center px-3 MainTitle ">Pokemon Items.</h2>
			<div className="d-flex overflow-auto px-3 mb-5">
				{store.items?.map((item, i) => (
					<div key={i} className="card m-2" style={{ minWidth: "150px" }}>
						<img
							src={item.url ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png` : ""}
							alt={item.name}
							className="card-img-top p-2"
							style={{ height: "100px", objectFit: "contain" }}
						/>
						<div className="card-body text-center">
							<h5 className="card-title text-capitalize">{item.name}</h5>
						</div>
					</div>
				))}
			</div>





		</div>


	);
};
//asdf