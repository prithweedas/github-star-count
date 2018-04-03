import React from 'react'

const BlankScreen = () => (
  <div style={styles.container}>
    <div style={styles.text}>Enter an username and press &#8629;</div>
  </div>
)

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    flex: 1,
    backgroundColor: '#f9f9f9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: '3rem',
    color: '#444'
  }
}

export default BlankScreen
