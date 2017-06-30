import Ember from 'ember';

export default Ember.Component.extend({

  close: function(){
    this.toggleProperty('isModalShown');
  },

  actions: {
    closeModal(){
      this.close();
    },
  }
});


// Adding actions for manipulating modal
