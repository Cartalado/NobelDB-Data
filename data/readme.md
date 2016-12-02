## Getting Started with [nobeldb-data](https://www.npmjs.com/package/nobeldb-data)

Before we begin, a little more on Node.js® for context — unlike iTunes or Photoshop, you won’t be able to launch Node from your dock or taskbar. You will be using command line instructions via a tool such as <b>Terminal</b> or <b>Windows Command Prompt</b>. If you don’t have [Node.js](https://nodejs.org/) and/or [npm](https://www.npmjs.com/) installed on your machine, do the following for your respective OS.

### Mac OS
Go to [nodejs.org](https://nodejs.org/), click ‘install’, and run through the install process.

### Ubuntu OS
Run the following on your command line to install the source for nodejs:

`$ curl -sL https://deb.nodesource.com/setup | sudo -E bash -`

Then, run this to get the latest nodejs package:

`$ sudo apt-get install -y nodejs`

### Windows OS
Go ahead the download the [Windows binary](https://nodejs.org/download/) and make sure to restart your computer.

### Test It!
`$ node -v`

To see if Node is installed, type the above on your command line.

`$ npm -v`

To see if npm is installed, type the above on your command line.

### Installing nobeldb-data
`$ npm install nobeldb-data`

To add this npm package to your local machine, type the above into your command line. You’ll notice a `node_modules` directory appear in your root where the package is now installed.

If you're having trouble installing packages, check out the helpful docs for [installing npm packages locally](https://docs.npmjs.com/getting-started/installing-npm-packages-locally).

### Other Nifty Commands
`$ npm init`

creates a `package.json` in root for you.

`$ npm list`

lists all installed packages.

`$ npm prune`

removes packages not depended on by your project according to your `package.json`.

`$ npm outdated`

tells you which installed packages are outdated with respect to what is current in the npm registry but allowable by the version definition in your `package.json`.
