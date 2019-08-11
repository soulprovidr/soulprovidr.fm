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
        password: { type: 'string', minLength: 8, maxLength: 60 }
      }
    };
  }

  addTimestamps() {
    this.updatedAt = new Date().toISOString();
    if (!this.id) {
      this.createdAt = new Date().toISOString();
      return;
    }
  }

  async hashPassword() {
    this.password = await hashPassword(this.password);
  }

  async $beforeInsert(queryContext) {
    try {
      await super.$beforeInsert(queryContext);
      await this.hashPassword();
      this.addTimestamps();
      return;
    } catch (e) {
      throw e;
    }
  }

  $beforeUpdate() {
    this.addTimestamps();
  }

  $formatJson(json) {
    json = super.$formatJson(json);
    delete json.password;
    return json;
  }

  async authenticate(password) {
    return authenticate(password, this.password);
  }
}

module.exports = User;