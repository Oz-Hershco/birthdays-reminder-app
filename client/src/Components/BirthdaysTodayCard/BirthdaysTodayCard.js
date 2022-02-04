import React from 'react';
import { useSelector } from 'react-redux';
import BirthdayListItem from '../BirthdayListItem/BirthdayListItem';
import './BirthdaysTodayCard.scss';

export default function BirthdaysTodayCard() {

    const birthdaysList = useSelector((state) => state.birthdays.value);
    return (
        <div className="BirthdaysTodayCard">
            <div className='BirthdaysTodayCard--Header'>
                UPCOMING CELEBRATIONS
            </div>
            <div className='BirthdaysTodayCard--Body'>
                {
                    birthdaysList.map((item) => {
                        return <BirthdayListItem key={item.id} item={item} isStatic={true} />
                    })
                }
            </div>
            <div className='BirthdaysTodayCard--Footer'>

            </div>
        </div>
    );
}
