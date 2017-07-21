import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  beforeModel() {
    if ((this.get('isAuthenticated'))) {
      console.log("SIGNIN");
      this.transitionTo('index');
    }
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
