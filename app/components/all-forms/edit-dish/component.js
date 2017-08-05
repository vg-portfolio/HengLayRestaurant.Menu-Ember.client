import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    editItem(){
      //Calls action of editItem from route
      this.attrs.editItem(this.get('dish'));
      this.sendAction('close');
    },
  }
});
