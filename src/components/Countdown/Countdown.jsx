// import { current } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import './Countdown.scss';

function Countdown() {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    // let interval = useRef();
    let interval;

    const startTimer = () => {
        const countdownDate = new Date('March 13, 2023 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //Stop interval
                // clearInterval(interval.current);
                clearInterval(interval);
            } else {
                //update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

            // console.log(distance);
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            // clearInterval(interval.current);
            clearInterval(interval);
        };
    });
    return (
        <div className='countdown'>
            <div className='countdown_title'>
                <h1>Sale Countdown Timer</h1>
            </div>
            <div className='countdown_clock'>
                <div className='countdown_clock-item'>
                    <p>{timerDays}</p>
                    <p>
                        <small>Days</small>
                    </p>
                </div>
                <span>:</span>
                <div className='countdown_clock-item'>
                    <p>{timerHours}</p>
                    <p>
                        <small>Hours</small>
                    </p>
                </div>
                <span>:</span>
                <div className='countdown_clock-item'>
                    <p>{timerMinutes}</p>
                    <p>
                        <small>Minutes</small>
                    </p>
                </div>
                <span>:</span>
                <div className='countdown_clock-item'>
                    <p>{timerSeconds}</p>
                    <p>
                        <small>Seconds</small>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Countdown;
