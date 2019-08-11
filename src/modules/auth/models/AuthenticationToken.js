const { Model } = require('objection');
const hat = require('hat');

class AuthenticationToken extends Model {
  static get tableName() {
    return 'auth_tokens';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['userId'],
      properties: {
        id: { type: 'integer' },
        userId: { type: 'integer' },
        value: { type: 'string', minLength: 32, maxLength: 32 }
      }
    };
  }

  static get relationMappings() {
    const User = require('../../users/models/User');
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'auth_tokens.userId',
          to: 'users.id'
        }
      }
    };
  }

  addTimestamp() {
    this.updatedAt = new Date().toISOString();
    if (!this.id) {
      this.createdAt = new Date().toISOString();
      return;
    }
  }

  generateTokenValue() {
    this.value = hat();
    return;
  }

  async $beforeInsert(queryContext) {
    try {
      await super.$beforeInsert(queryContext);
      this.addTimestamps();
      this.generateTokenValue();
      return;
    } catch (e) {
      throw e;
    }
  }

  $beforeUpdate() {
    this.addTimestamp();
  }
}

module.exports = AuthenticationToken;