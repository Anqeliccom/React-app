import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';



function Header() {
return (
  <>
    <ul className='my-nav navbar bg-dark'>
      <li className='mine'><Link to='/'>Главная</Link></li>
      <li className='mine'><Link to='/chat'>Чат</Link></li>
      <li className='mine'><Link to='/test-api'>Данные</Link></li>
    </ul>
  </>
);
}

  
  
    export default Header;