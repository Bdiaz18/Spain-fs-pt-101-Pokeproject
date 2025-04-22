import { Link } from "react-router-dom"


export const PokeCard = ({ name, url }) => {

    const pid = url.split('/')[6]  //<--- es lo mas ingenioso que vi... :D 
//Revisar el overflow que dijo el prof para el slide...
    return (
        <div className="col" >
            <div className="card">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pid}.png`} alt="" />
                <h3>{name}</h3>
                <Link className="btn btn-primary" to={'/details/' +pid}>Learn more</Link>
                <button className="btnm btn-secondary"><i className="fa-regular fa-heart"></i></button>
            </div>
        </div>
    )
}