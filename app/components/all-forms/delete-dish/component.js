import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteItem(dish){
      this.attrs.deleteItem(dish);
    }
  }
});
