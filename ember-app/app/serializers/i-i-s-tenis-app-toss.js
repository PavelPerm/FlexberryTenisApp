import { Serializer as TossSerializer } from
  '../mixins/regenerated/serializers/i-i-s-tenis-app-toss';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(TossSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
