<?php

/**
 * Compute the hamming distance between two strings.
 *
 * @param string $a
 * @param string $b
 * @return integer
 * @throws InvalidArgumentException
 */
function distance($a, $b) {
    if (strlen($a) !== strlen($b)) {
        throw new InvalidArgumentException("DNA strands must be of equal length.");
    }

    $differences = 0;

    for ($i = 0; $i < strlen($a); $i += 1) {
        if ($a[$i] !== $b[$i]) {
            $differences += 1;
        }
    }

    return $differences;
}
