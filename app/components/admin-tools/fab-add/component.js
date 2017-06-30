import Ember from 'ember';

export default Ember.Component.extend({
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
