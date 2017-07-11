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
});
