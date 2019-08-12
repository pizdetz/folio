import React from 'react';
import {useSpring, animated, config} from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const slowProps = useSpring({opacity: 1, from: {opacity: 0}, config: { duration: 2318}})
  const slProps = useSpring({opacity: 1, from: {opacity: 0}, config: { duration: 756}})
  const propsSlideDown = useSpring(
    {
      opacity: 1,
      marginTop: 0,
      from: {
        opacity: 0,
        marginTop: -1000,
      },
      config: config.gentle
    }
  )

  return(
    <div>
      <animated.section style={slProps} className="hero is-fullheight-with-navbar is-img">
        <div className="hero-body">
          <div class="container has-text-centered">
            <animated.h1 style={propsSlideDown} className="title is-family-primary">Welcome to my portfolio.</animated.h1>
            <animated.h3 style={slowProps} className="subtitle is-family-secondary">My name is Colton Sweeney</animated.h3>
          </div>
        </div>

      </animated.section>
    </div>
  )
}

export default Home;