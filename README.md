# node-fs-extra-cli
Provides fs-extra filesystem methods in cli interface

For more information please look at [fs-extra](https://github.com/jprichardson/node-fs-extra).

Installation
------------

    $ npm install git://github.com/deele/node-fs-extra-cli.git

Commands
--------
- [copy](#copy)
- [move](#move)

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

### Move

**fse-move source destination**

Moves a file or directory, even across devices. Can be used for renaming too.

Options:

    *-n*, *--no-clobber*
        do not overwrite an existing file, show error if destination exists

Examples:

Move `access.log` from `log` directory to `archive` directory

`fse-move logs/access.log archive/access.log`

Rename `access.log` from `log/access.log` to `log/access_archived-1.log`

`fse-move log/access.log log/access_archived-1.log`