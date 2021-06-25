function App() {
  return (
    <div className='App'>
      <div>
        <h2 className='subtitle is-4' data-cy='title'>
          Update Data from an input
        </h2>
      </div>
      <div className='input-display'>
        <p data-cy='display-name'>Display Name: </p>
        <p data-cy='display-age'>Display Age: </p>
      </div>
      <div className='inputs'>
        <div className='field'>
          <label className='label'>Name: </label>
          <input className='input' type='text' placeholder='William' />
        </div>
        <div className='field'>
          <label className='label'>Age: </label>
          <input className='input' type='number' placeholder='25' />
        </div>
      </div>
    </div>
  );
}

export default App;
