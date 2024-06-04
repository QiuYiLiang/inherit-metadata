const uuid = require("uuid");
const fs = require("fs");
const jsonFormat = require('json-format')

const parentMetadata = JSON.parse(fs.readFileSync("./src/parentMetadata.json", 'utf8'))
const childrenMetadata =JSON.parse(fs.readFileSync("./src/childrenMetadata.json", 'utf8'));

function loopParent(obj) {
  // 父级保存不做任何处理
  // 子级保存的时候需要计算更新值，记录子级所有的更新
  // 获取子级值时，需要和父级合并

  // 每次父级和子级的更新，需要触发合并新的子级数据，保留合并后的和更新两份数据，
  //    1.根据更新数据的uuid，根据路径匹配对应的父级数据uuid做更新
  //    2.如果路径匹配不存在
}