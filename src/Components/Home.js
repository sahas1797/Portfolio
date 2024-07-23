import React from 'react';
import Typing from 'react-typing-effect';

function Home() {

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width : '100%',
    height: '45vh'
  };

  const leftHalfStyle = {
    textAlign: 'center'
  };

  const pHello = {
    fontFamily : 'Monaco',
    fontSize : '20px',
    margin: '0'
  };

  const h1Style = {
    fontFamily : 'Georgia',
    fontSize: '3em',
    margin: '0'
  };

  const pRole = {
    fontFamily : 'Courier',
    fontSize : '32px',
    margin: '0',
    color: '#333',
    textShadow: '5px 5px 4px rgba(0, 0, 0, 0.3)'

  };

  return (
    <div id="home" style={containerStyle}>

      <div style={leftHalfStyle}>

        <div>
          <p style={pHello}>Hello I'm,</p>
        </div>

        <div>
          <h1 style={h1Style}>
            <Typing
              text={['Sahas Pasupunoori']}
              speed={150}
              eraseSpeed={100}
              typingDelay={30}
            />
          </h1>
        </div>

        <div>
          <p style={pRole}>Frontend Developer</p>
        </div>

      </div>

    </div>
  );
}

export default Home;
