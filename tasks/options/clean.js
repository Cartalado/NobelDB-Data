/*!
 * -------------
 * NobelDB®-Data
 * -------------
 * Data of NobelDB — A manually curated dedicated database of Nobel Laureates.
 * ___________________________________________________________________________
 *
 * Grunt, http://gruntjs.com/ — The JavaScript Task Runner.
 * ___________________________________________________________________________
 *
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Sequømics Research [http://research.sequomics.com/].
 * @copyright : Sequømics Corporation [http://sequomics.com/].
 * ___________________________________________________________________________
 *
 * @date      : 28-Nov-2016
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * @require   : grunt-contrib-clean
 * @build     : SEED™ — Umeå
 *              └────── A Sequømics Product — http://sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "NobelDB®-Data".
 * ___________________________________________________________________________
 */

module.exports = {
  // before generating any new files, remove any previously-created files.
  tests: ['tmp', '*.temp', '*.log', '*.knit.md'],
  // will delete files for `build` target.
  build: ['build'],
  // Will NOT delete files for `release` target.
  release: {
    options: {
      'no-write': true
    },
    src: ['data']
  }
};
