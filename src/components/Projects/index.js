import {useNavigate} from 'react-router-dom'
import {FaPodcast} from 'react-icons/fa6'
import Header from '../HeaderL'
import './index.css'
const Projects = () => {
  const navigate = useNavigate()

  const NewProject = () => {
    navigate('/')
  }

  return (
    <div>
      <Header />
      <div className='main-container'>
        <div className='projects-container'>
          <h1>Projects</h1>
          <button type='button' id='podcasty-button' onClick={NewProject}>
            <FaPodcast className='podcasty-icon' />
            <span>Create a New PodCast</span>
          </button>
        </div>
        <div className='projects-list-container'>
          <div class='card'>
            <div class='card-image'></div>
            <div class='card-content'>
              <div>
                <h3 class='card-title'>Sample Project</h3>
                <p class='card-text'>4 Episodes</p>
              </div>
              <p> Last edited a week ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
