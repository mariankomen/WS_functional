import React from 'react';
import HeaderRender from "./header-render/header-render";

import './header.css'

function Header(){
    return(
        <div className='header'>
            <HeaderRender/>
        </div>
    );
}

export default Header;