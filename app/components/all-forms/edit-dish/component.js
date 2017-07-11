import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editItem(){
      // let category = this.store.peekRecord('category', this.get('newData.category'));
      // let data = category.get('dishes').pushObject(this.get('newData'));
      this.attrs.editItem(this.get('newData'));
      console.log(this.get('newData.category'));
    },
  }
});
