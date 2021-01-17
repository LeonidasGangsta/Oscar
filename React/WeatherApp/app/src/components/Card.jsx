import React from 'react';
import styles from './styles/Card.module.css'

export default function Card(props) {

  const {max, min, name, img, onClose} = props
  // acá va tu código
  return (
  <div className={styles.weatherCard}>
    <h2>{name}</h2>
    <div className={styles.temps}>
      <ol>
        <li>Min</li>
        <li>{Math.round(min)}°</li>
      </ol>
      <ol>
        <li>Max</li>
        <li>{Math.round(max)}°</li>
      </ol>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=""/>
    </div>
    <button className={styles.closeBtn} onClick={onClose}>X</button>
  </div>)
};