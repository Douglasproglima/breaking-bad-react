import React from 'react';
import './style.css';
import { TiStarFullOutline } from 'react-icons/ti';

export default function CardCharacter(props) {
  const { info } = props;
  const avatar = info;

  return (
    <div className="container">
      {/* <span className={status.class}>{status.text}</span> */}
      <img src={avatar} alt={info.name} />
      <div className="content">
        <h2>{info.name}</h2>
        <div className="birth">
          <TiStarFullOutline className="iconBirth" />
          <span>{info.birthday}</span>
        </div>
        {/* <p className="desc">{info.occupation.join(', ')}</p> */}
      </div>
    </div>
  );
}
