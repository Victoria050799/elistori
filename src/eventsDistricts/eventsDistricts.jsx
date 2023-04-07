import "./eventsDistricts.css";
import { useNavigate } from "react-router-dom";
import arrow from "./arrow-back.png";


function Districts(){
    const nav = useNavigate();
    return(
        <div className="districts">
             <img className="Logo" src={arrow} alt="back"onClick={() => nav(-1)} />
             <h1 className="Title">Выберите район</h1>
             
             <div className="li">
                <div className="left">
                   <input value={'Городовиковский'}/>
                    <input value={'Ики-Бурульский'}/>
                    <input value={'Кетченеровский'}/>
                    <input value={'Лаганский'}/>
                    <input value={'Малодербетовский'}/>
                    <input value={'Октябрьский'}/>
                    <input value={'Приютненский'}/>
                </div>
                <div className="right">
                    <input value={'Сарпиновский'}/>
                    <input value={'Целинный'}/>
                    <input value={'Черноземельский'}/>
                    <input value={'Юстинский'}/>
                    <input value={'Яшалтинский'}/>
                    <input value={'Яшкульский'}/>
                </div>
              </div>
              </div>
            );
            }


export default Districts;