import { pi, a, b, c, setA, setB } from './mod.js'
import { Suite }                   from '../util/test.js'

export const modSuite = Suite('mod');

modSuite.add("const", assert => {

    assert.true( pi > 0 ) ;
    assert.is(c, "Mein String");


});

modSuite.add("singleton", assert => {

    assert.is(a, null);
    assert.is(b, null);
    assert.is(c, "Mein String");

    setA("Dierk"); // there is no object exposed and so no target to attack
    setB("König");

    assert.is(a, "Dierk");
    assert.is(b, "König");

    // console.log(x); // newly introduced global x should not be visible but when using bundlers, it is

    // this kind of test does not work with the bundler as it checks the erroneous assignment
    // try {
    //     a = "shall not work";
    //     assert.true(false);
    // } catch (e) {
    //     assert.true("exported variables are read-only.")
    // }

});

modSuite.run();


