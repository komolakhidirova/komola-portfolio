import { useParams } from 'react-router-dom'
import BtnGitHub from '../components/btnGitHub/BtnGitHub'
import Skill from '../components/btnSkill/BtnSkill'
import BtnWebLink from '../components/btnWebLink/BtnWebLink'
import { projects } from '../helpers/projectsList'
import CssImg from './../img/icons/css.svg'
import FirebaseImg from './../img/icons/firebase.svg'
import HtmlImg from './../img/icons/html.svg'
import JsImg from './../img/icons/js.svg'
import ReactImg from './../img/icons/react.svg'
import ReduxImg from './../img/icons/redux.svg'
import styledComponentsImg from './../img/icons/styled-components.svg'

// Page
const Project = () => {
	const { id } = useParams()
	const project = projects[id]

	return (
		<>
			<div className='title-1-container'>
				<h1 className='title-1'>{project.title}</h1>
			</div>
			<main className='section'>
				<div className='container'>
					<div className='project-details'>
						<img
							src={project.img}
							alt={project.title}
							className='project-details__cover'
						/>

						<div className='project-details__desc'>
							<strong>Technologies I have used:</strong>
						</div>
						<ul className='content-list'>
							<li className='content-list__item'>
								<div className='content-list__skills'>
									{project.JS && <Skill img={JsImg} text={'JavaScript'} />}
									{project.React && <Skill img={ReactImg} text={'React'} />}
									{project.HTML && <Skill img={HtmlImg} text={'HTML'} />}
									{project.CSS && <Skill img={CssImg} text={'CSS'} />}
									{project.Firebase && (
										<Skill img={FirebaseImg} text={'Firebase'} />
									)}
									{project.Redux && <Skill img={ReduxImg} text={'Redux'} />}
									{project.StyledComponents && (
										<Skill
											img={styledComponentsImg}
											text={'Styled Components'}
										/>
									)}
								</div>
							</li>
						</ul>
						<div className='project-details__links'>
							{project.webLink && <BtnWebLink link={project.webLink} />}
							{project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Project
