import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { useState } from 'react';
import TasksList from './Components/TasksList';

function App() {
  const [theme, setTheme] = useState('light');
  const setThemeButton = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  return (
    <div className={theme === 'light' ? 'App' : 'App-dark'}>
      <div className='todo-container'>
        <Header
          handleButton={setThemeButton}
          themeHeader={theme === 'light' ? 'light' : 'dark'} />
        <TasksList
          theme={theme} />

      </div>
      <Footer />

    </div>
  );
}

export default App;
