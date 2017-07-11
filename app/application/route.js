import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  actions: {
    signOut () {
      this.get('auth').signOut()
        // .then(() => this.get('store').unloadAll())
        .then(() => this.transitionTo('index'))
        .then(() => {
          Materialize.toast('You are signed out', 3000, 'rounded');
        })
        .catch(() => {
          Materialize.toast('Sign out failed', 3000, 'rounded');
        });
    }, //signOut

    error (reason) {
      let unauthorized = reason.errors && reason.errors.some((error) =>
        error.status === '401'
      );

      if (unauthorized) {
        this.get('flashMessages')
        .danger('You must be authenticated to access this page.');
        this.transitionTo('/sign-in');
      } else {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      }
      return false;
    }, //error
  }, //actions

});
