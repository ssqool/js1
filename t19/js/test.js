describe("checkBrackets", function() {  // Какую функциональность мы описываем. В нашем случае мы описываем функцию pow. Используется для группировки рабочих лошадок – блоков it.
  //-
  it("Incorrect case", function() {  //В первом аргументе блока it мы человеческим языком описываем конкретный способ использования функции, а во втором – пишем функцию, которая тестирует данный случай.
    assert.equal(checkBrackets('1)()(())2(()'), 2); //Функции вида assert.* используются для проверки того, что функция pow работает так, как мы ожидаем.
  });
  it("Incorrect case", function() {
    assert.equal(checkBrackets('1))(()(())2(()'), 4);
  });
  it("Incorrect case", function() {
    assert.equal(checkBrackets('sad)1)()(())2((()'), 4);
  });
  it("Incorrect case", function() {
    assert.equal(checkBrackets('1)())()())2((('), 6);
  });
  it("Incorrect case", function() {
    assert.equal(checkBrackets('1)()))()()()2(()(()('), 6);
  });

  //+

  it("Correct case: (1)()(())2(())", function() {
    assert.equal(checkBrackets('(1)()(())2(())'), 0);
  });
  it("Correct case: (1)(()(()))2()()", function() {
    assert.equal(checkBrackets('(1)(()(()))2()()'), 0);
  });
  it("Correct case: ((sad)1)()(())2(())", function() {
    assert.equal(checkBrackets('((sad)1)()(())2(())'), 0);
  });
  it("Correct case: 1()()()2()", function() {
    assert.equal(checkBrackets('1()()()2()'), 0);
  });
  it("Correct case: (1)((()))()()()2(())(()())", function() {
    assert.equal(checkBrackets('(1)((()))()()()2(())(()())'), 0);
  });
  it("Correct case: 1)()(())2(()", function() {
    assert.equal(checkBrackets('1)()(())2(()'), 0);
  });
  it("Correct case: 1))(()(())2(()", function() {
    assert.equal(checkBrackets('1))(()(())2(()'), 0);
  });
  it("Correct case: (sad)1()(())2()()", function() {
    assert.equal(checkBrackets('(sad)1()(())2()()'), 0);
  });
  it("Correct case: (1()()()2)", function() {
    assert.equal(checkBrackets('(1()()()2)'), 0);
  });
  it("Correct case: ((1)(()()2())())", function() {
    assert.equal(checkBrackets('((1)(()()2())())'), 0);

});