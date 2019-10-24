System.register("logger", ["pino"], function (exports_1, context_1) {
    "use strict";
    var pino;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pino_1) {
                pino = pino_1;
            }
        ],
        execute: function () {
            exports_1("default", pino());
        }
    };
});
System.register("database", ["mongoose", "logger"], function (exports_2, context_2) {
    "use strict";
    var mongoose, logger_1, db;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (mongoose_1) {
                mongoose = mongoose_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            }
        ],
        execute: function () {
            mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
            db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function () {
                logger_1["default"].info("test");
            });
        }
    };
});
//# sourceMappingURL=tsc.js.map