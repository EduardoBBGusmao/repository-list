import React, { useState } from "react";
import api from '../../../../services/api';
import Button from '../../../../components/Button';

function NewRepositoryForm(props) {
  const [repositoryTitle, setRepositoryTitle] = useState('');

  async function handleAddRepository() {
    await api.post({title: repositoryTitle});
    setRepositoryTitle('');
    props.refreshKeyState[1](props.refreshKeyState[0] + 1); 
  }

  return (
    <div>
        <ul>New Repository:</ul>
        <input value={repositoryTitle} onChange={(e) => setRepositoryTitle(e.target.value)} required/>
        <Button function={handleAddRepository} action="Add Repository"/>
    </div>
  );
}

export default NewRepositoryForm;
