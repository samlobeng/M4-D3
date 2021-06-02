import './App.css';
import MySign from './components/WarningSign'
import Book from './components/SingleBook'
import 'bootstrap/dist/css/bootstrap.min.css'
import fantasy from './fantasy.json'
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';

function App() {
  return(<>
    <MySign   warning={"WARNING MFS!"} />
    <MyBadge title = "Number of Books" color = "Secondary"/>
    <Book data ={fantasy[1]}/>
    <BookList list = "Names of Books"/>
 </> )

  }
export default App;
