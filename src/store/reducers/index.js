const initialState = {
  username: null,
  appState: 'loading',
  repos: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return {
        ...state,
        repos: [...state.repos]
      }
  }
}
