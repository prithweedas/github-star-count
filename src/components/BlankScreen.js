import React from 'react'

const BlankScreen = ({ text }) => (
  <div style={styles.container}>
    <div style={styles.text}>{text}</div>
  </div>
)

const styles = {
  container: {
    position: 'absolute',
    top: '7rem',
    bottom: 0,
    left: 0,
    right: 0,
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
