<?php

/**
 * Calculates the date and time exactly 1 billion seconds later.
 *
 * Does not modify the date object that's passed in.
 *
 * @param DateTime $date
 * @return DateTime
 */
function from($date) {
    $gs = clone $date;
    $gs->add(new DateInterval('PT1000000000S'));

    return $gs;
}
