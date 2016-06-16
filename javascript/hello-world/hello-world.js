var HelloWorld;

HelloWorld = function () {};

/**
 * Return a greeting to a specific person.  If no person is supplied,
 * greet the entire world.
 *
 * @param {string} [input="World"]
 * @return {string} "Hello, ${input}"
 */
HelloWorld.prototype.hello = function (input) {
    if (!input) {
        input = "World";
    }

    return "Hello, " + input.toString() + "!";
};

module.exports = HelloWorld;
