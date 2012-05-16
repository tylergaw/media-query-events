# Media Query Events

This small script:

- Finds all media query rules in any stylesheets on a page
- For each of those MediaRules creates a MatchMedia thingy
- Adds a listener to each MatchMedia object
- Calls a provided changeMediaHandler each time a MatchMedia event fires
- Is a work in progress

### Usage

The mqEvents function is attached to the window object, which it probably should not be. 

Run `mqEvents()`.

Pass it a single function parameter that will run each time a MatchMedia event fires. The function will be passed the MediaQueryList from the event.