import Ember from 'ember';

export default Ember.Component.extend({
  data: {},

  actions: {
    saveNewItem: function(){
      console.log(this.get('data'));
      this.sendAction('saveDish', this.get('data'));

    },
    edit: function(){
      //Create edit logic here
    },
    delete: function(){
      //Add delete logic here
    },
  }
});
