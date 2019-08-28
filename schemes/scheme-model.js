const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    // SELECT * FROM Schemes
    return db('schemes');
}

function findById(id) {
    // SELECT * FROM Schemes
    // WHERE id=id
    return db('schemes').where({id}).first();
}

function findSteps(id) {
    // SELECT id, scheme_name, step_number, instructions FROM Steps AS T
    // JOIN schemes as S ON T.scheme_id = S.id
    // WHERE scheme_id=id
    // ORDER BY step_number
    return db
        .from('Steps as T')
        .join('Schemes as S', 'T.scheme_id', 'S.id')
        .select('T.id', 'S.scheme_name', 'T.step_number', 'T.instructions')
        .where({ scheme_id: id })
        .orderBy('step_number', 'asc')
}

function add(scheme) {
    return db('schemes').insert(scheme)
        .then(ids => {
            return findById(ids[0])
        });
}

function update() {

}

function remove() {

}