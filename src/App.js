import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LocationDetails from './pages/LocationDetails'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="" element={<Home />} />
					<Route path="/details/:id" element={<LocationDetails />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
