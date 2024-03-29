import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin-tools/fab-add', 'Integration | Component | admin tools/fab add', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin-tools/fab-add}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin-tools/fab-add}}
      template block text
    {{/admin-tools/fab-add}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
