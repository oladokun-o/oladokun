//import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css'
import Home from './components/Home';

function App() {

	return (
		<div className="App p-2 p-md-4 p-lg-5">
			<div className="App-editor shadow">
				<Home></Home>
			</div>
		</div>
	);
}


export default App;
