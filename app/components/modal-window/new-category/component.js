import Ember from 'ember';

export default Ember.Component.extend({
  data: {},

  isEditCategoryShown: false,

  didInsertElement(){
    this.set('data', {});
  },

  actions: {
    toggleAllCategoryModal(){
      this.toggleProperty('isEditCategoryShown');
      console.log("new cate component");
    },
    closeModal(){
      this.toggleProperty('isModalShown');
      console.log("close MOdal");
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
