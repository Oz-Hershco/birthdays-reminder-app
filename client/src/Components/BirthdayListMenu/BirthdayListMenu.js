import React, { useState } from 'react';

import BirthdayListItem from '../BirthdayListItem/BirthdayListItem';
import './BirthdayListMenu.scss';

function BirthdayListMenu({ list }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={isOpen ? "BirthdayListMenu Open" : "BirthdayListMenu Closed"}>

            <button onClick={() => { setIsOpen(!isOpen) }} className={isOpen ? "BirthdayListMenu--ToggleBtn Open" : "BirthdayListMenu--ToggleBtn Closed"}>
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
            <div className={list.length ? "BirthdayListMenu--ListContainer" : "BirthdayListMenu--ListContainer Empty"}>
                <div className='BirthdayListMenu--Wrapper'>
                    {
                        list.length ?
                            list.map((item) => {
                                return <BirthdayListItem key={item.id} item={item} />
                            }) :
                            <p>No birthdays to show. Add something and you'll find it here!</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default BirthdayListMenu;

