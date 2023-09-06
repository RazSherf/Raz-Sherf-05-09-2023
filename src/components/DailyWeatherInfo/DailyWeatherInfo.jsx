import React from 'react';
import styles from './DailyWeatherInfo.module.css';
import getWeatherIconLink from '../../utils';

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const DailyWeatherInfo = ({ day, temperature, unit, weatherCondition, weatherIconNumber }) => {
  return (
    <div className={styles.container}>
      <div className={styles.day}>{weekDays[new Date(day).getDay()]}</div>
      <img src={getWeatherIconLink(weatherIconNumber)} alt={weatherCondition} />
      <div className={styles.subWeatherInfo}>
        <div className={styles.temperature}>{temperature}{unit}</div>
        <div>{weatherCondition}</div>
      </div>
    </div>
  )
}

export default DailyWeatherInfo;
