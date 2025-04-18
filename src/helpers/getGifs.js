/*const apiKey = 'btNwZ8AxQty6HsjoxXY6t50v8IJ4iaWY';*/
/*gmj9hCM8QpLehIR24dMzIJ5ZDzQBnG2B*/

export const getGifs = async( category) => {
    
    //const url = `https://api.giphy.com/v1/gifs/trending?api_key=btNwZ8AxQty6HsjoxXY6t50v8IJ4iaWY&q=${category}&limit=10`;     
    const url = `https://api.giphy.com/v1/gifs/search?api_key=btNwZ8AxQty6HsjoxXY6t50v8IJ4iaWY&q=${category}&limit=10`;     
    
    const resp = await fetch (url);
    const {data} = await resp.json();
    const gifs = data.map( img => ({            
        id:img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    
    return gifs;
}