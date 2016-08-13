import { module, test } from 'qunit';

module('Unit | Helper | show bug');

test('it works with ember-qunit-nice-errors 0.1.0', function(assert) {
  let done = assert.async();
  assert.expect(10);
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      assert.ok(true);
    }
    done();
  }, 0);
});
