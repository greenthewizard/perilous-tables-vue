import * as tableFactory from './tableFactory.js';

const tblRefRegEx = /tbl:.+?\[.+?\]/g

const resolveString = (str) => {
    const newTables = [];
    let match = [];

    tblRefRegEx.lastIndex = 0;
    while ((match = tblRefRegEx.exec(str))) {
        newTables.push(tableFactory.newTable(match[0]))
    }

    return Promise.all(newTables)
    .then(tbls => tbls.map(tbl => tbl.roll()))
    .then(tbls => str.replace(tblRefRegEx, () => tbls.shift().result))
    .then(newStr => {
        return tblRefRegEx.test(newStr)
            ? resolveString(newStr) 
            : Promise.resolve(newStr);
    });
}

const resolveStringWithNames = (str) => {
    const newTables = [];
    let match = [];

    tblRefRegEx.lastIndex = 0;
    while ((match = tblRefRegEx.exec(str))) {
        newTables.push(tableFactory.newTable(match[0]))
    }

    return Promise.all(newTables)
    .then(tbls => tbls.map(tbl => tbl.roll()))
    .then(tbls => str.replace(tblRefRegEx, () => {
        const tbl = tbls.shift();
        return `${tbl.tableName}: ${tbl.result}`
    }))
    .then(newStr => {
        return tblRefRegEx.test(newStr)
            ? resolveStringWithNames(newStr) 
            : Promise.resolve(newStr);
    });
}

const table = (ref) => {
    return tableFactory.newTable(ref);
}

export default {
    table,
    resolveString,
    resolveStringWithNames
}