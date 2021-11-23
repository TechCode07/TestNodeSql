const User = (sequelize, DataTypes) => {
    const user = sequelize.define(
        'user',
        {
            'email': {
                'type': DataTypes.STRING,
                'allowNull': false,
                'validate': {
                    'isEmail': true
                },
                'unique': true
            },
            'password': {
                'type': DataTypes.STRING,
                'allowNull': false,
                'validate': {
                    'min': 8
                }
            },
            'firstName': {
                'type': DataTypes.STRING,
                'allowNull': false
            },
            'lastName': {
                'type': DataTypes.STRING,
                'allowNull': false
            },
            'role_id': {
                'type': DataTypes.INTEGER,
                'defaultValue': 1
            },
            'isActive': {
                'type': DataTypes.BOOLEAN,
                'defaultValue': true
            },
        },
        {
            'defaultScope': {
                'attributes': { 'exclude': ['password'] }
            },
            'scopes': {
                'withSecretColumns': {
                    'attributes': { 'include': ['password'] }
                }
            }
        }
    );
    user.associate = function(models) {
        user.belongsTo(models.role, {foreignKey: 'role_id'});
    };
    return user;
};

module.exports = User;
