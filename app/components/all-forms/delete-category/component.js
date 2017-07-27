import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(category){
      this.attrs.deleteCategory(category);
    },
  }
});
