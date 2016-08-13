import { module, test } from 'qunit';

module('Unit | Helper | show bug');

test('it works with ember-qunit-nice-errors 0.1.0', function(assert) {
  let done = assert.async();
  assert.expect(10);
  setTimeout(() => {
  
    assert.equal(true, true);
    assert.notOk(false);
    assert.ok(true);
    
    assert.equal(true, true);
    assert.notOk(false);
    assert.ok(true);
    
    assert.equal(true, true);
    assert.notOk(false);
    assert.ok(true);
    
    assert.equal('passes', 'passes');
    done();
  }, 0);
});
