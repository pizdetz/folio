import React from 'react';
import {useSpring, animated}from 'react-spring';


function Gallery() {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return (
    <animated.div style={props}>
      <section className="hero is-fullheight-with-navbar is-img">
        <div className="hero-body">
          <div class="container has-text-centered">
            
          </div>
        </div>
      </section>
    </animated.div>  
  );
}

export default Gallery;

