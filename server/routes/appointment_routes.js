module.exports = function (app) {
    app.get('/api/appointments', (req, res) => {
        res.send({ message: "Hello viet" });
    });

    app.get('/api/ping', function (req, res) {
        res.send({message: "pong!"});
    });
};