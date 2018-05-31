Minimal test setup for a node app. Hopefully it will save you time.

npm i --save-dep nyc mocha chai

package.json
  ...
  "scripts": {
    "test": "nyc mocha --recursive --exit",
    "coverage": "nyc report"
    ...
  }
}

put your tests in a `test` folder at the root of your project, should mirror
the application source code structure one-to-one.

$ tree .
.
├── app
│   └── index.js
├── package.json
└── test
    └── app
        └── index.js

a sample mocha test from the docs

// test/app/index.js
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

Now you can run your test suite with coverage via `npm run`.
For coverage run `npm run coverage`. Uses the *text* reporter.
