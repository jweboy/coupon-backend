/*
 * @Author: jweboy
 * @Date: 2020-02-07 11:51:08
 * @LastEditors: jweboy
 * @LastEditTime: 2020-02-20 17:05:52
 */
import fs from 'fs';
import path from 'path';
import dotenv, { DotenvParseOutput } from 'dotenv';

export default function setEnvKeys() {
  const rootPath = fs.realpathSync(process.cwd());
  const { ENV } = process.env;

  const envPath = path.resolve(rootPath, `.env.${ENV}`);
  const fileEnv = dotenv.config({ path: envPath }).parsed;

  // 确保不同环境变量的 env 文件都存在能够正常读取
  if (!fileEnv) {
    console.log('请添加对应环境的env文件后再重新启动项目');
    process.exit(-1);
  }

  const envKeys = Object.keys(fileEnv!).reduce<DotenvParseOutput>((obj, key) => {
    obj[`process.env.${key}`] = fileEnv![key];
    return obj;
  }, {});

  return envKeys;
}
