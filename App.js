import React, { useState } from 'react';
import Navbar1 from './components/Navbar1';
import FormText1 from './components/FromText1';
import Alert1 from './components/Alert1';
import About from './components/About';
import Home from './Home';

//============================================================================================================

import Login from './assign/Login';
import Table from './assign/Table';

import Form from './assign/Form'
import TextNav from './assign/TextNav';

//================================================================================================================

import Navbars from './E-com/Navbars'
import ProductList from './E-com/ProductList';

//========================todo===================================================================================
import AddTodo from'./compo/AddTodo';
import Todos  from './compo/Todos';
import TodoSlice from './todo/TodoSlice';
import './App.css'


import Hooks from './PlusHooks/Hooks'





// import { BrowserRouter as Router,Routes,Route ,Link,NavLink} from "react-router-dom";


 function App() {



//const [mode,setMode] = useState("light") // whether dark mode on or off

//   const [alert,setAlert] = useState(null);

//   const showAlert = (message,type) => {
//   setAlert({
//     msg:message,
//     type:type
//   })
//   setTimeout(()=>{
//     setAlert(null);
//   },2000)

// }

// const toggleMode =()=>{
//     if(mode === "light"){
//       setMode ("dark");
//       document.body.style.background = '#042743';
//       showAlert("Dark mode has been enabled","success : ")
//       document.title = "TextUtils - light"
//     }
//     else{
//       setMode ("light");
//       document.body.style.background="white";
//       showAlert("Light mode has been enabled","success :")
//       document.title = "TextUtils - dark"
//     }
//   }

//   const toggleMod =()=>{
//     if(mode === "blue"){
//       setMode ("red");
//       document.body.style.background = 'pink';
//       showAlert("orange mode has been enabled" ,  "success")
//     }
//     else{
//       setMode ("blue");
//       document.body.style.background="blue";
//       showAlert("pink mode has been enabled" , "success")
//     }
//   }
//  return (
//    \ <>
//    <Router>
//        <Navbar1  Home = "home"  About= "about me" mode = {mode} toggleMode={toggleMode} toggleMod={toggleMod} />
//         <Alert1 alert= {alert}/>  
//         <div className="container my-3">  
      
//       <Routes>
//         <Route path="/about" element={ <About />}>
//         </Route>

//         <Route path="/home" element={ <Home />}>
//         </Route>

//         <Route path="/"element={<FormText1  showAlert = {showAlert} heading = "Enter the text to the analyze below" mode= {mode}/>}>
//         </Route>

//        </Routes>
//       </div>
//       </Router> 
//     </>
//   );
// }
// export default App; 
{/* 
=========================================================assign============================================================================= */}
//    return(
//     <>

// <Router>
// <TextNav/>
//         <Routes>
          
        
//          <Route path="*" element={ <Login />}>
//          </Route>
     
//         <Route path = "/form" element = { <Form />}>
//         </Route>
//         <Route path = "/table" element = {<Table />}>
//         </Route>

//       </Routes>
      
//     </Router>
//     </>
//   )
// }
// export default App; 


//=======================================================E-com==============================================================================

// style={{background:`url('assets/images/background/login-register.jpg')`,
// backgroundSize:'cover',
//  backgroundRepeat:'no-repeat',
//  backgroundPosition:'center center',
//  overflow:'hidden'
// }}      
// >


// const [ product,serProduct] = useState([
//   {
//   url : 'https://www.flipkart.com/hotstyle-lightweight-comfort-summer-trendy-walking-outdoor-stylish-training-daily-use-loafers-men/p/itm9b763095f3e7e?pid=SHOGSZDB3BT5TMN9&lid=LSTSHOGSZDB3BT5TMN9GGL0GR&marketplace=FLIPKART&q=boot&store=osp&srno=s_1_26&otracker=search&otracker1=search&fm=Search&iid=1238d0cc-cd4d-4bfc-86dc-0d0b70116074.SHOGSZDB3BT5TMN9.SEARCH&ppt=sp&ppn=sp&qH=881cc4157ed641a3',
//    name:'simple image',
//    category:'shoes',
//    seller : 'AMZ seller Ghz',
//    price: 1999
//   }
  
  
// ])



// return(
//   <Router>
//     <Navbars />
//     <Routes>
      
//       <Route path = "*" element={<ProductList product = {product}></ProductList>} >

//       </Route>
//     </Routes>
//   </Router>
// )
//  }
// export default App ;

//============================================================todo=====================================================================

// return(
//   <>

// <AddTodo />
//       <Todos />
//       <TodoSlice />
//   </>
// )
// }
// export default App; 

//=========================================================================================================================================



let [ counter,setCounter] = useState(6)






// let counter  = 15;
const addValue= () =>{
  console.log("value added" , counter)
counter = counter +1
  setCounter(counter)
}


const removeValue = ()=>{
  setCounter(counter - 1)
// if(counter > 0) setCounter(counter -1)
}
return(
  <>

  <h1> <strong>This is me </strong></h1>
  <h2> counter value : {counter}</h2>

  <button onClick={addValue} style={{backgroungColor:'blue'}}> Add value {counter}</button>
  <br />
  <button onClick={removeValue}> remove value {counter}</button>
  <p> footer : {counter}</p>
  </>

) }
 export default App;




// return(
// <>
// <Hooks />
// </>
// )
 
//  export default App;
