const fs = require('fs');
const argv = require('optimist')
    .options('s', {
        alias: 'stateless',
        default: false
    })
    .argv;

const COMPONENT_NAME = (argv.s || argv._[0] || 'App');
const nameRegExp = /^[A-Z][A-Za-z0-9]/g;
if (COMPONENT_NAME.search(nameRegExp) === -1) {
    console.error(`
bad name Component!
Component should start Uppercase leatter!
`);
} else {

    const DIR = `./${COMPONENT_NAME}`;
    const COMPO_FILES = require('./template')(COMPONENT_NAME, argv.s);
    if(!fs.existsSync(DIR)) {
        fs.mkdirSync(DIR);
        COMPO_FILES.map(file => {
            createFile(file.path, file.data);
        })
    }

    function createFile(fileName, data) {
        fs.writeFileSync(`${DIR}/${fileName}`, data);
    } 
}