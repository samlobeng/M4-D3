import './App.css';
import MySign from './components/WarningSign'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyBadge from './components/MyBadge';

function App() {
  return(<>
    <MySign   warning={"WARNING MFS!"} />
    <MyBadge title = "Number of Books" color = "Secondary"/>
 </> )
 
}

export default App;
