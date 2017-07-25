import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  isItemModalShown: false,
  isCategoryModalShown: false,
  isEditCategoryShown: false,

  actions: {
    showItemModal(){
      this.toggleProperty('isItemModalShown');
    },
    showCategoryModal(){
      this.toggleProperty('isCategoryModalShown');
    },
    showEditCategoryModal(){
      this.toggleProperty('isEditCategoryShown');
      console.log(this.get('isEditCategoryShown'));
    }
  },
});
