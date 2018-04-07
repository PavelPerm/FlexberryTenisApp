import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-tenis-app-bpa-tournament-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-tenis-app-challenger+player':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'lastName',
            required: true,
            relationName: 'player',
            projection: 'bpa_PlayerL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-tenis-app-toss+match':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'match',
            projection: 'bpa_MatchL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
