import React from 'react';
import HeaderRender from "./header-render/header-render";

import './header.css'

function Header(props){
    return(
        <div className='header'>
            <HeaderRender OnSearchChange={props.OnSearchChange}/>
        </div>
    );
}

export default Header;