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
    save (data){
      let item = this.store.createRecord('dish', data);
      let category = this.store.peekRecord('category', 3);
      console.log(category);
      category.get('dishes').pushObject(item);
      item.save()
      .then(() => {
        category.save();
      })
      .then(() => {
        console.log("save success!");
      })
      .catch(() =>{
        console.log("Error");
        this.store.unloadRecord(item);
      });
    },
    edit(){
      //Add edit dish logic here
    },
    delete(){
      //Add delete dish logic here
    },
  }
});
