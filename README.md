# jquery.sate

Simple query plugin to set/get element state via data attributes (data-state).

## Get current state

    $('element').state(); // returns string or null

Returns the current state of the element or null if the element has no data-state attribute.

## Set current state

    // <element data-state="selected"></element>

    $('element').state('selected');

Sets a data-state attribute with the state specified.
