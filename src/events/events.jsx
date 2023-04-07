import "./events.css";
import { useNavigate } from "react-router-dom";
import arrow from "./arrow-back.png";
function Events(){
    const nav = useNavigate();
    return(
        <div className="evets">
             <img className="Logo" src={arrow} alt="back"onClick={() => nav(-1)} />
            <h1 className="Title">Мероприятия в Элисте</h1>
            <p className="P">Каждые субботу и воскресенье будут проходить различные события: концерты, мастер-классы, показательные выступления и др. В будни можно посетить популярные туристические объекты и культурные мероприятия</p>
            <h2 className="h2">Выберите день</h2>
            <div className="calendar">
                <div className="left">
                   <input value={'1 апреля(сб.)'}/>
                    <input value={'2 апреля(сб.)'}/>
                    <input value={'3 апреля(сб.)'}/>
                    <input value={'4 апреля(сб.)'}/>
                    <input value={'5 апреля(сб.)'}/>
                </div><br />
                <div className="right">
                    <input value={'6 апреля(сб.)'}/>
                    <input value={'7 апреля(сб.)'}/>
                    <input value={'8 апреля(сб.)'}/>
                    <input value={'9 апреля(сб.)'}/>
                    <input value={'10 апреля(сб.)'}/>
                </div>
         
            </div>
        </div>

    );
}

export default Events;