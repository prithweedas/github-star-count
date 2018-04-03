import React from 'react'

const SearchBox = ({ setUser, ...otherProps }) => {
  return (
    <div style={styles.searchBoxContainer}>
      <input
        style={styles.searchbox}
        onKeyUp={e => {
          if (e.keyCode === 13) setUser()
        }}
        {...otherProps}
      />
    </div>
  )
}

const styles = {
  searchBoxContainer: {
    height: '7rem',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#1976d2',
    paddingVertical: '2rem'
  },
  searchbox: {
    minWidth: 420,
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    fontSize: '3rem',
    width: '70%',
    height: '3rem',
    border: 'none',
    borderRadius: '25px',
    color: '#444',
    outline: 'none'
  }
}

export default SearchBox
