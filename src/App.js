import './App.css';
import { useState, useEffect } from 'react';
function App() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		setInterval(() => {
			setTime(new Date());
		}, 1000);
	}, []);

	return (
		<>
			<div className='App'>
				This is my first azure react app. current time is {time.toTimeString()}
			</div>
		</>
	);
}

export default App;
