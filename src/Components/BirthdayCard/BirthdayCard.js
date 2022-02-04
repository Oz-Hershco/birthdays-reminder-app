import React from 'react';
import { formattedDashedDate } from '../../Const/Methods';
import Timer from '../Timer/Timer';
import './BirthdayCard.scss';

export default function BirthdayCard({ person }) {
    const age = person && Math.floor(((new Date() - new Date(person.dob)) / (1000 * 3600 * 24)) / 365);
    return (
        <div className={person ? 'BirthdayCard' : 'BirthdayCard Empty'}>
            <div className='BirthdayCard--Header'>
                MAIN DISPLAY
            </div>
            {
                person ?
                    <>
                        <div className='BirthdayCard--Body'>
                            <img className='BirthdayCard--ProfileImg' src={person.img} alt='profile' />
                            <p className='BirthdayCard--Name'>{person.name}</p>
                            <p className='BirthdayCard--DOB'>{formattedDashedDate(person.dob)}</p>
                            <p className='BirthdayCard--Age'>{age} YEARS OLD</p>
                        </div>
                        <div className='BirthdayCard--Footer'>
                            <Timer expectedDate={new Date(person.dob)}/>
                        </div>
                    </> :
                    <>
                        <div className='BirthdayCard--Body'>
                            <p className='Empty'>Nothing to show at this time.</p>
                        </div>
                        <div className='BirthdayCard--Footer'>
                        </div>
                    </>
            }

        </div>
    );
}
