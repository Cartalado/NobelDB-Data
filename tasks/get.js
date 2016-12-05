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
  
  // Compatibility with Grunt defined.
  if (grunt.utils) {
    grunt.fatal(noop('grunt get is only compatible with Grunt v0.4.0+'));
  }
  
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
    // ---------------[API URL of nobelprize.org]----------
    var apiURL      = "http://api.nobelprize.org/v1/";
    var dataPath    = "./tmp/";
    
    /*!
     usage: git clone [options] [--] <repo> [<dir>]

     -v, --verbose         be more verbose
     -q, --quiet           be more quiet
     --progress            force progress reporting
     -n, --no-checkout     don't create a checkout
     --bare                create a bare repository
     --mirror              create a mirror repository (implies bare)
     -l, --local           to clone from a local repository
     --no-hardlinks        don't use local hardlinks, always copy
     -s, --shared          setup as shared repository
     --recursive           initialize submodules in the clone
     --recurse-submodules  initialize submodules in the clone
     --template <template-directory>
                          directory from which templates will be used
     --reference <repo>    reference repository
     -o, --origin <name>   use <name> instead of 'origin' to track upstream
     -b, --branch <branch>
                          checkout <branch> instead of the remote's HEAD
     -u, --upload-pack <path>
                          path to git-upload-pack on the remote
     --depth <depth>       create a shallow clone of that depth
     --single-branch       clone only one branch, HEAD or --branch
     --dissociate          use --reference only while cloning
     --separate-git-dir <gitdir>
                          separate git dir from working tree
     -c, --config <key=value>
                          set config inside the new repository
    */
    
    // JSON file(s), that have to download via Grunt Task.
    var fileNames = ['country.json', 'laureate.json', 'prize.json'];
    var done      = this.async();
