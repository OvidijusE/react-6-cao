import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='main-nav'>
      <Link to='/'>Home</Link>
      <Link to='/add'>Add</Link>
    </nav>
  );
};

export default Navigation;
