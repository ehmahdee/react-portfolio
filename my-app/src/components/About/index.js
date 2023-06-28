import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p style={{ fontSize: 15 + 'px' }}>
            {' '}
            Born and raised on the island of Oahu in the heart of Honolulu, I've
            always been inspired by the diverse stories hidden away in everyday
            communities. After six years in the film industry I'm excited to
            master a new set of skills. I'm a puzzle lover at heart, so I
            welcome opportunities to creatively problem-solve.
          </p>
          <p style={{ fontSize: 15 + 'px' }}>
            One of my aspirations in life is to be a life-long learner. I'm
            excited to dive in to all things frontend and design. If you're
            willing to teach, I'm ready to learn and work!{' '}
          </p>
        </div>

          <div className='icon-container'>
          <div className="icon1" style={{ marginLeft: -10 + 'px' }}>
              <FontAwesomeIcon icon={faBootstrap} color="#7834fc" />
            </div>
            <div className="icon2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="icon3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="icon4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="icon5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="icon6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default About
