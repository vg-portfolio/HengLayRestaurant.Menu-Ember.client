import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  khmerName: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  category: DS.attr('string')
});
