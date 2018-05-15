'use strict';

/**
 *
 */
class TestTable {
  /**
   * @param {Object} d
   */
  constructor(d) {
    if (existOnly(d)) {
      for (let i = 0; i < d.length; i++) {
        if (d[i].only !== undefined && d[i].only === true) {
          d[i].skip = false;
        } else {
          d[i].skip = true;
        }
      }
    } else {
      for (let i = 0; i < d.length; i++) {
        if (d[i].skip === undefined) {
          d[i].skip = false;
        }
      }
    }
    this.data = d || [];
  }

  /**
   * @param {Function} fn
   */
  run(fn) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].skip == false) {
        fn(i, this.data[i]);
      }
    }
  }
}

/**
 * @private
 * @param {Object} d
 * @return {Boolean}
 */
function existOnly(d) {
  let exist = false;
  for (let i = 0; i < d.length; i++) {
    if (d[i].only) {
      exist = true;
    }
  }
  return exist;
}

module.exports = TestTable;
