import React from 'react';
import styles from './DailyWeatherInfo.module.css';

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const DailyWeatherInfo = ({ day, temperature, unit, weatherCondition }) => {
  return (
    <div className={styles.container}>
      <div className={styles.day}>{weekDays[new Date(day).getDay()]}</div>
      <img src="/sunny.png" alt={weatherCondition} />
      <div className={styles.subWeatherInfo}>
        <div className={styles.temperature}>{temperature}{unit}</div>
        <div>{weatherCondition}</div>
      </div>
    </div>
  )
}

export default DailyWeatherInfo;
