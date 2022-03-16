const Logger = require("../util/Logger");

module.exports = {
    name: 'ready',
    once: true,
    run: function() {
        Logger.Success("Dani Bot è online!");
    }
}
