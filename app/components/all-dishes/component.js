import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    save: function(data){
      this.sendAction('saveDish', data);
      console.log("send action from all-dishes");
    },
  }
});
