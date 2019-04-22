'use strict';

module.exports = function(Task) {
  Task.validatesNumericalityOf('duration', {
    message: {
      number: 'is not a number',
    },
  });
  Task.validatesUniquenessOf('title', {message: 'Title must be unique !!!'});
};
