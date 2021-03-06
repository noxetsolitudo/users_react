import { useState } from 'react';
import db from './db/users.json'
import Comp from './components/Comp';

function App() {

  const[data, setDb] = useState (db);

  return (
    <>
      <h1>This is the list of website users</h1>
      <div className="components">
        <Comp data = {data.map(item => item.name)} title = 'Name' />
        <Comp data = {data.map(item => item.username)} title = 'Username' />
        <Comp data = {data.map(item => item.email)} title = 'Email' />
        <Comp data = {data.map(item => item.address.city)} title = 'City' />
      </div>
    </>
  );
}

export default App;
