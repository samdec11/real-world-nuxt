import EventService from '~/services/EventService'

export const state = () => ({
  events: [],
  event: {},
})

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  },
}

export const actions = {
  async fetchEvents({ commit }) {
    const { data } = await EventService.getEvents()
    commit('SET_EVENTS', data)
  },
  async fetchEvent({ commit }, id) {
    const { data } = await EventService.getEvent(id)
    commit('SET_EVENT', data)
  },
}
