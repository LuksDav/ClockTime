/* eslint-disable react-hooks/exhaustive-deps */
import "./Clock.scss"

import React, { useState } from "react";
import GetTime from "../../hooks/Time";
import GetClock from "../GetClock/GetClock"
import Modal from "../Modal/Modal"

import configImg from "../../assets/config.svg"

import RegionsProps from "../../regions.json"

export function Clock(){
  //Configuração do Valor do Array do JSON Regions
  const [valueArrayRegions, setValueArrayRegions] = useState(0)

  //Configuração Modal
  const [openModal, setOpenModal] = useState(false);

  //Configuração Horários
  let time = GetTime().time.tz(RegionsProps[valueArrayRegions].local)

  const deg = 6;

  let hh = time.hours() * 30;
  let mm = time.minute() * deg;
  let ss = time.second() * deg;

  //Configurando o style da rotação do relógio
  let hour = {transform: `rotateZ(${hh + (mm/12)}deg)`}
  let min = {transform: `rotateZ(${mm}deg)`}
  let sec = {transform: `rotateZ(${ss}deg)`}

  let timeVisible = time.format("HH:mm:ss")

  return(
    <div id="container">
      <div id="nav">
        <h2>Clock</h2>
        <button onClick={()=> setOpenModal(true)} >
          <img src={configImg} alt="Imagem de Configuração" />
         </button>
      </div>
      <GetClock hour={hour} min={min} sec={sec} timeVisible={timeVisible} Localization={RegionsProps[valueArrayRegions].Description}></GetClock> 
      {openModal ? (
        <Modal onClose={() => setOpenModal(false)}>
          <div id="container-region">
            <div className="regions-br">
              <div className="regions">
                <button onClick={()=> setValueArrayRegions(0)} className="region">
                  <p>Brasília, Brasil</p>
                </button>
              </div>
              <div className="regions">
                <button onClick={()=> setValueArrayRegions(1)} className="region">
                  <p>Fernando de Noronha, Brasil</p>
                </button>            
              </div>
              <div className="regions">
                <button onClick={()=> setValueArrayRegions(2)} className="region">
                  <p>Amazonas, Brasil</p>
                </button>            
              </div>
              <div className="regions">
                <button onClick={()=> setValueArrayRegions(3)} className="region">
                  <p>Acre, Brasil</p>
                </button>            
              </div>
            </div>
                    
            <div className="regions-global">
              <div className="regions">
                <button onClick={()=> setValueArrayRegions(4)} className="region">
                  <p>Tóquio, JP</p>
                </button>
              </div>
              <div className="regions">
                <button onClick={()=> setValueArrayRegions(5)} className="region">
                  <p>Nova York, USA</p>
                </button>            
              </div>
              <div className="regions">
                <button onClick={()=> setValueArrayRegions(6)} className="region">
                  <p>Londres, UK</p>
                </button>            
              </div>
              <div className="regions">
                <button onClick={()=> setValueArrayRegions(7)} className="region">
                  <p>Canada, CA</p>
                </button>            
              </div>
            </div>
          </div>
        </ Modal>
      ) : null}
    </div>
  )
}