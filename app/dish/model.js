import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  khmerName: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('string'),
  itemNumber: DS.attr('number'),
  price2: DS.attr('string'),
  price3: DS.attr('string'),
  seasonal: DS.attr('boolean'),
  sizeOption: DS.attr('boolean'),
  category: DS.belongsTo('category'),
});
