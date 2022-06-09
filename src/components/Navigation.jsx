import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/add'>Add</Link>
    </div>
  );
};

export default Navigation;
