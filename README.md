# node-fs-extra-cli
Provides fs-extra filesystem methods in cli interface

For more information please look at [fs-extra](https://github.com/jprichardson/node-fs-extra).

Installation
------------

    $ npm install git://github.com/deele/node-fs-extra-cli.git

Commands
--------
- [copy](#copy)

Usage
-----

### Copy

**fse-copy source destination**

Copy a file or directory. The directory can have contents. Like `cp -r`.

Options:

    *-n*, *--no-clobber*
        do not overwrite an existing file, show error if destination exists
    
    *-p*, *--preserve*
        preserve the timestamp attribute

Examples:

Copy `index.html` from `src` directory to `dist` directory

`fse-copy src/index.html dist/index.html`

Copy `index.html` from `src` directory to `dist` directory preserving timestamp of `index.html`

`fse-copy -p src/index.html dist/index.html`