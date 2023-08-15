import React, { useEffect, useMemo, useState } from 'react';
import SideBar from './components/SideBar.jsx';
import './styles/App.css'
import Main from './components/Main.jsx';
import useLocalStorage from './hooks/useLocalStorage.js';
import useResize from './hooks/useResize.js';

function App() {

  // Все TODO хранятся в виде масива объектов в localStorage
  // структуру объекта можно посмотреть там же, создав любое TODO  
  const [noteStorage, setNoteStorage] = useLocalStorage([], 'todos');

  // Текущая запись с которой происходят все взаимодействия
  const [selectedNote, setSelectedNote] = useState();

  // Состояние для текущего отображаемого окна компонента Main
  const [mainScreen, setMainScreen] = useState('add');  
  const [searchField, setSearchField] = useState('');
  const [isActive, setActive, width, resize] = useResize(305);
 
  const sideContainerSize = useMemo(() => {
    return {width: `${width}px`};
  }, [width]);
  // Переключение на вкладку информации о записи
  // Проверка на undefined, чтобы не срабатывало на стадии mount
  useEffect(() => {if(selectedNote) setMainScreen('info')}, [selectedNote]);

  // ID использует время в милисекундах для избежания коллизий
  // при удалении старых записей и длину массива для избежания
  // коллизий при одновременном добавлении записей
  function addToNoteStorage(note) {
    const creatingNote = {...note, 
      id: new Date().getTime() + noteStorage.length, 
      status: 'pending'};
    setNoteStorage(prev => [...prev, creatingNote]);
    setSelectedNote(creatingNote);
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
    if(noteStorage.length !== 0) return noteStorage.filter(note => note.title.includes(searchField));
  }, [searchField, noteStorage]); 

  return (
    <div className='app' 
      onMouseMove={isActive ? resize : null} 
      onMouseUp={() => setActive(false)}
      onMouseLeave={() => setActive(false)}>
      <div className='side-container' style={sideContainerSize}>
        <SideBar noteList={filteredNotes}
          selectNote={setSelectedNote} 
          selectScreen={setMainScreen}
          search={searchField}
          setSearch={setSearchField}/>
        <div className='dragger' onMouseDown={() => setActive(true)}></div>
      </div>      
      <Main create={addToNoteStorage} 
        screen={mainScreen}
        selectScreen={setMainScreen} 
        noteInfo={selectedNote}
        change={changeNoteFromStorage}
        delete={deleteNoteFromStorage}/>        
    </div>
  );
}

export default App;
