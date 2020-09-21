import React, { useState } from "react";
import api from '../../../../services/api';
import Button from '../../../../components/Button';

function NewRepositoryForm(props) {
  const [repositoryTitle, setRepositoryTitle] = useState('');

  async function handleAddRepository(e) {
    e.preventDefault();
    
    await api.post({title: repositoryTitle});
    setRepositoryTitle('');
    props.setRefreshKey(props.refreshKey + 1); 
  }

  return (
    <div className="new-repository">
      <form className="box" onSubmit={handleAddRepository}>
        <input 
          className="input-repository"
          placeholder="New Repository" 
          value={repositoryTitle} 
          onChange={(e) => setRepositoryTitle(e.target.value)} 
          required
        />
        <div className="create-button">
          <Button actionName="Enter"/>
        </div>
      </form>
    </div>
  );
}

export default NewRepositoryForm;
