import Project from '../components/project/Project'
import { projects } from '../helpers/projectsList'

const Projects = () => {
	return (
		<>
			<div className='title-1-container'>
			<h2 className='title-1'>Projects</h2>
			</div>
		                <main className='section'>
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
			</>
	)
}

export default Projects
