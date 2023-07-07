const repo = require ('../models/quizes');

async function addQuiz(data) {
    return repo.create({...data});
}

module.exports = {
   addQuiz,
};
