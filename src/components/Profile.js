import React from 'react'

import ProfileCard from './ProfileCard'
import Repo from './Repo'

const Profile = ({ user, repos, openRepo }) => (
  <div style={styles.container}>
    <ProfileCard user={user} />
    <div style={styles.devider} />
    <div style={styles.repoList}>
      {repos.map((repo, i) => <Repo openRepo={openRepo} key={i} repo={repo} />)}{' '}
    </div>
  </div>
)

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  devider: {
    width: '70%',
    height: '0.2rem',
    backgroundColor: '#444'
  },
  repoList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}

export default Profile
