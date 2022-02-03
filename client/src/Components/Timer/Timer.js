import React, { useEffect, useState } from 'react';
import { formattedTimeUnit } from '../../Const/Methods';
import './Timer.scss';

export default function Timer({ expectedDate }) {

    const [newExpectedDate, setNewExpectedDate] = useState(expectedDate);

    useEffect(() => {

        const countdownTimer = setInterval(() => {
            const expectedDateThisYear = new Date(today.getFullYear(), expectedDate.getMonth(), expectedDate.getDate())
            setNewExpectedDate(new Date(expectedDateThisYear < today ? today.getFullYear() + 1 : today.getFullYear(), expectedDate.getMonth(), expectedDate.getDate()));
        }, 1000);

        return () => {
            clearInterval(countdownTimer)
        };
    }, [newExpectedDate]);

    const today = new Date();
    const midnight = new Date();
    midnight.setHours(24);
    midnight.setMinutes(0);
    midnight.setSeconds(0);
    midnight.setMilliseconds(0)

    const daysLeft = Math.floor((newExpectedDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
    const secondsLeft = Math.floor((midnight.getTime() - today.getTime()) / 1000);
    const minutesLeft = Math.floor(secondsLeft / 60);
    const hoursLeft = Math.floor(minutesLeft / 60);

    return (
        <div className='Timer'>
            <div className='Timer--Section'>
                <p className='Timer--UnitValue'>{formattedTimeUnit(daysLeft)}:</p>
                <p className='Timer--UnitLabel'>Day</p>
            </div>
            <div className='Timer--Section'>
                <p className='Timer--UnitValue'>{formattedTimeUnit(hoursLeft)}:</p>
                <p className='Timer--UnitLabel'>Hour</p>
            </div>
            <div className='Timer--Section'>
                <p className='Timer--UnitValue'>{formattedTimeUnit(minutesLeft - (hoursLeft * 60))}:</p>
                <p className='Timer--UnitLabel'>Min</p>
            </div>
            <div className='Timer--Section'>
                <p className='Timer--UnitValue'>{formattedTimeUnit(secondsLeft - (minutesLeft * 60))}</p>
                <p className='Timer--UnitLabel'>Sec</p>
            </div>
        </div>
    );
}
