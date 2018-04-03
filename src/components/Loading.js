import React from 'react'

const BlankScreen = () => (
  <div style={styles.container}>
    <div className="spinner" style={styles.spinner} />
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
  spinner: {
    position: 'relative',
    width: '7rem',
    height: '7rem',
    borderRadius: '50%'
  }
}

export default BlankScreen
