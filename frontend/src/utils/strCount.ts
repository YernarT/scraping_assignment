/**
 * @param str { string } 完整字符串
 * @param target { string } 目标对象, 要查找的字符串
 *
 * @returns { number } 出现次数
 */
export default (str: string, target: string): number => str.split(target).length - 1;
