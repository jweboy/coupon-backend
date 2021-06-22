/**
 * @name 封装window.localStorage函数
 */
const localStorage = {
  remove(key: string) {
    window.localStorage.removeItem(key);
  },
  set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  get(key: string): any | null {
    const value = window.localStorage.getItem(key);
    return value != null ? JSON.parse(value) : value;
  },
};

export default localStorage;
