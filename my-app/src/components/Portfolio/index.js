import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import cantDecide from '../../assets/images/cantdecide.png'
import WaterBattle from '../../assets/images/waterbattle.png'
import ShareIt from '../../assets/images/shareit.png'
import MellsMoss from '../../assets/images/mellsmoss.png'
import WeatherApi from '../../assets/images/weatherapi.png'
import DailyOrganizer from '../../assets/images/dailyorganizer.png'

const Portfolio = () => {
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
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'F',
                'e',
                'a',
                't',
                'u',
                'r',
                'e',
                'd',
                ' ',
                'W',
                'o',
                'r',
                'k',
                's',
              ]}
              idx={15}
            />
          </h1>
        </div>

        <div className="portfolio-section">
          <div className="square square1">
            <img
              className="image-container"
              src={WaterBattle}
              alt="WaterBattle"
            />
            <ul>
              <li>
                <a href="https://evening-ocean-56179.herokuapp.com/">
                  Deployed website
                </a>
              </li>
              <li>
                <a href="https://github.com/ehmahdee/Waterbattle">Github</a>
              </li>
            </ul>
          </div>

          <div className="square square2">
            <img
              className="image-container"
              src={ShareIt}
              alt="Social media post manager"
            />
            <ul>
              <li>
                <a href="https://agile-ocean-55089.herokuapp.com/">
                  Deployed website
                </a>
              </li>
              <li>
                <a href="https://github.com/ehmahdee/ShareIt">Github</a>
              </li>
            </ul>
          </div>

          <div className="square square3">
            <img
              className="image-container"
              src={MellsMoss}
              alt="Webpage for Mell's Moss, a nutritional all-natural drink"
            />
            <ul>
              <li>
                <a href="https://joshd50.github.io/RER-Healthmart/">
                  Deployed website
                </a>
              </li>
              <li>
                <a href="https://github.com/ehmahdee/RER-Healthmart">Github</a>
              </li>
            </ul>
          </div>

          <div className="square square4">
            <img
              className="image-container"
              src={WeatherApi}
              alt="Clean and simple weather dashboard"
            />
            <ul>
              <li>
                <a href="https://ehmahdee.github.io/WeatherApi/">
                  Deployed website
                </a>
              </li>
              <li>
                <a href="https://github.com/ehmahdee/WeatherApi">Github</a>
              </li>
            </ul>
          </div>

          <div className="square square5">
            <img
              className="image-container"
              src={cantDecide}
              alt="Date night indecision killer"
            />
            <ul>
              <li>
                <a href="https://ctvb.github.io/cantdecide/">
                  Deployed website
                </a>
              </li>
              <li>
                <a href="https://github.com/ehmahdee/cantdecide">Github</a>
              </li>
            </ul>
          </div>

          <div className="square square6">
            <img
              className="image-container"
              src={DailyOrganizer}
              alt="Simple daily organizer"
            />
            <ul>
              <li>
                <a href="https://ehmahdee.github.io/daily-organizer/">
                  Deployed website
                </a>
              </li>
              <li>
                <a href="https://github.com/ehmahdee/daily-organizer">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Portfolio
