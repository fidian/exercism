var DnaTranscriber;

DnaTranscriber = function () {};

/**
 * Convert a sequence of DNA to RNA.
 *
 * When given "CGAT", it transcribes to the matching pairs "GCUA"
 *
 * @param {string} input DNA sequence
 * @return {string} RNA sequence
 */
DnaTranscriber.prototype.toRna = function (input) {
    var result;

    // A->U and T -> A via simpler replacements
    result = input.replace(/A/g, "U").replace(/T/g, "A");

    // Swap C and G with a callback
    result = result.replace(/[CG]/g, function (match) {
        if (match === "C") {
            return "G";
        }

        return "C";
    });

    return result;
};

module.exports = DnaTranscriber;
