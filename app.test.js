import{
    sortNumbers,
    subtractNumbers,
} from "./app";

test('the sort of array should give the correct result.', () => {
    let result = sortNumbers([4, 2, 7, 18]);
    expect(result).toStrictEqual([18, 7, 4, 2]);
  });
  
  test('should correctly subtract the elements of the given array.', () => {
    let result = subtractNumbers([4, 2, 14]);
    expect(result).toBe(8);
  });

