import { Serializer as ChallengerSerializer } from
  '../mixins/regenerated/serializers/i-i-s-tenis-app-challenger';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ChallengerSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
