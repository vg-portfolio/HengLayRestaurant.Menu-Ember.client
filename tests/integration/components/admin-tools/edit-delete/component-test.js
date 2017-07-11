import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin-tools/edit-delete', 'Integration | Component | admin tools/edit delete', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin-tools/edit-delete}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin-tools/edit-delete}}
      template block text
    {{/admin-tools/edit-delete}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
