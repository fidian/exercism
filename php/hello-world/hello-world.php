<?php

/**
 * Greet someone by name.  When no name is passed, return a greeting
 * to the entire world.
 *
 * @param string [$name]
 * @return string
 */
function helloWorld($name = "") {
    if (! $name) {
        $name = "World";
    }

    return "Hello, $name!";
}
