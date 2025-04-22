import { useEffect } from "react"
import { useParams } from "react-router-dom"
import pokeApiServices from "../services/pokeApiServices"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const Details = () => {
    const {store, dispatch} = useGlobalReducer()
    const params = useParams()
    console.log(params);
    const { id } = useParams()

    useEffect(() =>{
        pokeApiServices.getSinglePokemon(id).then(data => dispatch({type: 'pokemon_details', payload:data}))

    },[] )
//Aqui hagamos una tarjeta para cada pokemon, tomará tiempo pero quedará cool.
    return(
        <div>
            <h2>
                Details for {store.details?.name}
            </h2>
            <p>Weight: {store.details?.weight}</p>
            {store.details?.types.map(el=><p>{el.type.name}</p>)}
        </div>
    )
}