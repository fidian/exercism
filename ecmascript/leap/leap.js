/**
 * Determine if a year is a leap year.  Only handles the multiples of
 * 4, 100, and 400.
 *
 * @param {integer} year
 * @return {boolean}
 */
function isLeapYear(year) {
    year = +year;

    if (year % 4) {
        return false;
    }

    if (year % 100) {
        return true;
    }

    if (year % 400) {
        return false;
    }

    return true;
}

export default isLeapYear;
