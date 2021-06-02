import './App.css';
import MySign from './components/WarningSign'
import Book from './components/SingleBook'
import MyNav from './components/MyNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import fantasy from './fantasy.json'

import MyBadge from './components/MyBadge';

function App() {
  return(<>
    <MyNav />
    <MySign   warning={"WARNING MFS! "} msg={"We Dangerous - Carl & Samuel, 2021"}/>
    <MyBadge title = "Number of Books" color = "Secondary"/>
    <Book  data ={fantasy[1]}/>
 </> )



}

export default App;
