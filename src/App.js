import React, { useEffect, useState } from 'react';
import SideBar from './components/SideBar.jsx';
import './styles/App.css'
import Main from './components/Main.jsx';

function App() {

  // Все TODO хранятся в виде масива объектов типа {title, desc}
  const [noteStorage, setNoteStorage] = useState([]);
  // Состояние для текущего отображаемого окна компонента Main
  const [selectedNote, setSelectedNote] = useState();
  const [mainScreen, setMainScreen] = useState('add');  

  // Переключение на вкладку информации о записи
  // Проверка на undefined, чтобы не срабатывало на стадии mount
  useEffect(() => {if(selectedNote) setMainScreen('info')}, [selectedNote]);

  // ID использует время в милисекундах для избежания коллизий
  // при удалении старых записей и длину массива для избежания
  // коллизий при одновременном добавлении записей
  function addToNoteStorage(note) {
    setNoteStorage(prev => [...prev, {...note, id: new Date().getTime() + prev.length}]);
  }

  useEffect(() => {console.log(noteStorage)}, [noteStorage]);

  return (
    <div className='app'>
      <SideBar noteList={noteStorage} selectNote={setSelectedNote} selectScreen={setMainScreen}/>
      <Main create={addToNoteStorage} screen={mainScreen} noteInfo={selectedNote}/>
    </div>
  );
}

export default App;
