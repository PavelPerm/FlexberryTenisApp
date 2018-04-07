import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  match: DS.belongsTo('i-i-s-tenis-app-match', { inverse: null, async: false }),
  tournament: DS.belongsTo('i-i-s-tenis-app-tournament', { inverse: 'toss', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      match: { presence: true },
      tournament: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('bpa_TossE', 'i-i-s-tenis-app-toss', {
    match: Projection.belongsTo('i-i-s-tenis-app-match', 'Match', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' })
  });
  modelClass.defineProjection('TossE', 'i-i-s-tenis-app-toss', {
    match: Projection.belongsTo('i-i-s-tenis-app-match', '', {
      name: Projection.attr(''),
      startDate: Projection.attr(''),
      scoreP1: Projection.attr(''),
      scoreP2: Projection.attr(''),
      player1: Projection.belongsTo('i-i-s-tenis-app-player', '', {
        lastName: Projection.attr('')
      }, { hidden: true }),
      player2: Projection.belongsTo('i-i-s-tenis-app-player', '', {
        lastName: Projection.attr('')
      }, { hidden: true })
    }, { hidden: true })
  });
};
