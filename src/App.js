import React from 'react';

import { Header, AddNewUser, Users } from './components';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="wrapper">
        <AddNewUser />
        <Users />
      </main>
    </div>
  );
}

export default App;
