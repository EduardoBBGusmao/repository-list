import React from "react";
import api from '../../../../services/api';
import Button from '../../../../components/Button'

function ListRepositories(props) {

  async function handleRemoveRepository(id) {
    await api.delete(id)
    props.refreshKeyState[1](props.refreshKeyState[0] + 1);
  }
  return (
    <div class="repo-container">
      <div class="repository-list">
          {props.repositoriesList.map((repository) => (   
            <ul key={repository.id} class="repository-item" >
              <div class="repository-link">
                {repository.title}
              </div>
                <Button onClick={() => handleRemoveRepository(repository.id)} action="-"/>
            </ul>
          ))}
      </div>
    </div>
  );
}

export default ListRepositories;
