var Year;

/**
 * Make an object that can determine if a year is a leap year.
 *
 * @constructor
 * @param {integer} year
 */
Year = function (year) {
    this.year = +year;
};


/**
 * Determine if the supplied year is a leap year.
 *
 * Multiple of 4?  Yes, except when ...
 * multiple of 100?  No, except when ...
 * multiple of 400?  Yes.
 *
 * This does not continue beyond 400-year adjustments.
 *
 * @return {boolean}
 */
Year.prototype.isLeap = function () {
    if (this.year % 4) {
        return false;
    }

    if (this.year % 100) {
        return true;
    }

    if (this.year % 400) {
        return false;
    }

    return true;
};

module.exports = Year;
