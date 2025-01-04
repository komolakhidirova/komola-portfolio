import Skill from '../components/btnSkill/BtnSkill'
import Education from '../components/btnEducation/BtnEducation'
import Header from '../components/header/Header'
import CssImg from './../img/icons/css.svg'
import FirebaseImg from './../img/icons/firebase.svg'
import HtmlImg from './../img/icons/html.svg'
import JsImg from './../img/icons/js.svg'
import ReactImg from './../img/icons/react.svg'
import ReduxImg from './../img/icons/redux.svg'
import googleImg from './../img/icons/google.png'
import dukeImg from './../img/icons/duke.png'
import siilImg from './../img/icons/siil.png'
import certificate from './../img/certificate.pdf'
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

						<li className='content-list__item'>
							<h2 className='title-2'>Education</h2>

								<p><strong>Bachelor</strong></p>
								<div className='content-list__uni'>
									<a href={certificate} download='certificate_of_enrollment.pdf' className='btn'>
										<Education img={siilImg} text={'Information Systems and Technology'}/>
									</a>
								</div>
								
								
								<p><strong>Courses</strong></p>
								<div className='content-list__education'>
									<Education img={dukeImg} text={'Software Engineering'} link={'https://www.coursera.org/account/accomplishments/specialization/3ADBB89SCWT3'}/>
									<Education img={googleImg} text={'UX Design'} link={'https://www.coursera.org/account/accomplishments/professional-cert/5JP5YVM5B36P'}/>
									<Education img={googleImg} text={'Digital Marketing'} link={'https://www.coursera.org/account/accomplishments/professional-cert/U3GKBRH7J94J'}/>
									<Education img={googleImg} text={'Project Management'} link={'https://www.coursera.org/account/accomplishments/professional-cert/PMC3LLGYK5V2'}/>
							        </div>
						</li>
					</ul>
				</div>
			</main>
		</>
	)
}

export default Home
