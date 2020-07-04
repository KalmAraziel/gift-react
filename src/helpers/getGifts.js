export const obtenerGif = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=Lf0tGc9uqCCAHYl0yV60FkPT6k0hFA4c`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            img: img.images?.downsized_medium.url
        };
    });

    return gifs; 
}