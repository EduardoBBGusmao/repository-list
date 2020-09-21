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
    });
  }, [refreshKey]);

  return (
    <div className="home-group">
      <h2 className="page-title">Repositories</h2>
      <p className="header-list">{repositoriesList.length} repositories</p>
      <ListRepositories 
            repositoriesList={repositoriesList} 
            refreshKey={refreshKey}
            setRefreshKey={setRefreshKey}
            /> 
      <NewRepositoryForm 
            refreshKey={refreshKey}
            setRefreshKey={setRefreshKey}
            />
    </div>
  );
}

export default Home;
