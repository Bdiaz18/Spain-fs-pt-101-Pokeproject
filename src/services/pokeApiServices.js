const  pokeApiServices = {}


pokeApiServices.getAllPokemon = async () => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon');

        if (!resp.ok) throw new Error('Error fetching all pokemon')
            const data = await resp.json()
        return data
        //asdf
    } catch (error) {
        console.log(error);      
        
    }
}

pokeApiServices.getSinglePokemon = async (id) => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);

        if (!resp.ok) throw new Error('Error fetching all pokemon')
            const data = await resp.json()
        return data
        //asdf
    } catch (error) {
        console.log(error);      
        
    }
}
pokeApiServices.getItems = async () =>{
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/item?limit=30');
        if(!resp.ok) throw new Error('Failed to gather items.');
        const data = await resp.json();
        return data;
        
    } catch (error) {
        console.log(error);
        
    }
}
pokeApiServices.getTypes = async () =>{
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/type');
        if (!resp.ok) throw new Error('Failed to gather types.')
            const data = await resp.json();
        return data

    } catch (error) {
        console.log(error);
        
    }
}





export default pokeApiServices