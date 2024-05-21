import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {





    return (
        <div className='navbar'>

<div className="n-wrapper container">
       <div className="n-lift">
        <div className="n-name">
           <Link to={'/'}>
             <h2>Logo</h2>
           </Link>
        </div>
       </div>
       <div className="n-rigth">
        <div className="n-list">
            <ul style={{listStyleType:'none'}}>
            <Link to={'/'}>Home </Link>
            <Link to={'/user'}> User</Link>
          <a href="" className="">Service</a>
          <a href="">About</a>
            </ul>
        </div>
        <button className="button">
            <Link to={'/admin'}>Admin</Link>
        </button>
       </div>
     </div>
            
        </div>
    );
}

export default Navbar;
