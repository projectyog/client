import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import Protectedroute from './ProtectedRoute';
import { useEffect, useState } from 'react';


function App() {

  // Check If User is Logged In
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false) //fals
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <>
      <Navbar auth={auth1}/>
      <Routes>
        <Route path="/" element={<Home/>} auth={auth}/>
         <Route  path="/login" element={<Login/>} auth={auth}/>
         <Route  path="/register" element={<Register/>} auth={auth}/>
        <Route  path="/dashboard" element={<Dashboard/>} auth={auth}/>
        <Route path="/logout" exact element={<Logout/>} auth={auth}/> 
      </Routes>
      <Footer/>
    </>
  );
}

export default App;


// Now we have to Procted Out Route Like Without Login
// You can not go to Dashboard
// And After login you can not login again
// We need Protected Routes

// We Cant Acces Them If Auth is False

// Now we need to Change Navbar Dynamically