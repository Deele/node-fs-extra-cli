#!/usr/bin/env node

var args = require('minimist')(
        process.argv.slice(2),
        {
            'alias': {
                'no-clobber': ['n']
            },
            'boolean': [
                'no-clobber'
            ],
            'default': {
                'no-clobber': false
            }
        }
    ),
    fs = require('fs-extra'),
    path = require('path'),
    source = args['_'][0],
    destination = args['_'][1];
process.stdout.on('error', process.exit);

function errorExit(err) {
    if (err.stack) {
        console.error('fse-move: '+err.stack);
    }
    else {
        console.error('fse-move: '+String(err));
    }
    process.exit(1);
}

if (typeof source === 'undefined' || source.length == 0 || typeof destination === 'undefined' || destination.length == 0) {
    errorExit('The syntax of the command is incorrect. Usage: fse-move {{source}} {{destination}}');
}
else {
    var sourcePath = path.resolve(process.cwd(), source),
        destinationPath = path.resolve(process.cwd(), destination);
    try {
        fs.accessSync(sourcePath, fs.F_OK | fs.R_OK);
    }
    catch (err) {
        errorExit('cannot access `'+source+'`: No such file or directory');
    }
    try {
        fs.move(
            sourcePath,
            destinationPath,
            {
                clobber: (!args['no-clobber'])
            },
            function (err) {
                if (err) {
                    errorExit(err);
                }
            }
        );
    }
    catch (err) {
        if (err.message == 'EEXIST') {
            errorExit('cannot move `'+source+'`: Destination `'+destination+'` already exists');
        } else {
            errorExit('cannot move `'+source+'`: ' + err.message);
        }
    }
}