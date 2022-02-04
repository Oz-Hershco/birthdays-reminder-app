import React from 'react';
import { useSelector } from 'react-redux';
import BirthdayListItem from '../BirthdayListItem/BirthdayListItem';
import './UpcomingBirthdaysCard.scss';

export default function UpcomingBirthdaysCard() {

    const birthdaysList = useSelector((state) => state.birthdays.value);
    const upcomingBirthdaysList = birthdaysList.filter((item) => {
        const expectedDate = new Date(item.dob);
        const today = new Date();
        const expectedDateThisYear = new Date(today.getFullYear(), expectedDate.getMonth(), expectedDate.getDate());
        return today.getMonth() === expectedDateThisYear.getMonth();
    });

    return (
        <div className="UpcomingBirthdaysCard">
            <div className='UpcomingBirthdaysCard--Header'>
                UPCOMING CELEBRATIONS
            </div>
            {
                upcomingBirthdaysList.length ?
                    (
                        <>
                            <div className='UpcomingBirthdaysCard--Body'>
                                {
                                    upcomingBirthdaysList.map((item) => {
                                        return <BirthdayListItem key={item.id} item={item} isStatic={true} />
                                    })
                                }
                            </div>
                            <div className='UpcomingBirthdaysCard--Footer'>

                            </div>
                        </>
                    ) :
                    (
                        <>
                            <div className='UpcomingBirthdaysCard--Body Empty'>
                                <p className='Empty'>No upcoming birthdays this month.</p>
                            </div>
                            <div className='UpcomingBirthdaysCard--Footer'>
                            </div>
                        </>
                    )
            }

        </div>
    );
}
