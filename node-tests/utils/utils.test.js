//please also look on package.json for info

const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
      //it is a mocha specific fct

    //read function as sentence

    //behaviour driven development bdd
    //describes what the funciton should do
    it('should add two numbers', () => {
      var res = utils.add(33,11);

      expect(res).toBe(44);//.toBeA('number');
      // if (res !== 44 ){
      //   throw new Error(`Expected 44, but got ${res}`);
      // }
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(2, 5, (sum) => {
        expect(sum).toBe(7);
        done();
      });

    });
  })

  describe('#square', () => {

    it('should square one number', () => {
      var res = utils.square(5);

    it('should async square on number', (done) => {
      utils.asyncSquare(3, (sq) => {
        expect(sq).toBe(9);
        done();
      });
    });

      // if (res !== 25){
      //   throw new Error(`Expected 25, but got ${res}`);
      // }
      expect(res).toBe(25);
    });
  });

  describe('#arrayObjContaining', () => {
    it('should expect some values', () => {
      // expect(12).not.toBe(12);
      // expect({name: 'Tobi'}).toBe({name: 'Tobi'});
      // expect({name: 'Tobi'}).toEqual(({name: 'Tobi'}));
      // expect([1,2,3]).toEqual(expect.arrayContaining([5]));
      expect({
        name: 'Tobi',
        age: 31
      }).toEqual(expect.objectContaining({
        age:31
      }));
    });

    it('should verify first and last names are set', () => {
      var user = {
        age : 31,
        location : 'Stuttgart'};
      var name = 'Tobias Leinss';

      var res = utils.setName(user, name);
      expect(user).toEqual(res);

      expect(res.firstName).toBeDefined();
      expect(res.lastName).toBeDefined();
      expect(res).toEqual(expect.objectContaining({
        firstName: 'Tobias',
        lastName: 'Leinss'
      }));

    });
  });


});
