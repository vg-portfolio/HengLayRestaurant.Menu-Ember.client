import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  isItemModalShown: false,
  isCategoryModalShown: false,

  actions: {
    signOut: function(){
      this.attrs.signOut();
    },
    showItemModal(){
      this.toggleProperty('isItemModalShown');
    },
    toggleCategoryModal(){
      this.toggleProperty('isCategoryModalShown');
    },
  },
});
