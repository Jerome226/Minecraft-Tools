const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

global.tfcWoodTypes = [
    'acacia',
    'ash',
    'aspen',
    'birch',
    'blackwood',
    'chestnut',
    'douglas_fir',
    'hickory',
    'kapok',
    'mangrove',
    'maple',
    'oak',
    'palm',
    'pine',
    'rosewood',
    'sequoia',
    'spruce',
    'sycamore',
    'white_cedar',
    'willow'
]

global.tfcWoodTypes.forEach(i => {
    let top = `tfc:block/wood/planks/${i}_bookshelf_top`
    let side = `tfc:block/wood/planks/${i}_bookshelf_side`
    let front = `tfc:block/wood/planks/${i}_bookshelf_empty`
    let file = `${i}_bookshelf_inventory.json`

    fs.appendFile(file, '{"__comment__": "This file was automatically created by mcresources","parent": "minecraft:block/chiseled_bookshelf","textures": { "top": "' + top + '", "side": "' + side + '", "front": "' + front + '"}}', function (err) {
        if (err) throw err;
        console.log(`Datagen: Created ${file}`);
    });
});

global.getCapitalizedWord = function getCapitalizedWord(str) {
    let arr = str.split("_");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const str2 = arr.join(" ");
    return str2
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

    global.tfcWoodTypes.forEach(i => console.log(`"species.dttfc.${i}_undergrowth": "${global.getCapitalizedWord(i)} Undergrowth",`));
});