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
 * @require   : Request
 * @build     : SEED™ — Umeå
 *              └────── A Sequømics Product — http://sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "NobelDB®-Data".
 * ___________________________________________________________________________
 */

module.exports = function(grunt) {
  
  // To load required NPM modules.
  // -----------------------------
  var chalk    = require('chalk');
  var request  = require('request');
  
  // Default color defined.
  // ----------------------
  var noop     = chalk.red;
  var yeep     = chalk.green;
  var okay     = chalk.blue;
  
  /*!
   * Getting Started with Nobel Prize API
   * ------------------------------------
   * [Nobelprize.org/] offers open data to developers in two ways: An API and as Linked Data.
   * The data is free to use and contains information about who has been awarded the Nobel Prize,
   * when, in what prize category and the motivation, as well as basic information about the Nobel Laureates
   * such as birth data and the affiliation at the time of the award. The data is regularly updated
   * as the information on Nobelprize.org is updated, including at the time of announcements of new Laureates.
   * ---------------------------------------------------------------------------------------------------------
   * The REST based API provides different ways to list and search the data.
   * The result is returned as JSON or CSV.
   */
  
  // https://nobelprize.readme.io/.
  grunt.registerTask("get", "Connecting to the API of [Nobelprize.org/].", function() {
    
    var path        = require('path');
    var seedFile    = path.resolve(__dirname, 'seed.json');
