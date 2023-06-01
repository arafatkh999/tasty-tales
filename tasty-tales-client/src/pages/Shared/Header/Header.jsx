import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";



const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then()
    .catch(error => console.log(error));
  }
  return (
    <div className="header">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                
                  {
                    user ? <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div> :
                  <Link to="/login"> <button className="btn btn-ghost">Login</button>
                  </Link>
                  }
                  
                  
                  
                
              </li>
              <li>
                <Link
                to='/register'
                >
                Register
                </Link>
              </li>
            </ul>
          </div>
          <Link 
          to='/'
          className="normal-case text-xl">
            Tasty Tales
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
              to='/'
              className={({isActive}) => (isActive ? 'active' : 'default')}
              >
                Home
              </NavLink>
            </li>
            
            <li>
            <NavLink
              to='/blog'
              className={({isActive}) => (isActive ? 'active' : 'default')}
              >
                Blog
              </NavLink>
            </li>
            <li>
            
                {
                    user ? <div className={`hover:${user.displayName} w-16 rounded-full`}>
                      <button onClick={handleLogOut}>
                      <img src={user.photoURL}
                       />
                      </button>
                    
                  </div> :<NavLink
              to='/login'
              className={({isActive}) => (isActive ? 'active' : 'default')}
              > <button className="btn btn-ghost">Login</button></NavLink>
                  }
              
            </li>
            <li>
              {
                user ? <></> : <NavLink
                to='/register'
                className={({isActive}) => (isActive ? 'active' : 'default')}
                >
                  Register
                </NavLink>

              }
            
            </li>
            
          </ul>
        </div>
        <div className="navbar-end text-lg">
        <FaFacebookF></FaFacebookF>
        <FaInstagram className="mx-4"></FaInstagram>
        <FaTwitter></FaTwitter>
        </div>
      </div>
    </div>
  );
};

export default Header;
