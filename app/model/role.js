const Role = (sequelize, DataTypes) => {
    const role = sequelize.define(
        'role',
        {
            'name': {
                'type': DataTypes.STRING,
                'allowNull': false
            },
            'isActive': {
                'type': DataTypes.BOOLEAN,
                'defaultValue': true
            },
        }
    );
    role.associate = function(models) {

    };
    return role;
};

module.exports = Role;
