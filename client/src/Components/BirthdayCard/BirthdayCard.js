import React from 'react';
import { setSelectedBirthday } from '../../Redux/selectedBirthdaySlice';
import './BirthdayCard.scss';

export default function BirthdayCard({ person }) {
    const age = person && Math.floor(((new Date() - new Date(person.dob)) / (1000 * 3600 * 24)) / 365);
    return (
        <div className={person ? 'BirthdayCard' : 'BirthdayCard Empty'}>
            {
                person ?
                    <>
                        <div className='BirthdayCard--Body'>
                            <img className='BirthdayCard--ProfileImg' src={person.img} alt='profile' />
                            <p className='BirthdayCard--Name'>{person.name}</p>
                            <p className='BirthdayCard--DOB'>{person.dob}</p>
                            <p className='BirthdayCard--Age'>{age} YEARS OLD</p>
                        </div>
                        <div className='BirthdayCard--Footer'>
                            <p className='BirthdayCard--Timer'>00:00:00</p>
                        </div>
                    </> :
                    <p className='Empty'>Nothing to show at this time.</p>
            }

        </div>
    );
}
