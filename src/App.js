// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useCallback, useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';

function App() {
	let title = 'TextUtils';
	let about = 'About Utils';
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [alert, setAlert] = useState(null);

	const showAlert = useCallback((alert) => {
		setAlert(alert);
		setTimeout(() => {
			setAlert(null);
		}, 3000);
	}, []);

	return (
		<Router>
			<div
				style={{ minHeight: '100vh' }}
				className={isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'}
			>
				<Navbar
					title={title}
					about={about}
					isDarkMode={isDarkMode}
					setIsDarkMode={setIsDarkMode}
					showAlert={showAlert}
				/>
				<Alert alert={alert} />
				<div className='container'>
					<Routes>
            <Route exact path='./about' element={<About />} />
            <Route exact path='./' element={<TextForm isDarkMode={isDarkMode} />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
