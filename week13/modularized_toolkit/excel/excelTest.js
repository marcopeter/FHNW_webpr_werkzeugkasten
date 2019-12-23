// Default import
import Excel from './excel.js'
import { Suite }                  from '../util/test.js'

export const excelSuite = Suite('excel');

excelSuite.add("excel", assert => {

    let tbody = document.createElement("TBODY");
    tbody.setAttribute("ID","dataContainer");
    let body = document.getElementsByTagName("BODY")[0];
    body.appendChild(tbody);

    Excel.startExcel();
    Excel.refresh();
    assert.is(Excel.n(C3), 6);

    body.removeChild(tbody);

});

excelSuite.run();