/**
 * Created by Medo on 5/15/2016.
 */
var middleware = {
    requireAuthentication: function (request, response, next) {
        console.log("private route hit");
        next();
    },
    logger: function (request, response, next) {
        console.log('[' + new Date().toString() +'] Request: ' + request.method + ' ' + request.originalUrl);
        next();
    }
};

module.exports = middleware;