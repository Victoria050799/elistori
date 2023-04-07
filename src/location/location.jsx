import "./location.css";
import { NavLink, useNavigate } from "react-router-dom";
import arrow from "./arrow-back.png";

function Location(){
    const nav = useNavigate();
    return (
      <div className="locations">
        <img className="Logo" src={arrow} alt="back" onClick={() => nav(-1)} />
        <h1 className="Title">Выберите локацию</h1>
        <div className="Buttons">
        <div> 
          <NavLink to="events" className="Buttons1">
            События в Элисте
          </NavLink>
        </div>
        <br/>
        <br/>
        <br/>
        
        <div>
          <NavLink to="eventsDistricts" className="Buttons2">
            События в районах
          </NavLink>
        </div>
        <br/>
        <br/>
        <br/>
        <div>
          <NavLink to="mainEvents" className="Buttons3">
            Главные события фестиваля
          </NavLink>
        </div>
        </div>
      </div>
    );
}

export default Location;