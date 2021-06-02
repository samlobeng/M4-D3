import './App.css';
import MySign from './components/WarningSign'
import Book from './components/SingleBook'
import 'bootstrap/dist/css/bootstrap.min.css'

import MyBadge from './components/MyBadge';

function App() {
  return(<>
    <MySign   warning={"WARNING MFS!"} />
    <MyBadge title = "Number of Books" color = "Secondary"/>
 </> )
import fantasy from './fantasy.json'

function App() {
  return(
    <>
    <MySign   warning={"WARNING MFS!"} />
    <Book  data ={fantasy[1]}/>
    </>

  )
 
}

export default App;
