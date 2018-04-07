import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tenis-app-toss', 'Unit | Model | i-i-s-tenis-app-toss', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-tenis-app-challenger',
    'model:i-i-s-tenis-app-game',
    'model:i-i-s-tenis-app-match',
    'model:i-i-s-tenis-app-player',
    'model:i-i-s-tenis-app-toss',
    'model:i-i-s-tenis-app-tournament'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
