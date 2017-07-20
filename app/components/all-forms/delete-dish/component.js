import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteItem(dish){
      console.log("DELETED");
      this.attrs.deleteItem(dish);
    }
  }
});
