import './App.css';
import { useState, useEffect} from "react";

function GitHubUser({name}) {
  return(
    <div>
      <h1>{name}</h1>
    </div>
  )
}

function App() {
  const [ data, setData ] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/eugenia1984`
  ).then( response => response.json())
  .then(setData)
  }, []);
  if(data) 
    return (
      <GitHubUser 
        name={data.name}
      />
    )


  return (
    <h1>Data</h1>
  );
}

export default App;
