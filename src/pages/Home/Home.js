import React, { useEffect, useState } from "react";
import api from '../../services/api';
import NewRepositoryForm from "./components/NewRepositoryForm";
import ListRepositories from './components/ListRepositories';

function Home() {
  const [repositoriesList, setRepositoriesList] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    api.get().then(response => {
      setRepositoriesList(response);
    });
  }, [refreshKey]);

  return (
    <div>
      <ul>
        SHOW THE LIST OF REPOSITORIES HERE
      </ul>
      <ListRepositories 
            repositoriesList={repositoriesList} 
            refreshKeyState={[refreshKey, setRefreshKey]}
            /> 
      <NewRepositoryForm refreshKeyState={[refreshKey, setRefreshKey]}/>
    </div>
  );
}

export default Home;
