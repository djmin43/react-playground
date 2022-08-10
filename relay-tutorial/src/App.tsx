import React, {useEffect, useState} from 'react';
import './App.css';
import fetchGraphQL from "./fetchGraphQL";

function App() {
  const [name, setName] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query RepositoryNameQuery {
        repository(owner: "djmin43" name: "react-playground") {
          name
        }
      }
    `).then(response => {
      console.log(response)
      // Avoid updating state if the component unmounted before the fetch completes
      if (!isMounted) {
        return;
      }
      const data = response.data;
      console.log(data)
      setName(data.repository.name);
    }).catch(error => {
      console.error(error);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <p>
            {name != null ? `Repository: ${name}` : "Loading"}
          </p>
        </header>
      </div>
  );
}

export default App;
