import { login, getInfo } from '../../api/user'
import { getToken, setToken, removeToken } from '../../utils/auth'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    userId: '',
    roles: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_USERID: (state, userid) => {
    state.userId = userid
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // 用户登录
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(res => {
        commit('SET_TOKEN', res.msg)
        setToken(res.msg, userInfo.remember)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 获取用户信息
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo().then(res => {
        const { data } = res
        const { userName, userId, userPositionId } = data
        commit('SET_NAME', userName)
        commit('SET_USERID', userId)
        commit('SET_ROLES', userPositionId)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 登出
  logout({ commit, state }) {
    return new Promise((resolve) => {
      removeToken()
      resolve()
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
    })
  },

  // 刷新token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken()
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

