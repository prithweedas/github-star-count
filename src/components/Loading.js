import React from 'react'

const BlankScreen = () => (
  <div style={styles.container}>
    <div className="spinner" style={styles.spinner} />
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
  spinner: {
    position: 'relative',
    width: '7rem',
    height: '7rem',
    borderRadius: '50%'
  }
}

export default BlankScreen
