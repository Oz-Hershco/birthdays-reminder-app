import React, { useState } from 'react';

import BirthdayListItem from '../BirthdayListItem/BirthdayListItem';
import './AppSideMenu.scss';

function AppSideMenu({ list }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={isOpen ? "AppSideMenu Open" :  "AppSideMenu Closed"}>
            {
                isOpen ?
                (
                    <button onClick={()=>{setIsOpen(!isOpen)}} className="AppSideMenu--ToggleBtn Open"><div>+</div>Close</button>
                ):
                (
                    <button onClick={()=>{setIsOpen(!isOpen)}} className="AppSideMenu--ToggleBtn Closed"><p>🎂 Birthdays List</p></button>
                )
            }
           
            <div className={list.length ? "AppSideMenu--ListContainer" : "AppSideMenu--ListContainer Empty"}>
                
                {
                    list.length ? 
                    list.map((item) => {
                        return <BirthdayListItem key={item.id} id={item.id} src={item.img} name={item.name} subtitle={item.dob} />
                    }) : 
                    <p>No birthdays to show. Add something and you'll find it here!</p>
                }
            </div>
        </div>
    );
}

export default AppSideMenu;

