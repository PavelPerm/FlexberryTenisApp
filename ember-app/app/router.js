import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-tenis-app-bpa-match-l');
  this.route('i-i-s-tenis-app-bpa-match-e',
  { path: 'i-i-s-tenis-app-bpa-match-e/:id' });
  this.route('i-i-s-tenis-app-bpa-match-e.new',
  { path: 'i-i-s-tenis-app-bpa-match-e/new' });
  this.route('i-i-s-tenis-app-bpa-player-l');
  this.route('i-i-s-tenis-app-bpa-player-e',
  { path: 'i-i-s-tenis-app-bpa-player-e/:id' });
  this.route('i-i-s-tenis-app-bpa-player-e.new',
  { path: 'i-i-s-tenis-app-bpa-player-e/new' });
  this.route('i-i-s-tenis-app-bpa-tournament-l');
  this.route('i-i-s-tenis-app-bpa-tournament-e',
  { path: 'i-i-s-tenis-app-bpa-tournament-e/:id' });
  this.route('i-i-s-tenis-app-bpa-tournament-e.new',
  { path: 'i-i-s-tenis-app-bpa-tournament-e/new' });
});

export default Router;
