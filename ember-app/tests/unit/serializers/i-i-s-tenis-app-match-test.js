import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tenis-app-match', 'Unit | Serializer | i-i-s-tenis-app-match', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-tenis-app-match',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-tenis-app-challenger',
    'model:i-i-s-tenis-app-game',
    'model:i-i-s-tenis-app-match',
    'model:i-i-s-tenis-app-player',
    'model:i-i-s-tenis-app-toss',
    'model:i-i-s-tenis-app-tournament'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
