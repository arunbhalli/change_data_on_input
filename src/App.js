import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('William');
  const [age, setAge] = useState('25');

  return (
    <div className='App'>
      <div>
        <h2 className='subtitle is-4' data-cy='title'>
          Update Data from an input
        </h2>
      </div>
      <div className='input-display'>
        <p data-cy='display-name'>Display Name: {name}</p>
        <p data-cy='display-age'>Display Age:{age}</p>
      </div>
      <div className='inputs'>
        <div className='field' >
          <label className='label'>Name: </label>
          <input
          data-cy='name'
            className='input'
            type='text'
            onChange={(event) => setName(event.target.value)}
            placeholder='William'
          />
        </div>
        <div className='field'>
          <label className='label'>Age: </label>
          <input
          data-cy='age'
            className='input'
            onChange={(event) => setAge(event.target.value)}
            type='number'
            placeholder='25'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
