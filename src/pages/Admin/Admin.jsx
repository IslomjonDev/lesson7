import React,{useState} from 'react';
import { Outlet,Link } from 'react-router-dom';
import './Admin.css';
import { TbMenuDeep } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";


const Admin = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div>
     <div className="admin">
      <div className={ `saidbar ${sidebar ? 'show' : <></>}`}>
     <div className="panil">
        <h1>Admin panel</h1>
     </div>
        <ul>
        <li>
        <div className="link">
          <Link to={'manage'}><FaRegUser /></Link>
          </div>
          <div className="link">
          <Link to={'manage-user'}>Create-Product</Link>
          </div>
          </li>
          <li>
          <div className="link">
          <Link to={'manage'}><MdOutlineProductionQuantityLimits /></Link>
          </div>
          <div className="link">
          <Link to={'manage'}>Manage-Product </Link>
          </div>
        </li>

          <li>
        <div className="link">
          <Link to={'manage'}><MdOutlineProductionQuantityLimits /></Link>
          </div>
          <div className="link">
          <Link to={'create-user'}>Create-user </Link>
          </div>
        </li>
        <li>
          <div className="link">
          <Link to={'manage'}><FaRegUser/></Link>
          </div>
          <div className="link">
          <Link to={'create-product'}>Manage-User</Link>
          </div>
          </li>
        </ul>
      </div>
   <div className="admin_content">
   <button onClick={() => setSidebar(!sidebar)}><TbMenuDeep /></button>
    <Outlet />
   </div>
     </div>
    </div>
  );
}

export default Admin;
