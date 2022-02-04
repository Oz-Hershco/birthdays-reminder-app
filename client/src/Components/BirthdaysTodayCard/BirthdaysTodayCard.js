import React from 'react';
import { useSelector } from 'react-redux';
import BirthdayListItem from '../BirthdayListItem/BirthdayListItem';
import './BirthdaysTodayCard.scss';

export default function BirthdaysTodayCard() {

    const birthdaysList = useSelector((state) => state.birthdays.value);
    const upcomingBirthdaysList = birthdaysList.filter((item) => {
        const expectedDate = new Date(item.dob);
        const today = new Date();
        const expectedDateThisYear = new Date(today.getFullYear(), expectedDate.getMonth(), expectedDate.getDate());
        return today.getMonth() === expectedDateThisYear.getMonth();
    });

    return (
        <div className="BirthdaysTodayCard">
            <div className='BirthdaysTodayCard--Header'>
                UPCOMING CELEBRATIONS
            </div>
            {
                upcomingBirthdaysList.length ?
                    (
                        <>
                            <div className='BirthdaysTodayCard--Body'>
                                {
                                    upcomingBirthdaysList.map((item) => {
                                        return <BirthdayListItem key={item.id} item={item} isStatic={true} />
                                    })
                                }
                            </div>
                            <div className='BirthdaysTodayCard--Footer'>

                            </div>
                        </>
                    ) :
                    (
                        <>
                            <div className='BirthdaysTodayCard--Body Empty'>
                                <p className='Empty'>No upcoming birthdays this month.</p>
                            </div>
                            <div className='BirthdaysTodayCard--Footer'>
                            </div>
                        </>
                    )
            }

        </div>
    );
}
