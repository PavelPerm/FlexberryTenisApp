import { Serializer as TournamentSerializer } from
  '../mixins/regenerated/serializers/i-i-s-tenis-app-tournament';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(TournamentSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
