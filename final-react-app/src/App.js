import './App.css';
import{Route,Routes} from 'react-router-dom';
import Header from './components/header';
import Main from './components/main';
import TestAPI from './components/test-api';
import Home from './components/home';
import Chat from './components/chat';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Main/>}/>
      <Route path='/test-api' element={<TestAPI/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;