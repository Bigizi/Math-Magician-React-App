import calculate from './calculate';

describe('testing calculate functions', () => {
  test('verify if object is defined ', () => {
    const obj = {
      total: '5',
      next: '5',
      operation: '+',
    };
    const buttonName = '=';
    const finalAnswer = calculate(obj, buttonName);
    expect(finalAnswer.total).toBeDefined();
  });
  test('very object content ', () => {
    const obj = {
      total: '5',
      next: '5',
      operation: '+',
    };
    const buttonName = '=';
    const finalAnswer = calculate(obj, buttonName);
    expect(finalAnswer.next).toBeNull();
  });

  test('calculate addition 5 + 5', () => {
    const obj = {
      total: '5',
      next: '5',
      operation: '+',
    };
    const buttonName = '=';
    const finalAnswer = calculate(obj, buttonName);
    expect(finalAnswer).toEqual({
      total: '10',
      next: null,
      operation: null,
    });
  });
});
