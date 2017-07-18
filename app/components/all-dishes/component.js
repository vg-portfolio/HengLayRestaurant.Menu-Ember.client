import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    filter(choice){
      this.set('sortBy', choice);
      console.log(this.get('newCat'));
      console.log(this.get('sortedCategories'));
    },
  }
});
