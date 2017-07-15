import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('all-forms/delete-dish', 'Integration | Component | all forms/delete dish', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{all-forms/delete-dish}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#all-forms/delete-dish}}
      template block text
    {{/all-forms/delete-dish}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
