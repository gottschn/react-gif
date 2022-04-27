


export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=2NHzhU5MGUKbRcZ8UsDcNzRhUXduZS32`;
    const respuesta = await fetch( url );
    const {data} = await respuesta.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.original.url
        }
    })

    return gifs ;
}