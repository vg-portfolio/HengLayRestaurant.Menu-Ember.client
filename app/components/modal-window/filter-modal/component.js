import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    filter(cat){
      this.sendAction(this.get('filter'), cat);
      this.sendAction(this.get("showFilter"));
    },
    closeModal(){
      this.sendAction(this.get("showFilter"));
    }
  }
});
