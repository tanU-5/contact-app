import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from 'container/Navbar/Navbar';
import AddPage from 'container/AddPage/AddPage';
import { Routes,Route} from 'react-router-dom';
import EditPage from 'container/EditPage/EditPage';
import Home from 'container/Home/Home';

function App() {
  return (
    <div className="App">


      {/*add / edit/ :id*/}
      <ToastContainer/>
    
<Navbar/>
      <Routes>
      <Route path ="/" element ={<Home/>}/>
        <Route path= "/add" element= {<AddPage/>} />
        <Route path= "/edit/:id" element= {<EditPage/>} />

      </Routes>
    
  
                      {/* <h1>Welcome</h1> */}
                    
                    {/* <Route path= "/add" />
                      {/* <h1>Add Component</h1> 
                   
                    <Route path= "/edit/:id" />
                      <h1>Edit Component</h1> */}
   
                  
        

         
          

          
      
 
   
    </div>
  );
}

export default App;
