# Ember-qunit-nice-errors-issue-18

Demonstrates bug for https://github.com/wyeworks/ember-qunit-nice-errors/issues/18

```
ember test --server # or just ember test
```

Use `git log` to see what happened from
  - `ember init` to
  - `ember install ember-qunit-nice-errors@0.1.0` to
  - `ember install ember-qunit-nice-errors@1.1.0`

The actual unit test is in `tests/unit/helpers/show-bug-test.js`, which
I reproduce here for your bug hunting pleasure:

```
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
```
