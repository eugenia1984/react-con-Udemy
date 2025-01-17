# :star: CLASE 20 - 8 de Mayo

- Nos dividimos en 3 grupos para hacer un **fetch** a la **API** de **Pokemons**: [https://pokeapi.co/](https://pokeapi.co/) para mostrar todas las cards de los pokemones con la mínima información, y al ver más ver el detalle del pokemon.
 
 La profe nos mostro esta web [https://www.pokemon.com/el/pokedex](https://www.pokemon.com/el/pokedex)
 
 <img src="https://github.com/eugenia1984/react-varios-cursos/assets/72580574/86b88b2a-6b90-4243-976b-1c1d6445e0e4" width="600" alt="pokedex" />


Se muestran 12 y abajo hay un boton para cargar mas(esto con el scroll)


 <img src="https://github.com/eugenia1984/react-varios-cursos/assets/72580574/c6ecace2-ab09-4925-a1d2-154393b99865" width="600" alt="pokedex" />
 


 Se pueden ordenar, ejemplo de por numero inferior:

 <img src="https://github.com/eugenia1984/react-varios-cursos/assets/72580574/79c1b2e0-85ff-47d4-87b9-576010bc2e78" width="600" alt="pokedex" />
 

Y al hacer click en una card se ve el detalle:

 <img src="https://github.com/eugenia1984/react-varios-cursos/assets/72580574/320811d5-b089-4e56-814d-7db63293d5fd" width="600" alt="pokedex" />
 

 <img src="https://github.com/eugenia1984/react-varios-cursos/assets/72580574/2f2a43c3-903c-4820-a2c5-ddf9c49076a9" width="600" alt="pokedex" />
 


Aca donde esta la evolucion, si le doy click a la card vooy a ir al detalle de ese pokemon

---

# :star: CLASE 21 - 10 Mayo

- Seguimos en grupo avanzando con el proyecto pokemones.

---

## :star: AXIOS

:computer: -> La documentación: [https://axios-http.com/docs/intro](https://axios-http.com/docs/intro)

## Instalación:

- Con npm: `$ npm install axios`

- Ejemplo de **get**:

1. Lo importo para usarlo: 
```JSX
const axios = require('axios').default;
```

2. Ejemplo:

```JSX
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) { // handle success
    console.log(response);
  })
  .catch(function (error) { // handle error
    console.log(error);
  })
  .finally(function () {  // always executed
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });  

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

---


## :computer: [Repositorio de ejemplo de la profe](https://github.com/GiselaFlores/axios-asincronismo)

```JSX
import axios from "axios";
import { useEffect, useState } from "react";

export const Appi = () => {
  
  const [data , setData] =useState([])

 useEffect(() => {
  getMovies()
 }, [])
 

 // Solo fetch 

  // async  function getMovie() {

  //   const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1')
    

  //   const responseData =  await response.json()
  //   setData(responseData.results)
  //   console.log(data)
  // }

  // Metodo fetch aplicando .then()


  // function getMovie() {
  //   fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1')
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       setData(responseData.results);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }


  // Con Axios 
  // async function getMovies() {
  //   const response = await axios.get(
  //     'https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1'
  //   );
  //   setData(response.data.results);
  // }


  // Axion con .then()
  function getMovies() {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1')
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }



  return (

    <div>
          { data.map((item) => (
               <div key={item.id} >{item.title}</div>
          ))}
    </div>
  );
};
```

---
