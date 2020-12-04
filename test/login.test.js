describe('index.js: ', function() {
  it('first test', function() {
    let i = 1
    let j = 1
    // expect(i).to.be(true)
    assert.equal(i, j);// 断言value1和value2相等
  })
  it('second test', function() {
    let i = 'true'
    let j = true
    expect(i).eq(j)
  })
  it.skip('third test', function() {
    // expect(bar).to.not.exist;// 断言变量bar不存在
    // expect(data).to.have.ownProperty('length');// 断言data有length属性
    // expect(name).to.be.a('string');// 断言name是一个字符串
    // assert.equal(value1,value2);// 断言value1和value2相等

    let i = 'this is a string'
    expect(i).to.be.a('string')
  })
})
