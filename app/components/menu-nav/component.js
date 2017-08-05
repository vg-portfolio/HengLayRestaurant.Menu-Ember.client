import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  //Category array from route
  allCategories: Ember.computed.alias('categories'),

  type: null,

  isFilterModalShown: false,

  filteredCategory: function(){
    if(this.get('type') === null){
      return this.get('allCategories');
    } else {
      return this.get('allCategories').filterBy('categoryType', this.get('type'));
    }
  }.property('allCategories', 'type'),

  actions: {
    filter(cat){
      this.set('type', cat);
    },
    showFilter(){
      this.toggleProperty('isFilterModalShown');
    }
  }
});
