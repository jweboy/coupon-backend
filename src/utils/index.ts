/**
 * @name 检查当前值是否为空、null或者undefined，不包括0
 * @param {any} value 任意类型的值
 * @returns {boolean}
 */
export const checkIsEmptyOrNullOrUndefiend = (value: any) => {
  return value === '' || value == null;
};

/**
 * @name 代理当前所使用的对象，判断获取的属性是否存在于此对象中，避免从undefined中获取属性导致代码错误引起的意外BUG
 */
export function proxyUndefinedPropsToPlainObject<T extends object>(obj: T) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      if (target[key] === undefined) {
        Reflect.set(target, key, {}, receiver);
        return Reflect.get(target, key, receiver);
      }
      return Reflect.get(target, key, receiver);
    },
  });
}

/**
 * @name 生成随机长度的哈希字符串
 * @param {number} length 指定需要生成字符串的长度
 * @returns {string} 新的哈希字符串
 */
export function getRandomHash(length: number) {
  if (!length || typeof Number(length) !== 'number') {
    return '';
  }
  // prettier-ignore
  const ar = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const hs = [];
  const hl = Number(length);
  const al = ar.length;
  for (let i = 0; i < hl; i += 1) {
    hs.push(ar[Math.floor(Math.random() * al)]);
  }
  return hs.join('');
}
