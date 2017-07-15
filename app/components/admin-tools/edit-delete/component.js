import Ember from 'ember';

export default Ember.Component.extend({
  oldData: {},

  //Creates POJO object for this dish
  populateThisDish: function(){
    this.set('oldData', this.get('dish'));
    console.log("data loaded");
  }.on('init'),

  showEditModal: false,

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
