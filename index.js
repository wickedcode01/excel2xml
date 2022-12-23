const fs = require('fs');
const xlsx = require('node-xlsx');
const _ = require('lodash');
// excel数据
const path = `${__dirname}/dist/words.xlsx`;
const outpath = `${__dirname}/dist/words.xml`
const originData = xlsx.parse(path);

const list  = _.get(originData,'[0].data');
list.shift();
const str = list.map(i=>`<item><word>${i[0]}</word><trans><![CDATA[${i[1]}]]></trans><lanfrom><![CDATA[en]]></lanfrom><lanto><![CDATA[zh-CHS]]></lanto><tags>多邻国</tags></item>`).join('\n');
const xml=`<wordbook>${str}</wordbook>`;
fs.writeFile(outpath, xml, () => { console.log("successful saved") });