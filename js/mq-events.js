(function () {
    var mqEvents = function (mediaChangeHandler) {
        var sheets = document.styleSheets,
            numSheets = sheets.length,
            mqls = {},

            // A default handler
            mediaChange = function (mql) {
                console.log(mql);
            }

        // Use the provided handler if present
        if (mediaChangeHandler) {
            mediaChange = mediaChangeHandler;
        }

        for (var i = 0; i < numSheets; i += 1) {
            var rules = sheets[i].cssRules,
                numRules = rules.length;

            for (var j = 0; j < numRules; j += 1) {

                // This Stackoverflow answer helped me figure out how
                // to check the type of object each rule was
                // http://stackoverflow.com/a/332429/368634
                if (rules[j].constructor === CSSMediaRule) {
                    // Use the i in the name or else multiple
                    // stylesheets may cause members to be
                    // overwritten.
                    mqls['mql' + i + '-' + j] = window.matchMedia(rules[j].media.mediaText);
                    mqls['mql' + i + '-' + j].addListener(mediaChange);
                    mediaChange(mqls['mql' + i + '-' + j]);
                }
            }
        }
    }

    // Yeah, this is a little shitty
    window.mqEvents = mqEvents;
}());