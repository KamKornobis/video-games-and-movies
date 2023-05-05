export const getMovies = () => {
  
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b320860d0fmsh62304f3bccb359bp107198jsn9f636ca1706e',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };
    
    
      
      const result = fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
        .then((res) => res.json())
        .then((res) => res)
        return result;
    }
    