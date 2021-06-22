import { JSEncrypt } from 'jsencrypt';
import { PUBLIC_KEY } from '../constants';

/**
 * @name 特定字符加密，比如登录密码。
 * @param {string} text 需要加密的字符
 * @param {string} publicKey 公共密码，固定值
 * @returns {string} 加密后的字符
 */
export function encryption(text: string) {
  const encrypt = new JSEncrypt();

  // PUBLIC_KEY 公共秘钥，固定值
  encrypt.setPublicKey(PUBLIC_KEY);

  // 返回加密后的字符
  return encrypt.encrypt(text);
}
