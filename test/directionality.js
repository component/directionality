
/* dependencies */

var dir = require('..')
  , expect = require('expect.js');

/* test */

describe('directonality', function(){
  it('should detect ltr', function(){
    expect(dir('hello world')).to.be('ltr');
  });

  it('should detect rtl', function(){
    expect(dir('الولايات')).to.be('rtl');
  });

  it('should expose regexps', function(){
    expect(dir.regex.ltr.test).to.be.a('function');
    expect(dir.regex.rtl.test).to.be.a('function');
  });
});
