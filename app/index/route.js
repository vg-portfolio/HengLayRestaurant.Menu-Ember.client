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
    //DISH DATA LOGIC/////////////////////////////////
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
    //.....END DISH DATA LOGIC/////////////////////////////////

    //CATEGORY DATA LOGIC/////////////////////////////////
    saveCategory (data){
      let category = this.store.createRecord('category', data);
      console.log(category);
      return category.save()
      .then(() => {
        Materialize.toast('New category added', 3000, 'rounded');
      })
      .catch(() =>{
        //Add toast to indicate to user that there was an error
        category.rollbackAttributes();
        Materialize.toast('Try again', 3000, 'rounded');
      });
    },
    editCategory(data){
      // let category = this.store.peekRecord('category', data.category_id);
  
      data.save()
      .then(() => {
        Materialize.toast('Update success', 3000, 'rounded');
      })
      .catch(() => {
        Materialize.toast('Unable to update', 3000, 'rounded');
      });
    },
    deleteCategory(data){
       data.destroyRecord()
      .then(() => {
        Materialize.toast('Delete successful', 3000, 'rounded');
      })
      .catch(() => {
        Materialize.toast('Unable to delete', 3000, 'rounded');
      });
    }
  },
});
