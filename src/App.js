
import Category from './components/Category';
import Pages from './pages/Pages';

import { BrowserRouter} from 'react-router-dom'
import Search from './components/Search';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer autoClose={2000} />
          <Nav>
            <GiKnifeFork/>
            <Logo to={"/"}>deliciousss</Logo>
          </Nav>
            <Search/>
            <Category/>
            <Pages/> 
      </BrowserRouter>
      
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav =styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`;

export default App;
