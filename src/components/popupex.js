import React, {useState, useRef} from 'react'
import Modal from 'react-modal'

import {FaPodcast} from 'react-icons/fa6'
import './index.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const HomeContent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [projectName, setProjectName] = useState('')
  const subtitleRef = useRef(null)
  const [errorMessage, setErrorMessage] = useState('') // State for error message

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    if (subtitleRef.current) {
      subtitleRef.current.style.color = '#f00'
    }
  }

  function closeModal() {
    setIsOpen(false)
    setProjectName('') // Clear project name on close
    setErrorMessage('') // Clear error message on close
  }

  function handleCreate() {
    if (projectName.trim() === '') {
      setErrorMessage('Project name cannot be empty') // Set error message
    } else {
      // Handle project creation logic here (e.g., store project name)
      closeModal()
    }
  }

  return (
    <div id='create-the-podcast'>
      <h1 className='podcast-head1'>Create a New PodCast</h1>
      <img
        src='https://res.cloudinary.com/dqfqwre2q/image/upload/v1717916335/pavandiscussions.png'
        alt='discussions'
        className='podcast-image'
      />
      <p id='podcast-para'>{/* Truncated for brevity */}</p>
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
        <div>
          <h2>Create Podcast</h2>
          <label htmlFor='projectName'>Enter Project Name:</label>
          <input
            type='text'
            id='projectName'
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
          />
          {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}{' '}
          {/* Display error message if present */}
          <button onClick={closeModal}>Cancel</button>
          <button onClick={handleCreate}>Create</button>
          <h2 ref={subtitleRef}>This is the subtitle</h2>
        </div>
      </Modal>
    </div>
  )
}

export default HomeContent
