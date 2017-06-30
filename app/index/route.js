import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      dishes: this.store.findAll('dish'),
      categories: this.store.findAll('category')
    });
  },
  setupController(controller, models) {
    controller.set('dishes', models.dishes);
    controller.set('categories', models.categories);
    // or, more concisely:
    // controller.setProperties(models);
  },
  actions: {
    //DATA LOGIC/////////////////////////////////
    saveDish (data){
      let item = this.store.createRecord('dish', data);
      //Need to dynamically load category
      let category = this.store.peekRecord('category', 3);
      console.log(category);
      category.get('dishes').pushObject(item);
      return item.save()
      .then(() => {
        category.save();
      })
      .then(() => {
        console.log("Save success");
      })
      .catch(() =>{
        //Add toast to indicate to user that there was an error
        item.rollbackAttributes();
      });
    },
  },
});
