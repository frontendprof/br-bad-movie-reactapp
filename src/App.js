import React, {useState,useEffect} from 'react';
import Header from "./components/ui/Header"
import axios from "axios";
import './App.css';

const App=()=> {

  const [items,setItems] = useState([])
  const [isLoading,setLoading] = useState(true)

  
  return (
    <div className="container">

      <h1>Assalaamu aleykom</h1>
      <Header />
    </div>
  );
}

export default App;
