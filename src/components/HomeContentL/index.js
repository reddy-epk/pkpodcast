import React, {useState} from 'react'
//import {useHistory} from 'react-router-dom'
import Modal from 'react-modal'

import {FaPodcast} from 'react-icons/fa6'
import './index.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    borderRadius: '8px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const HomeContent = () => {
  //  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [projectNames, setProjectNames] = useState([])

  function handleCreate() {
    setIsOpen(false)
    if (projectName.trim() === '') {
      setErrorMessage("Project name can't be empty")
      setIsOpen(true)
    } else {
      const updatedNames = [...projectNames, projectName] // Add new name to array
      setProjectNames(updatedNames)
      localStorage.setItem('projectName', JSON.stringify(updatedNames)) // Store updated array
      setProjectName('') // Clear input field after successful creation
    }
  }

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false)
    setErrorMessage('')
  }

  return (
    <div id='create-the-podcast'>
      <h1 className='podcast-head1'>Create a New PodCast</h1>
      <img
        src='https://res.cloudinary.com/dqfqwre2q/image/upload/v1717916335/pavandiscussions.png'
        alt='dissussions'
        className='podcast-image'
      />
      <p id='podcast-para'>
        Podcasts offer a world of on-demand audio entertainment, with shows on
        every topic imaginable. Whether you're into true crime, deep dives into
        science, or just a good laugh, there's a <br /> podcast out there for
        you. This React project lets you explore and enjoy that
        <br /> vast world, all from the comfort of your web browser.
        <br /> Tune in and discover something new!
      </p>
      <button type='button' id='podcast-button' onClick={openModal}>
        <FaPodcast className='podcast-icon' />
        <span>Create a New PodCast</span>
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        onAfterOpen={afterOpenModal}
        style={customStyles}
      >
        <div id='on_pop_up'>
          <h2>Create Podcast</h2>
          <label htmlFor='projectName'>Enter Project Name:</label>
          <input
            type='text'
            id='projectName'
            className='projectName'
            placeholder='Type Here'
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
          />
          {errorMessage && (
            <p style={{color: 'red', fontSize: '12px', marginLeft: '10px'}}>
              {errorMessage}
            </p>
          )}
          <div id='buttons-classified'>
            <button onClick={closeModal} className='cancel' type='button'>
              Cancel
            </button>
            <button onClick={handleCreate} id='create' type='button'>
              Create
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
export default HomeContent