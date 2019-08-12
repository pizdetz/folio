import React from 'react';
import {useSpring, animated, config} from 'react-spring';


function Navigation() {
  const props = useSpring(
    {
      opacity: 1,
      marginLeft: 0,
      from: {
        opacity: 0,
        marginLeft: -1000,
      },
      config: config.gentle,
    }
  )
  return (
    <div>
      <nav className="navbar is-primary">
        <div className="container">
          <div className="navbar-brand">
            <animated.a style={props} className="navbar-item" href="#" classStyle="font-weight:bold;">
              Colton Sweeney
            </animated.a>
          </div>
        </div>
      </nav>
    </div>  
  );
}

export default Navigation;
