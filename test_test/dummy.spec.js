let dummy = require('./dummy'),
expect = require('chai').expect
console.log('THE DUMMY', dummy)
describe('dummy class', () => {
  describe('Constructor', () => {
    it('Should create an object with two attributes', () => {
      let dummyInstance = new dummy()
      expect(dummyInstance.a).to.equals(5)
      expect(dummyInstance.b).to.equals(10)
    })
  })

  describe('dummyfn', () => {
    it('Should add the param passed to the property a', () => {
      let dummyInstance = new dummy()
      dummyInstance.dummyfn(5)
      expect(dummyInstance.a).to.equals(10)
    })
  })

  describe('dummyfnb', () => {
    it('Should add the param passed to the property b', () => {
      let dummyInstance = new dummy()
      dummyInstance.dummyfn2(5)
      expect(dummyInstance.b).to.equals(15)
    })
  })
})
