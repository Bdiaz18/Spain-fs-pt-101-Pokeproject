import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"


export const PokeCard = ({ name, url }) => {

    const pid = url.split('/')[6]  //<--- es lo mas ingenioso que vi... :D 
    const {store, dispatch} = useGlobalReducer();

    const toggleFavorite = () => {
        dispatch({
            type: 'toggle_favorite',
            payload: {id: pid, name:name}
        });
    }
    //Revisar el overflow que dijo el prof para el slide...
    return (
        <div className="col-md-3 mb-4" >
            <div className="card h-100 m-3 ">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pid}.png`} alt={name}
                    className="card-img-top" style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body text-center">
                    <h3 className="card-title text-capitalize text-center" >{name}</h3>
                    <Link className="btn btn-primary" to={'/details/' + pid}>Learn more!</Link>
                    <button className="btn btn-outline-warning me-2"
                    onClick={toggleFavorite}>
                        <i className={store.favorites.find(fav=> fav.id === pid) ?  "fa-solid fa-heart text-danger" :"fa-regular fa-heart"}></i>
                        </button>
                </div>
            </div>
        </div>
    )
}