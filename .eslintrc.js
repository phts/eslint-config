'use strict'

module.exports = {
  extends: ['./index', './addons/jest', './addons/node', './addons/prettier'].map(require.resolve),
}
