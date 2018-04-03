import React from 'react'

const ProfileCard = ({
  user: { image, name, location, followers, following }
}) => (
  <div style={styles.container}>
    <img src={image} alt="profile pic" style={styles.image} />
    <div style={styles.details}>
      <p style={styles.name}> {name} </p>
      <p style={styles.location}> {location} </p>
      <div style={styles.extra}>
        <p style={styles.followers}> Followers: {followers} </p>
        <p style={styles.following}>Following {following} </p>
      </div>
    </div>
  </div>
)

const styles = {
  container: {
    height: '20rem',
    width: '50rem',
    padding: '2rem',
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  },
  image: {
    height: '15rem',
    width: '15rem',
    borderRadius: '50%'
  },
  details: {
    color: '#444',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    paddingLeft: '2rem',
    justifyContent: 'center'
  },
  name: {
    fontSize: '2.5rem',
    fontWeight: 'bold'
  },
  location: {
    fontSize: '1.5rem',
    fontWeight: '600'
  },
  extra: {
    display: 'flex',
    paddingTop: '0.5rem'
  },
  followers: {
    fontSize: '.8rem',
    fontWeight: '500',
    marginRight: '1.2rem'
  },
  following: {
    fontSize: '0.8rem',
    fontWeight: '500'
  }
}
export default ProfileCard
