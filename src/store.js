export const initialStore=()=>{
  return{
    message: null,
    favorites: [],

}}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'toggle_favorite':
      const isFav = store.favorites.find(fav=> fav.id === action.payload.id);
      return {
        ...store,
        favorites: isFav
        ?store.favorites.filter(fav=> fav.id !== action.payload.id)
        :[...store.favorites, action.payload]
      }
    case 'pokemon_details':
      return {
        ...store,
        details: action.payload
      }
    case 'pokemon_data':
      return {
        ...store,
        pokemons: action.payload
      }
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
