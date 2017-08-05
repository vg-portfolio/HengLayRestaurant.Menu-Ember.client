import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  sortedDishes: Ember.computed.sort('filteredCategory.dishes', 'sortDefinition'),
  sortDefinition: ['name:asc'],
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
