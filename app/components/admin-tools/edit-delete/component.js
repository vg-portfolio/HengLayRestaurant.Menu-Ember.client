import Ember from 'ember';

export default Ember.Component.extend({
  oldData: {},
  showEditModal: false,
  editDishObject: function(){
    this.set('oldData', this.get('dish'));
    console.log("data loaded");
  }.on('init'),

  actions: {
    showEdit(){
      this.toggleProperty('showEditModal');
    },
    closeModal(){
      this.toggleProperty('showEditModal');
    },
    delete(dish){
      this.attrs.deleteItem(dish);
    },
    // edit(){
    //   this.attrs.editItem();
    // }
  }
});
