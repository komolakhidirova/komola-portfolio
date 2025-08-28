import Contact from './sections/Contact'
import Experience from './sections/Experience'
import FeatureCards from './sections/FeatureCards'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import Showcase from './sections/Showcase'
import TechStack from './sections/TechStack'

const App = () => {
	return (
		<>
			<NavBar />
			<Hero />
			<FeatureCards />
			<Showcase />
			<Experience />
			<TechStack />
			<Contact />
			<Footer />
		</>
	)
}

export default App
