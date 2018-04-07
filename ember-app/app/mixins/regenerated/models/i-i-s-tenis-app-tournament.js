import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  startDate: DS.attr('date'),
  finishDate: DS.attr('date'),
  maxGameScore: DS.attr('number'),
  minGamesForWin: DS.attr('number'),
  challenger: DS.hasMany('i-i-s-tenis-app-challenger', { inverse: 'tournament', async: false }),
  toss: DS.hasMany('i-i-s-tenis-app-toss', { inverse: 'tournament', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('bpa_TournamentE', 'i-i-s-tenis-app-tournament', {
    name: Projection.attr('Name'),
    startDate: Projection.attr('Start date'),
    finishDate: Projection.attr('Finish date'),
    maxGameScore: Projection.attr('Max game score'),
    minGamesForWin: Projection.attr('Min games for win'),
    challenger: Projection.hasMany('i-i-s-tenis-app-challenger', 'Challenger', {
      player: Projection.belongsTo('i-i-s-tenis-app-player', 'Player', {
        lastName: Projection.attr('Last name', { hidden: true })
      }, { displayMemberPath: 'lastName' })
    }),
    toss: Projection.hasMany('i-i-s-tenis-app-toss', 'Toss', {
      match: Projection.belongsTo('i-i-s-tenis-app-match', 'Match', {
        name: Projection.attr('Name', { hidden: true })
      }, { displayMemberPath: 'name' })
    })
  });
  modelClass.defineProjection('bpa_TournamentL', 'i-i-s-tenis-app-tournament', {
    name: Projection.attr('Name'),
    startDate: Projection.attr('Start date'),
    finishDate: Projection.attr('Finish date'),
    maxGameScore: Projection.attr('Max game score'),
    minGamesForWin: Projection.attr('Min games for win')
  });
  modelClass.defineProjection('TournamentE', 'i-i-s-tenis-app-tournament', {
    name: Projection.attr(''),
    startDate: Projection.attr(''),
    finishDate: Projection.attr(''),
    maxGameScore: Projection.attr(''),
    minGamesForWin: Projection.attr(''),
    challenger: Projection.hasMany('i-i-s-tenis-app-challenger', 'Претенденты', {
      player: Projection.belongsTo('i-i-s-tenis-app-player', '', {
        lastName: Projection.attr(''),
        firstName: Projection.attr(''),
        rating: Projection.attr('')
      })
    }),
    toss: Projection.hasMany('i-i-s-tenis-app-toss', '', {
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
    })
  });
  modelClass.defineProjection('TournamentL', 'i-i-s-tenis-app-tournament', {
    name: Projection.attr(''),
    startDate: Projection.attr(''),
    finishDate: Projection.attr('')
  });
};
