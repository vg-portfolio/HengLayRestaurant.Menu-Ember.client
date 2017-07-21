import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  
  isItemModalShown: false,
  isCategoryModalShown: false,

  actions: {
    showItemModal(){
      this.toggleProperty('isItemModalShown');
    },
    showCategoryModal(){
      this.toggleProperty('isCategoryModalShown');
    },
    // saveDish(dish){
    //   this.sendAction("saveDish", dish);
    // },
  },
});
