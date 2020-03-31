// IMPORT MODULES under test here:
import isYes from 'src/is-yes.js';
// import example from '../src/example.js';

const test = QUnit.test;

test('yes, y', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const result = isYes('y');
    const result1 = isYes('yes');
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, true);
    assert.equal(result1, true);
});
