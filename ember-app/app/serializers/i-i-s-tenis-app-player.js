import { Serializer as PlayerSerializer } from
  '../mixins/regenerated/serializers/i-i-s-tenis-app-player';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PlayerSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
