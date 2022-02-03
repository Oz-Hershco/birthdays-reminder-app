import React, { useState } from 'react';

import BirthdayListItem from '../BirthdayListItem/BirthdayListItem';
import './AppSideMenu.scss';

function AppSideMenu({ list }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={isOpen ? "AppSideMenu Open" : "AppSideMenu Closed"}>
   
            <button onClick={() => { setIsOpen(!isOpen) }} className={isOpen ? "AppSideMenu--ToggleBtn Open" : "AppSideMenu--ToggleBtn Closed"}>
                {
                    isOpen ?
                        (
                            <><div>+</div>Close</>
                        ) :
                        (
                            <p>🎂 Birthdays List ({list.length})</p>
                        )
                }
            </button>
            <div className={list.length ? "AppSideMenu--ListContainer" : "AppSideMenu--ListContainer Empty"}>

                {
                    list.length ?
                        list.map((item) => {
                            return <BirthdayListItem key={item.id} item={item} />
                        }) :
                        <p>No birthdays to show. Add something and you'll find it here!</p>
                }
            </div>
        </div>
    );
}

export default AppSideMenu;

