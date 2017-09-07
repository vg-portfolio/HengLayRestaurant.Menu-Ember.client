import Ember from 'ember';

export default Ember.Component.extend({
  data: {},

  didInsertElement(){
    this.set('data', {});
    console.log(this.get('categories'));
  },

  actions: {
    saveNewItem: function(){
      this.attrs.saveItem(this.get('data'));
      this.sendAction('closeModal');
    },

    cancel: function(){
      this.set('data', {});
      console.log("HIIII");
    },

    edit: function(){
      //Create edit logic here
    },
    delete: function(){
      //Add delete logic here
    },
  }
});
