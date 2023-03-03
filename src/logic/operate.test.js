import operate from './operate';

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
