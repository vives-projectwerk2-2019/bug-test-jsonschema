//this will test the json schema
var Validator = require('jsonschema').Validator;
var v = new Validator();

var dataObject = {
    Player: {
        username: "Jelle",
        movement: "up",
        dev_id: "ttn", 
        action: "rocket", // don't know what this will be yet
        joined: true
    },
    Controller: {
        id: 0,
        addons: [null, null, null], 
        dev_id: ""
    }
};

var jsonschemaPlayer = {
    "id": "/SchemaPlayer",
    "type": "object",
    "properties": {
        "username": {"type": "string"},
        "movement": {"type": "string"},
        "dev_id": {"type": "string"},
        "action": {"type": "string"},
        "joined": {"type": "boolean"},
    }
};

var jsonschemaController = {
    "id": "/SchemaController",
    "type": "object",
    "properties": {
        "id": {"type": "integer"},
        "addons": {
            "type": "array",
            "items":  {
                "type": ["integer", null]
            }
        },
        "dev_id": {"type": "string"}
    }
};

var schemaObject = {
    "type": "object",
    "properties": {
        "Player": {"$ref": "/SchemaPlayer"},
        "Controller": {"$ref": "/SchemaController"}
    }
};

v.addSchema(jsonschemaPlayer, '/SchemaPlayer');
v.addSchema(jsonschemaController, '/SchemaController');
console.log(v.validate(dataObject, schemaObject));

