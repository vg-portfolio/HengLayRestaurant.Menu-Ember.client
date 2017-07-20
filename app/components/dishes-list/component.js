import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  // type: null,
  // sorted: function(){
  //   if(this.get('type') === null){
  //     return this.get('categories');
  //   } else {
  //     return this.get('categories').filterBy('categoryType', this.get('type'));
  //   }
  // }.property('type'),

  actions: {
    // filter(cat){
    //   this.set('type', cat);
    //   console.log(cat);
    // },

  },//.actions
});
