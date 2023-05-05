export const getGames = () => {
  

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6595002667msh58518e4e7ab6d3bp11f99bjsn8e18e855b2db',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
      
      const result = fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
        .then((res) => res.json())
        .then((res) => res)
        return result;
    }
    