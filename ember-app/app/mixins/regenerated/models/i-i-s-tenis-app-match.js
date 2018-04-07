import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  startDate: DS.attr('date'),
  scoreP1: DS.attr('number'),
  scoreP2: DS.attr('number'),
  maxGameScore: DS.attr('number'),
  minGamesForWin: DS.attr('number'),
  player1: DS.belongsTo('i-i-s-tenis-app-player', { inverse: null, async: false }),
  player2: DS.belongsTo('i-i-s-tenis-app-player', { inverse: null, async: false }),
  games: DS.hasMany('i-i-s-tenis-app-game', { inverse: 'match', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      player1: { presence: true },
      player2: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('bpa_MatchE', 'i-i-s-tenis-app-match', {
    name: Projection.attr('Name'),
    startDate: Projection.attr('Start date'),
    scoreP1: Projection.attr('Score p1'),
    scoreP2: Projection.attr('Score p2'),
    maxGameScore: Projection.attr('Max game score'),
    minGamesForWin: Projection.attr('Min games for win'),
    player1: Projection.belongsTo('i-i-s-tenis-app-player', 'Player1', {
      lastName: Projection.attr('Last name')
    }),
    player2: Projection.belongsTo('i-i-s-tenis-app-player', 'Player2', {
      lastName: Projection.attr('Last name')
    }),
    games: Projection.hasMany('i-i-s-tenis-app-game', 'Games', {
      order: Projection.attr('Order'),
      scoreP1: Projection.attr('Score p1'),
      scoreP2: Projection.attr('Score p2')
    })
  });
  modelClass.defineProjection('bpa_MatchL', 'i-i-s-tenis-app-match', {
    name: Projection.attr('Name'),
    startDate: Projection.attr('Start date'),
    scoreP1: Projection.attr('Score p1'),
    scoreP2: Projection.attr('Score p2'),
    maxGameScore: Projection.attr('Max game score'),
    minGamesForWin: Projection.attr('Min games for win'),
    player1: Projection.belongsTo('i-i-s-tenis-app-player', 'Last name', {
      lastName: Projection.attr('Last name')
    }, { hidden: true }),
    player2: Projection.belongsTo('i-i-s-tenis-app-player', 'Last name', {
      lastName: Projection.attr('Last name')
    }, { hidden: true })
  });
  modelClass.defineProjection('MatchE', 'i-i-s-tenis-app-match', {
    name: Projection.attr(''),
    startDate: Projection.attr(''),
    maxGameScore: Projection.attr(''),
    minGamesForWin: Projection.attr(''),
    player1: Projection.belongsTo('i-i-s-tenis-app-player', '', {
      lastName: Projection.attr(''),
      firstName: Projection.attr('', { hidden: true }),
      rating: Projection.attr('')
    }),
    player2: Projection.belongsTo('i-i-s-tenis-app-player', '', {
      lastName: Projection.attr(''),
      firstName: Projection.attr('', { hidden: true }),
      rating: Projection.attr('')
    }),
    games: Projection.hasMany('i-i-s-tenis-app-game', 'Сыгранные игры', {
      scoreP1: Projection.attr(''),
      scoreP2: Projection.attr(''),
      order: Projection.attr('')
    })
  });
  modelClass.defineProjection('MatchL', 'i-i-s-tenis-app-match', {
    name: Projection.attr(''),
    startDate: Projection.attr(''),
    scoreP1: Projection.attr(''),
    scoreP2: Projection.attr(''),
    player1: Projection.belongsTo('i-i-s-tenis-app-player', '', {
      lastName: Projection.attr(''),
      firstName: Projection.attr('', { hidden: true })
    }, { hidden: true }),
    player2: Projection.belongsTo('i-i-s-tenis-app-player', '', {
      lastName: Projection.attr(''),
      firstName: Projection.attr('', { hidden: true })
    }, { hidden: true })
  });
};
