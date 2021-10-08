/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import "./GetClock.scss";

import clockImg from '../../assets/clock.svg'

export default function GetClock({hour = () => {}, min = () => {},sec = () => {}, timeVisible = () => {}, Localization = () => {}}){

  return (
    <div id="containerClock">
      <div id="clock">
        <img src={clockImg} alt="Image clock" />
        <div className="hour">
          <div className="hr" style={hour}></div>
        </div>
        <div className="min">
          <div className="mn" style={min}></div>
        </div>
        <div className="sec">
          <div className="sc" style={sec}></div>
        </div>
      </div>

      <div className="time">
        <h2 className="schedule">{timeVisible}</h2>
        <h2 className="local">{Localization}</h2>
      </div>
    </div>
  );
}
