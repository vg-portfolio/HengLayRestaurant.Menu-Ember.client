import Ember from 'ember';

export default Ember.Component.extend({
  oldData: {},

  //Creates POJO object for this dish
  // populateThisDish: function(){
  //   this.set('oldData', this.get('dish'));
  //   console.log("data loaded");
  // }.on('init'),

  showEditModal: false,
  showDeleteModal: false,

  actions: {
    showEdit(){
      this.toggleProperty('showEditModal');
    },
    closeEdit(){
      this.toggleProperty('showEditModal');
    },
    showDelete(){
      this.toggleProperty('showDeleteModal');
    },
    closeDelete(){
      this.toggleProperty('showDeleteModal');
    },
  }
});
