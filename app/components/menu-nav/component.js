import Ember from 'ember';

export default Ember.Component.extend({
  //Category array from route
  allCategories: Ember.computed.alias('categories'),

  type: null,

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
  }
});