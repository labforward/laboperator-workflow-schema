let config;

try {
  config = require("@labforward/config/prettier");
} catch {
  /**
   * Fallback for environments that do not support `exports` key in
   * package.json yet, e.g. Atom editor
   */
  config = require("@labforward/config/.prettierrc");
}

module.exports = config;
