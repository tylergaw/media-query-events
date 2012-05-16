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

### Example

    mqEvents(function (mql) {
        if (mql.matches) {
            // Media query condition was met
        }
        else {
            // Media query condition was not met
        }
    });

### Reference

- document.styleSheets - https://developer.mozilla.org/en/Document_Object_Model_(DOM)/document.styleSheets
- window.matchMedia - https://developer.mozilla.org/en/DOM/window.matchMedia
- CSSMediaRule - https://developer.mozilla.org/en/DOM/cssMediaRule
- Get the name of an object type - http://stackoverflow.com/questions/332422/how-do-i-get-the-name-of-an-objects-type-in-javascript
