import React from 'react'

function SideMenuList() {
    function toggleMenu() {
        const list = document.querySelector('.list');

        list.classList.toggle('collapsed-menu');
    }
    return(
        <div className="listArea">
            <div className="listTitle" onClick={toggleMenu}>Expanded menu item</div>
            <ul className="list">
                <li>Sub-element to menu item</li>
                <li>Another under-menu</li>
                <li>Hey, the third one for the beaty</li>
            </ul>
        </div>
    )
}

export default SideMenuList