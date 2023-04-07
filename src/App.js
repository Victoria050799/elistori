import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import location from './location/location';
import events from "./events/events";
import eventsDistricts from "./eventsDistricts/eventsDistricts";


function App() {
	return(
	<BrowserRouter>
		<Routes>
			<Route exact path='/' Component={location}/>
			<Route exact path='events' Component={events}/>
			<Route exact path='eventsDistricts' Component={eventsDistricts}/>
		</Routes>
	</BrowserRouter>
	);
}

export default App;

