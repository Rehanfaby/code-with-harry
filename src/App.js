// import './App.css';
import React, {useState} from 'react';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';

const link = "Contact Us";

function App() {

  const changeTheme = () => {
    if(theme === 'light') {
      setTheme('dark');
      setToogleText('Enable Light');
    } else {
      setTheme('light');
      setToogleText('Enable Dark');
    }
  }

const [theme, setTheme] = useState('light');
const [toogleText, setToogleText] = useState('Enable Dark');

const [alert, SetAlert] = useState(null);

const showAlert = (msg, type) => {
  SetAlert({
    message: msg,
    type: type
  });

  setTimeout(() => {
    SetAlert(null);
  }, 3000)
}

  return (
    <>
      <Navbar search="Search Here" link={link} theme={theme} toogleText={toogleText} changeTheme={changeTheme} />  
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} />
    </>
  );
}

export default App;
