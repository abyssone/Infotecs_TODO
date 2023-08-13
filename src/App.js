import React, { useEffect, useMemo, useState } from 'react';
import SideBar from './components/SideBar.jsx';
import './styles/App.css'
import Main from './components/Main.jsx';

function App() {

  // Все TODO хранятся в виде масива объектов типа {title, desc}
  const [noteStorage, setNoteStorage] = useState([]);
  // Состояние для текущего отображаемого окна компонента Main
  const [selectedNote, setSelectedNote] = useState();
  const [mainScreen, setMainScreen] = useState('add');  
  const [searchField, setSearchField] = useState('');

  // Переключение на вкладку информации о записи
  // Проверка на undefined, чтобы не срабатывало на стадии mount
  useEffect(() => {if(selectedNote) setMainScreen('info')}, [selectedNote]);

  // ID использует время в милисекундах для избежания коллизий
  // при удалении старых записей и длину массива для избежания
  // коллизий при одновременном добавлении записей
  function addToNoteStorage(note) {
    setNoteStorage(prev => [...prev, {...note, 
                                         id: new Date().getTime() + prev.length, 
                                         status: 'pending'}]);
  }

  function changeNoteFromStorage(note) {
    setNoteStorage(prev => prev.map(el => {
      if(el.id === note.id) {
        return note;
      } return el;
    }));
    setSelectedNote(note);
  }

  function deleteNoteFromStorage(noteId) {
    setNoteStorage(prev => prev.filter(el => el.id !== noteId));
  }

  // Хранит записи, заголовок которых содержит значение поисковой строки
  const filteredNotes = useMemo(() => {
    console.log(noteStorage);
    if(noteStorage.length !== 0) return noteStorage.filter(note => note.title.includes(searchField));
  }, [searchField, noteStorage]);

  return (
    <div className='app'>
      <SideBar noteList={filteredNotes}
        selectNote={setSelectedNote} 
        selectScreen={setMainScreen}
        search={searchField}
        setSearch={setSearchField}/>
      <Main create={addToNoteStorage} 
        screen={mainScreen} 
        noteInfo={selectedNote}
        change={changeNoteFromStorage}
        delete={deleteNoteFromStorage}/>        
    </div>
  );
}

export default App;
