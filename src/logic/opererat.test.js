import calculate from './calculate';
import operate from './operate';

describe('testing calculate functions', () => {
  test('calculate addition ', () => {
    const obj = {
      total: '5',
      next: '5',
      operation: '+',
    };
    const buttonName = '=';
    const finalAnswer = calculate(obj, buttonName);
    expect(finalAnswer.total).toBeDefined();
  });
  test('calculate addition ', () => {
    const obj = {
      total: '5',
      next: '5',
      operation: '+',
    };
    const buttonName = '=';
    const finalAnswer = calculate(obj, buttonName);
    expect(finalAnswer.next).toBeNull();
  });

  test('calculate addition ', () => {
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

describe('testing calculate functions', () => {
  test('should ', () => {
    const num1 = 5;
    const num2 = 10;
    const operation = '+';
    const answer = operate(num1, num2, operation);
    expect(answer).toMatch('15');
  });

  test('should ', () => {
    const num1 = 0;
    const num2 = 0;
    const operation = '÷';
    const answer = operate(num1, num2, operation);
    expect(answer).toMatch("Can't divide by 0.");
  });

  test('should ', () => {
    const num1 = 0;
    const num2 = 0;
    const operation = '-';
    const answer = operate(num1, num2, operation);
    expect(answer).toBeDefined();
  });

  test('should ', () => {
    const num1 = 13;
    const num2 = 13;
    const operation = '-';
    const answer = operate(num1, num2, operation);
    expect(answer).toBeTruthy();
  });
});
