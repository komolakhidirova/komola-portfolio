import Project from '../components/project/Project'
import { projects } from '../helpers/projectsList'

const Projects = () => {
	return (
		<main className='section'>
			<h2 className='title-1'>Projects</h2>
				<div className='container'>
					<ul className='projects'>
						{projects.map((project, index) => {
							return (
								<Project
									key={index}
									title={project.title}
									img={project.img}
									index={index}
								/>
							)
						})}
					</ul>
				</div>
			</main>
	)
}

export default Projects
