import { classNames } from './classNames';

describe('Testing className function', () => {
  test('Test 1', () => {
    const result = 'main'
    expect(classNames('main', {}, [])).toBe(result);
  });
  test('Test 2', () => {
    const result = 'main class1 class2'
    expect(classNames('main', {}, ['class1', 'class2'])).toBe(result);
  });
  test('Test 3', () => {
    const result = 'main class1 class2 hovered'
    expect(classNames(
      'main',
      { hovered: true },
      ['class1', 'class2'],
    )).toBe(result);
  });
  test('Test 4', () => {
    const result = 'main class1 class2 hovered'
    expect(classNames(
      'main',
      { hovered: true, green: false },
      ['class1', 'class2'],
    )).toBe(result);
  });
  test('Test 5', () => {
    const result = 'main class1 class2 hovered'
    expect(classNames(
      'main',
      { hovered: true, green: undefined },
      ['class1', 'class2', undefined],
    )).toBe(result);
  });
})
