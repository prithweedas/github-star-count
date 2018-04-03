import React from 'react'

const Repo = ({ openRepo, repo: { name, url, stars } }) => (
  <div className="repo" onClick={() => openRepo(url)} style={styles.container}>
    <p style={styles.name}>{name}</p>
    <p style={styles.stars}>&#9733;{stars}</p>
  </div>
)

const styles = {
  container: {
    display: 'flex',
    width: '50rem',
    flexDirection: 'column',
    height: '6rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    padding: '1.1rem',
    borderRadius: '0.3rem',
    color: '#444',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    boxShadow: '4px 4px 5px rgba(85, 85, 85, 0.11)'
  },
  name: {
    fontSize: '3rem',
    fontWieght: '600'
  },
  stars: {
    color: '#1976d2',
    fontSize: '2rem'
  }
}

export default Repo
