export default {
  name:'user',
  state: {
    hello: 'world',
  },
  reducers: {
    updateState(state, response) {
      return Object.assign({}, state, { webApplyResponse: response })
    },

  },
  effects: dispatch => ({
    addCount(payload, rootState) {
      // await new Promise(resolve => setTimeout(resolve, 1000))
      // dispatch.app.increment(payload)
      console.log(rootState)
      return 'hello'
    },
  })
}
