export const state = () => ({
  user: null,
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

export const actions = {
  login({ commit }, { email, password }) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        commit('setUser', response.user);
        // ここでユーザー情報をstateにセット
      })
      .catch((error) => {
        throw error;
      });
  },
  logout({ commit }) {
    return firebase.auth().signOut()
      .then(() => {
        commit('setUser', null);
        // ログアウト時にユーザー情報をnullにセット
      })
      .catch((error) => {
        throw error;
      });
  },
};
