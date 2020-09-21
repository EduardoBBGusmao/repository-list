import React from "react";
import api from '../../../../services/api';
import Button from '../../../../components/Button';

function ListRepositories(props) {

  async function handleRemoveRepository(id) {
    await api.delete(id);
    props.setRefreshKey(props.refreshKey + 1);
  }
  return (
    <div className="list-container">
      <div className="repository-list">
        {props.repositoriesList.map((repository) => (
          <ul className="repository-item" key={repository.id} >
            <div className="repository-link">
              {repository.title}
            </div>
            <div className="delete-button">
              <Button 
                onClick={() => handleRemoveRepository(repository.id)} 
                actionName="delete"
                />
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default ListRepositories;
