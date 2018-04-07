import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTenisAppbpa_MatchLForm from './forms/i-i-s-tenis-app-bpa-match-l';
import IISTenisAppbpa_PlayerLForm from './forms/i-i-s-tenis-app-bpa-player-l';
import IISTenisAppbpa_TournamentLForm from './forms/i-i-s-tenis-app-bpa-tournament-l';
import IISTenisAppbpa_MatchEForm from './forms/i-i-s-tenis-app-bpa-match-e';
import IISTenisAppbpa_PlayerEForm from './forms/i-i-s-tenis-app-bpa-player-e';
import IISTenisAppbpa_TournamentEForm from './forms/i-i-s-tenis-app-bpa-tournament-e';
import IISTenisAppChallengerModel from './models/i-i-s-tenis-app-challenger';
import IISTenisAppGameModel from './models/i-i-s-tenis-app-game';
import IISTenisAppMatchModel from './models/i-i-s-tenis-app-match';
import IISTenisAppPlayerModel from './models/i-i-s-tenis-app-player';
import IISTenisAppTossModel from './models/i-i-s-tenis-app-toss';
import IISTenisAppTournamentModel from './models/i-i-s-tenis-app-tournament';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'i-i-s-tenis-app-challenger': IISTenisAppChallengerModel,
    'i-i-s-tenis-app-game': IISTenisAppGameModel,
    'i-i-s-tenis-app-match': IISTenisAppMatchModel,
    'i-i-s-tenis-app-player': IISTenisAppPlayerModel,
    'i-i-s-tenis-app-toss': IISTenisAppTossModel,
    'i-i-s-tenis-app-tournament': IISTenisAppTournamentModel,
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'tenis-app': {
          caption: 'tenis-app',
          title: 'tenis-app',
          'i-i-s-tenis-app-bpa-match-l': {
            caption: 'i-i-s-tenis-app-bpa-match-l',
            title: 'i-i-s-tenis-app-bpa-match-l',

          },
          'i-i-s-tenis-app-bpa-player-l': {
            caption: 'i-i-s-tenis-app-bpa-player-l',
            title: 'i-i-s-tenis-app-bpa-player-l',

          },
          'i-i-s-tenis-app-bpa-tournament-l': {
            caption: 'i-i-s-tenis-app-bpa-tournament-l',
            title: 'i-i-s-tenis-app-bpa-tournament-l',

          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-tenis-app-bpa-match-l': IISTenisAppbpa_MatchLForm,
    'i-i-s-tenis-app-bpa-player-l': IISTenisAppbpa_PlayerLForm,
    'i-i-s-tenis-app-bpa-tournament-l': IISTenisAppbpa_TournamentLForm,
    'i-i-s-tenis-app-bpa-match-e': IISTenisAppbpa_MatchEForm,
    'i-i-s-tenis-app-bpa-player-e': IISTenisAppbpa_PlayerEForm,
    'i-i-s-tenis-app-bpa-tournament-e': IISTenisAppbpa_TournamentEForm,
  },

});

export default translations;
