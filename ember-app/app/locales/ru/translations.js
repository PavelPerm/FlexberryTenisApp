import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Tenis-app',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Tenis-app',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tenis-app',
          title: 'Tenis-app'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'tenis-app': {
          caption: 'tenis-app',
          title: 'tenis-app',
          'i-i-s-tenis-app-bpa-match-l': {
            caption: 'Матчи',
            title: '',

          },
          'i-i-s-tenis-app-bpa-player-l': {
            caption: 'Игроки',
            title: '',

          },
          'i-i-s-tenis-app-bpa-tournament-l': {
            caption: 'Турниры',
            title: '',

          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
