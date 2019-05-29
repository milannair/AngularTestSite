const controller = require('./controller')

module.exports = function (app){
    app.get('/allRes', controller.index)
    app.get('/res/:id', controller.display)
    app.post('/res/create', controller.create)
    app.patch('/res/:id', controller.update)
    app.delete('/res/:id', controller.delete)
    app.post('/res/:id/review/create', controller.createReview)
}   