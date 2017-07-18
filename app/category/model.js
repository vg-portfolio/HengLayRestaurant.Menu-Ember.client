import DS from 'ember-data';

export default DS.Model.extend({
  categoryType: DS.attr('string'),
  categoryTypeKhmer: DS.attr('string'),
  dishes: DS.hasMany('dish', { async: true }),
});
