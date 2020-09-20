import React, { useEffect, useState } from "react";
import api from '../../services/api';
import NewRepositoryForm from "./components/NewRepositoryForm/NewRepositoryForm";
import ListRepositories from './components/ListRepositories/ListRepositories';
import './Home-styles.css'

function Home() {
  const [repositoriesList, setRepositoriesList] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    api.get().then(response => {
      setRepositoriesList(response);
      console.log("response", response)
    });
  }, [refreshKey]);

  return (
    <div class="home-group">
      <h2 class="page-title">Repositories</h2>
      <ListRepositories 
            repositoriesList={repositoriesList} 
            refreshKeyState={[refreshKey, setRefreshKey]}
            /> 
      <NewRepositoryForm refreshKeyState={[refreshKey, setRefreshKey]}/>
    </div>
  );
}

export default Home;
