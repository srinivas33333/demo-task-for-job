import React from 'react'
import './styles.css'
import { useContext } from 'react';


import { searchContext } from '../../App';
// import { Link, NavLink } from 'react-router-dom';

function Header() {

  const {setSearch} = useContext(searchContext)
  return (
    <header>
        <div>Demo app</div>
          <div>
              <input type="text" placeholder='Title search..' onChange={(e)=>setSearch(e.target.value)}/>
        </div>
    </header>
  )
}

export default Header;
