var Hamming;

Hamming = function () {}

/**
 * Compute the difference between two DNA sequences.  Every difference
 * will increase the result by 1.  If one string is longer, the returned
 * value is increased by 1 for every extra/missing character.
 *
 * "AAA" vs "AAA" = 0
 * "ABC" vs "AAA" = 2
 * "A" vs "BB" = 2
 *
 * @param {string} a
 * @param {string} b
 * @return {integer} Number of differences
 */
Hamming.prototype.compute = function (a, b) {
    var differences, i;

    a = a.toString();
    b = b.toString();

    if (a.length !== b.length) {
        throw new Error("DNA strands must be of equal length.");
    }

    maxLen = Math.max(a.length, b.length);
    differences = 0;

    for (i = 0; i < a.length; i += 1) {
        if (a.charAt(i) !== b.charAt(i)) {
            differences += 1;
        }
    }

    return differences;
};

module.exports = Hamming;
