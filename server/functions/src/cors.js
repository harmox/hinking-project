const allowedOrigins = ['http://localhost:5173', 'http://localhost:5000', 'https://hiking-1212.firebaseapp.com', 'https://hiking-1212.web.app']
function cors() {
    return function (req, res, next) {
        const origin = req.headers.origin;

        if (allowedOrigins.includes(origin)) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }

        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        if (req.method === 'OPTIONS') {
            res.sendStatus(204);
            return;
        }
        next();
    };
}
module.exports = { cors }