const uuid = require("uuid");
const fs = require("fs");
const jsonFormat = require('json-format')

const parentMetadata = JSON.parse(fs.readFileSync("./src/parentMetadata.json", 'utf8'))
const childrenMetadata =JSON.parse(fs.readFileSync("./src/childrenMetadata.json", 'utf8'));

function loop(value) {
  if (typeof value === 'object') {
    if (!Array.isArray(value) && !value.uuid) {
      value.uuid = uuid.v4()
    }
    for (const key in value) {
      loop(value[key])
    }
  }
}

loop(parentMetadata)
loop(childrenMetadata)

fs.writeFileSync("./src/parentMetadata.json", jsonFormat(parentMetadata))
fs.writeFileSync("./src/childrenMetadata.json", jsonFormat(childrenMetadata))