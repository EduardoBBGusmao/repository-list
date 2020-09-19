import React from "react";
import api from '../../../../services/api';
import Button from '../../../../components/Button'

function ListRepositories(props) {

  async function handleRemoveRepository(id) {
    await api.delete(id)
    props.refreshKeyState[1](props.refreshKeyState[0] + 1)
  }
  return (
    <div>
        {props.repositoriesList.map((repository) => (   
          <ul key={repository.id}>
            {repository.title}
            <Button function={() => handleRemoveRepository(repository.id)} action="Delete"/>
          </ul>
        ))}
    </div>
  );
}

export default ListRepositories;
