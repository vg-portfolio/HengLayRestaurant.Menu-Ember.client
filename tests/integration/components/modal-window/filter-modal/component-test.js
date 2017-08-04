import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('modal-window/filter-modal', 'Integration | Component | modal window/filter modal', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{modal-window/filter-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#modal-window/filter-modal}}
      template block text
    {{/modal-window/filter-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
