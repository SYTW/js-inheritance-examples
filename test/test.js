// Testing TextCell ...
/*
var cell = new TextCell("no\nway");
console.log(cell.heightProp);
// → 2
cell.heightProp = 100;
console.log(cell.heightProp);    
    
*/
var drawTable = require('../lyingouttable.js');

describe("TextCell", function() {
  it("should skip prefix spaces", function() {
    parser.skipSpace("  # hehe\n a").should.equal('a');
  })
});

  /*
  it("should parse apply with multiple arguments", function() {
    var value = 
      { expr: 
        { type: 'apply',
          operator: { type: 'word', name: 'word' },
          args:  [ { type: 'word', name: 'a' },
            { type: 'word', name: 'b' },
            { type: 'word', name: 'c' } ] },
        rest: '' }
    parser.parseExpression('word (a, b, c)').should.eql(value);
  })
  it("should parse apply with no args", function() {
    var value = 
      { expr: 
        { type: 'apply',
          operator: { type: 'word', name: 'word' },
          args: [] },
      rest: '' }
    parser.parseExpression('word ( )').should.eql(value);
  })
  it("should apply can be chain", function() {
    var value = 
        { expr: 
          { type: 'apply',
            operator: { 
              type: 'apply', 
              operator: { type: 'word', name: 'word' },
              args: [ { type: 'word', name: 'a' }, { type: 'word', name: 'b' } ]
            },
            args: [ { type: 'word', name: 'c' }, { type: 'word', name: 'd' } ]
          },
          rest: '' };
    parser.parseExpression('word (a , b ) (c, d)').should.eql(value);
  })
  */
  it("should have syntax error if not valid", function() {
    (function(){parser.parseExpression('')}).should.throw("Not valid Egg expression!");
    (function(){parser.parseExpression('a(,')}).should.throw("Not valid Egg expression!");
    (function(){parser.parseExpression('a( )(')}).should.throw("Not valid Egg expression!");
    (function(){parser.parseExpression('a(, )')}).should.throw("Not valid Egg expression!");
  })
  it("should have not expected , or ) if not correct seperator", function() {
    (function(){parser.parseExpression('word (a b)')}).should.throw("Egg expect ',' or ')'");
    (function(){parser.parseExpression('a(a')}).should.throw("Egg expect ',' or ')'");
  })
  it("parse should throw when there are rest", function(){
    (function() {parser.parse("+(a,b) e")}).should.throw("Egg unexpected text after program!")
  })
  it("parse should work well otherwise", function(){
    var value = 
      { type: 'apply',
        operator: { type: 'word', name: '+' },
        args: [ { type: 'word', name: 'a' }, { type: 'word', name: 'b' } ] }
    parser.parse("+(a,b)").should.eql(value);
  })
})

// FIXME: 测试闭包特性
//do(define(f, fun(a, fun(b, +(a, b)))),
//   print(f(4)(5)))

