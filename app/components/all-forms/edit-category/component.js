import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editCategory(category){
      this.attrs.editCategory(category);
      this.sendAction('close');
    }
  }
});
