import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokemon Logo." /></span>
				</Link>
				<div className="btn-group">
					<button
						type="button"
						className="btn btn-primary dropdown-toggle"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Favorites <span className="badge bg-light text-dark">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.length === 0 ? (
							<li className="dropdown-item text-muted">No favorites yet</li>
						) : (
							store.favorites.map((fav, index) => (
								<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
									<Link className="text-decoration-none text-capitalize text-dark" to={`/details/${fav.id}`}>
										{fav.name}
									</Link>
									<button
										className="btn btn-sm ms-2"
										onClick={() =>
											dispatch({
												type: 'toggle_favorite',
												payload: { id: fav.id, name: fav.name }
											})
										}
									>
										❌
									</button>
								</li>
							))
						)}
					</ul>
				</div>


			</div>
		</nav>
	);
};