import Ember from 'ember';

export default Ember.Component.extend({
  data: {},

  didInsertElement(){
    this.set('data', {});
  },

  actions: {
    saveNewItem: function(){
      this.attrs.saveItem(this.get('data'));
      this.sendAction('closeModal');
    },

    cancel: function(){
      this.set('data', {});
    },

    edit: function(){
      //Create edit logic here
    },
    delete: function(){
      //Add delete logic here
    },
  }
});
