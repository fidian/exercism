class HelloWorld {
    /**
     * Greet someone.  If nobody is named, greet the entire world.
     *
     * @param {string} name Name for greeting
     * @return {string} "Hello, ${name}!"
     */
    hello(name) {
        if (!name) {
            name = "World"
        }

        return `Hello, ${name}!`;
    }
}

export default HelloWorld;

