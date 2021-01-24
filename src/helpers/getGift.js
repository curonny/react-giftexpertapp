




export const getGift = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=py3yFMCLrKhvfgagzcZpqzjXGvzLm2Gb&limit=10`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })

    return gifs;

}