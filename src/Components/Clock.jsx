import { useEffect, useState } from "react";
import "../App.css";
const Clock = () => {
	const [hours, setHours] = useState();
	const [minutes, setMinutes] = useState();
	const [seconds, setSeconds] = useState();

	setInterval(() => {
		clock();
	}, 1000);

    let porcentajeHoras, porcentajeMinutos, porcentajeSegundos;
	const clock = () => {
		let date = new Date();
		let second = date.getSeconds()
		let minute =  date.getMinutes()
        let hour = date.getHours()
        
        if(hour >= 12){
            porcentajeHoras = hour / 12 * 360
        } else {
            porcentajeHoras = hour / 24 * 360

        }
        porcentajeHoras += minute / 60 * 30
        porcentajeMinutos = minute / 60 * 360
        porcentajeSegundos = second / 60 * 360

		setHours(porcentajeHoras);
		setMinutes(porcentajeMinutos);
		setSeconds(porcentajeSegundos);


	};

	return (
		<div className="clock">
			<div
				className="hand hour"
				data-hour-hand
				style={{
					transform: `translate(-50%) rotate(${hours}deg)`,
				}}></div>
			<div
				className="hand minute"
				data-minute-hand
				style={{
					transform: `translate(-50%) rotate(${minutes}deg)`,
				}}></div>
			<div
				className="hand second"
				data-second-hand
				style={{
					transform: `translate(-50%) rotate(${seconds}deg)`,
				}}></div>
			<div className="number number1">1</div>
			<div className="number number2">2</div>
			<div className="number number3">3</div>
			<div className="number number4">4</div>
			<div className="number number5">5</div>
			<div className="number number6">6</div>
			<div className="number number7">7</div>
			<div className="number number8">8</div>
			<div className="number number9">9</div>
			<div className="number number10">10</div>
			<div className="number number11">11</div>
			<div className="number number12">12</div>
		</div>
	);
};

export default Clock;
