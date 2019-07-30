const { Model } = require('objection');
const {
  authenticate,
  hashPassword
} = require('../../auth/helpers');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'firstName',
        'lastName',
        'email',
        'password'
      ],

      properties: {
        id: { type: 'integer' },
        firstName: { type: 'string', minLength: 1, maxLength: 255 },
        lastName: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string ', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 60, maxLength: 60 }
      }
    };
  }

  async $beforeInsert(queryContext) {
    try {
      await super.$beforeInsert(queryContext);
      this.password = await hashPassword(this.password);
      return;
    } catch (e) {
      throw e;
    }
  }

  async authenticate(password) {
    return authenticate(password, this.password);
  }
}