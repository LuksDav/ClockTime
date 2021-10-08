/* eslint-disable react-hooks/rules-of-hooks */
import moment from 'moment';
import 'moment-timezone';
import { useState } from "react";


const GetTime = () => {

  let time = moment.tz('America/Sao_Paulo');

  const [isTime, setIsTime] = useState(time.format("HH:mm:ss"));

  const updateTime = () => {
    let time = moment.tz('America/Sao_Paulo').format("HH:mm:ss");
    setIsTime(time);
  }

  setInterval(updateTime, 1000);

  let times = {
    "time": time,
    "isTime": isTime,
  }
  
  return (times)

}

export default GetTime