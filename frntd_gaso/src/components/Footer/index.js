import React from 'react';
import { NavLink } from 'react-router-dom';

import { FiHome, FiUser } from 'react-icons/fi';
import { RiGasStationLine} from 'react-icons/ri';

import './footer.css';

export default ()=>{
  return (
    <footer>
      <nav>
        <ul>
          <li><NavLink to="/" ><FiHome size="2em"/></NavLink></li>
          <li><NavLink to="/perfil"><FiUser size="2em"/></NavLink></li>
          <li><NavLink to="/pedido"><RiGasStationLine size="2em"/></NavLink></li>
        </ul>
      </nav>
    </footer>
  );
}