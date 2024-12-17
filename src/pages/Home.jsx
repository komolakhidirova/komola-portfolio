import Skill from '../components/btnSkill/BtnSkill'
import Header from '../components/header/Header'
import CssImg from './../img/icons/css.svg'
import FirebaseImg from './../img/icons/firebase.svg'
import HtmlImg from './../img/icons/html.svg'
import JsImg from './../img/icons/js.svg'
import ReactImg from './../img/icons/react.svg'
import ReduxImg from './../img/icons/redux.svg'
import styledComponentsImg from './../img/icons/styled-components.svg'

const Home = () => {
	return (
		<>
			<Header />
			<main className='section'>
				<div className='container'>
					<ul className='content-list'>
						<li className='content-list__item'>
							<h2 className='title-2'>Key Skills</h2>

							<div className='content-list__skills'>
								<Skill img={JsImg} text={'JavaScript'} />
								<Skill img={ReactImg} text={'React'} />
								<Skill img={HtmlImg} text={'HTML'} />
								<Skill img={CssImg} text={'CSS'} />
								<Skill img={FirebaseImg} text={'Firebase'} />
								<Skill img={ReduxImg} text={'Redux'} />
								<Skill img={styledComponentsImg} text={'Styled Components'} />
							</div>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2'>Soft Skills</h2>
							<p>
								Problem-solving, critical thinking, discipline, communication
								skills and self-learning.
							</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	)
}

export default Home
