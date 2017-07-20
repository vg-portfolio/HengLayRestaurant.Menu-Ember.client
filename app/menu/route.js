import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  //Checks to see if user is authenticated, if not, ask for sign-in
  beforeModel() {
    if (!(this.get('isAuthenticated'))) {
      this.transitionTo('/sign-in')
      .then(() => {
        Materialize.toast('Please sign in', 5000, 'rounded');
      });
    }
  },
  //Loads category model then load its associations
  model() {
    //refreshing pages will not load dishes******************************************
    return this.store.findAll('category', { async: true });
  },

  actions: {
    //DATA LOGIC/////////////////////////////////
    saveDish (data){
      let item = this.store.createRecord('dish', data);
      //Need to dynamically load category
      let category = this.store.peekRecord('category', data.category);
      console.log(category);
      category.get('dishes').pushObject(item);
      return item.save()
      .then(() => {
        category.save();
      })
      .then(() => {
        Materialize.toast('New dish added', 3000, 'rounded');
      })
      .catch(() =>{
        //Add toast to indicate to user that there was an error
        item.rollbackAttributes();
        Materialize.toast('Try again', 3000, 'rounded');
      });
    },
    editDish(data){
      let dish = this.store.peekRecord('dish', data.id);
      let category = this.store.peekRecord('category', data.category_id);
      console.log(category);
      dish.set('category', category);
      dish.save()
      .then(() => {
        Materialize.toast('Update success', 3000, 'rounded');
      })
      .catch(() => {
        Materialize.toast('Unable to update', 3000, 'rounded');
      });
    },
    deleteDish(data){
      console.log("route delete");
      data.destroyRecord()
      .then(() => {
        Materialize.toast('Delete success', 3000, 'rounded');
      })
      .catch(() => {
        Materialize.toast('Could not delete', 3000, 'rounded');
      });
    },
  },
});
