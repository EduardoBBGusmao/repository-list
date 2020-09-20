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
    <div class="new-repository">
      <div class="box">
        <input placeholder="New Repository" value={repositoryTitle} onChange={(e) => setRepositoryTitle(e.target.value)} required/>
        <Button onClick={handleAddRepository} action="+"/>
      </div>
    </div>
  );
}

export default NewRepositoryForm;
