import './styles/main.css'

import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import ScrollToTop from './utils/scrollToTop'

import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import Project from './pages/Project'
import Projects from './pages/Projects'

function App() {
	return (
		<div className='App'>
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path='/komola-portfolio/home' element={<Home />} />
					<Route path='/komola-portfolio/projects' element={<Projects />} />
					<Route path='/komola-portfolio/project/:id' element={<Project />} />
					<Route path='/komola-portfolio/contacts' element={<Contacts />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App
