export const getGames = () => {
  

    const options = {
        method: 'GET',
        headers: {
            
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
      
      const result = fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
        .then((res) => res.json())
        .then((res) => res)
        return result;
    }
    