import React, { useEffect, useState } from 'react';
import SideBar from './components/SideBar.jsx';
import './styles/App.css'
import Main from './components/Main.jsx';

function App() {

  // Все TODO хранятся в виде масива объектов типа {title, desc}
  const [noteStorage, setNoteStorage] = useState([]);  

  function addToNoteStorage(note) {
    setNoteStorage(prev => [...prev, {...note, id: new Date().getTime() + prev.length}]);
  }

  useEffect(() => {console.log(noteStorage)}, [noteStorage]);

  return (
    <div className='app'>
      <SideBar noteList={noteStorage}/>
      <Main create={addToNoteStorage}/>
    </div>
  );
}

export default App;
