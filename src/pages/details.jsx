import { useEffect } from "react"
import { useParams } from "react-router-dom"
import pokeApiServices from "../services/pokeApiServices"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { Link } from "react-router-dom"

export const Details = () => {
    const { store, dispatch } = useGlobalReducer()
    const params = useParams()
    console.log(params);
    const { id } = useParams()

    useEffect(() => {
        pokeApiServices.getSinglePokemon(id).then(data => dispatch({ type: 'pokemon_details', payload: data }));
        

    }, [])
    //Aqui hagamos una tarjeta para cada pokemon, tomará tiempo pero quedará cool.
    return (
        <div className="card mx-auto my-4" style={{maxWidth: "400px"}} >
            <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt={store.details?.name} />
            
            <div className="card-body text-center" >
                <h2 className="card-title text-capitalize border border">
                    Details for {store.details?.name}.
                </h2>
                <p className="text-start fs-3"><i className="fa-solid fa-weight-hanging"></i>Weight: {store.details?.weight} Lb.</p>
                <p className="fs-1 text-start"><strong>Types:</strong></p>
                {store.details?.types.map(el => <li className="fs-4 text-start">{el.type.name}</li>)}
            </div>
            
        </div>
        )
}