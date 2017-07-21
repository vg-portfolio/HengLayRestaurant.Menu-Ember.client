import Ember from 'ember';

export default Ember.Component.extend({
  data: {},

  didInsertElement(){
    this.set('data', {});
  },

  actions: {
    closeModal(){
      this.toggleProperty('isModalShown');
    },
    saveNewCategory: function(){
      this.attrs.saveCategory(this.get('data'));
      this.toggleProperty('isModalShown');
    },

    cancel: function(){
      this.set('data', {});
      this.toggleProperty('isModalShown');
    },

    edit: function(){
      //Create edit logic here
    },
    delete: function(){
      //Add delete logic here
    },
  }
});
