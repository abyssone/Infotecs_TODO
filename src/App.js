import React, { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import './styles/App.css'

function App() {
  const [noteStorage, setNoteStorage] = useState([]);
  const [note, setNote] = useState({title: '', desc: ''});

  function addToNoteStorage(note) {
    setNoteStorage(prev => [...prev, {...note, id: new Date().getTime() + prev.length}]);
  }

  useEffect(() => {console.log(noteStorage)}, [noteStorage]);

  return (
    <div className="App">
      <SideBar noteList={noteStorage}/>
      <input plaseholder='Title' value={note.title} onChange={(e) => setNote({...note, title: e.target.value})} />
      <input plaseholder='Desc' value={note.desc} onChange={(e) => setNote({...note, desc: e.target.value})} />
      <p><button onClick={() => addToNoteStorage(note)}>Save</button></p>
    </div>
  );
}

export default App;
