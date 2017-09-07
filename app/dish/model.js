import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  khmerName: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('string'),
  price2: DS.attr('string'),
  price3: DS.attr('string'),
  sizeOption: DS.attr('boolean'),
  seasonal: DS.attr('boolean'),
  itemNumber: DS.attr('number'),
  category: DS.belongsTo('category'),
  createdAt: DS.attr('string'),
});
