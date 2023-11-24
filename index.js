const { describe, beforeEach, it } = require('mocha');
const { expect } = require('chai');
const { Cat, Dog, Bird } = require('../path-to-your-classes-file');

describe('Cat', () => {
  let cat;

  beforeEach(() => {
    cat = new Cat('Whiskers', 'female');
  });

  it('has a class of cat', () => {
    expect(cat).to.be.an.instanceOf(Cat);
  });

  it('can speak', () => {
    expect(cat.speak()).to.equal('Whiskers says meow!');
  });
});

describe('Dog', () => {
  // Similar structure for Dog tests
});

describe('Bird', () => {
  // Similar structure for Bird tests
});
