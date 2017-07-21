import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  beforeModel() {
    //check if user is already logged in. If yes transition to index
  },

  model () {
    return RSVP.Promise.resolve({});
  },

  actions: {
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
      .then(() => this.transitionTo('index'))
      .then(() => Materialize.toast('Welcome back!', 3000, 'rounded'))
      .catch(() => {
        Materialize.toast('Please make sure your username and password are correct', 3000, 'rounded');
      });
    },
  },
});
