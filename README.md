# 模板项目

## 环境变量

项目全局有四种环境变量，分别是开发（`dev`）、测试（`test`）、压测（`perf`）、生产（`prod`），对应 `npm` 脚本注入不同的环境变量值来区分不同的配置，例子如下：

```js
// test就是测试环境的全局变量，通过脚本注入方式
// cross-env 环境变量注入库 ENV=环境变量
// ENV=环境变量
"build:test": "cross-env ENV=test umi build"
```

## ENV文件
如果在同一个环境中需要配置多个全局变量（如：请求API等），只需在 `.env.${ENV}` 文件中添加即可。（ `${ENV}` 可替换成不同的环境变量值，如：`dev`，即 `.env.dev` ）`.env.${ENV}` 文件遵循 `key=value` 的规范,可任意添加多个变量值，例子如下：

```js
.ev.perf // 针对测压环境的环境变量文件

// 可存放固定密钥串、API请求地址、外链地址等等
PUBLICKEY=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCl1DvAhU/lXdM0hFe1FCksP0zaQBMBgfQfqSY685V1s5zFM5ZQ/j+azHKSZQ7pUZY9aeWXFT6cbt2ZkwNYY0chVTMl9tm0q7x7ESHecV1pyxIqt/2szxbl7tAa0zfDbDFq9vuxq6wnVuFwFQl4cMmWn4FTxxb6NwP3dYBWPVcYswIDAQAB
API=http://admanage.perf.shuli.com
H5_URL=http://ssp-static.perf.shuli.com
H5_DIRECT_URL=https://gateway-perf.shulidata.com/avt/direct/ssp/activity/directTask
DIRECT_URL=http://gateway.perf.shuli.com/avt/direct/ssp/h5/aggregation
UPS_URL=http://ups.perf.shuli.com
DSP_URL=http://shuliadplatform-static-perf.shuli.com

```

## 执行脚本

项目包含的 `build:${ENV}`（ `${ENV}` 可替换成不同环境的环境变量值，分别为 `dev`、`test`、`perf`）系列脚本是跟 [Jenkins](http://jenkins.shuli.com/) 项目部署的构建脚本一一对应，生产环境无需指定 `ENV` 变量，默认就是 `build` 脚本 。


### start
用于本地开发。

### build
用于生产环境打包。

### build:dev
用于开发环境打包。

### build:test
用于测试环境打包。。

### build:perf
用于压测环境打包。

### build:analyze
用于分析打包后的文件大小，只有在项目打包特别慢的时候比较有用。

### preinstall
在执行 `npm install` 或者 `yarn` 的时候会自动挂载内部 `npm` 仓库的代理，这个脚本无需手动执行，但`不能删除`，因为项目引用了内部组件。 `stu`。

### precommit
如果在命令行通过 `git commit` 或者 `gc` 命令提交代码，会默认在代码提交前进行拦截，并执行代码的格式化，完成后会执行代码提交模板，此时才可继续进行提交操作，如不需要`可删除`。

### lint
用于代码格式化，主要通过 `eslint` 结合 `prettier` 实现。`eslint`是编码规范，`perttier`是代码格式化，（`eslint` 对应配置文件是 `.eslintrc.js` 和 `.eslintignore`, `perttier` 对应配置文件是 `.prettierrc` 和 `.prettierignore` ），如不需要`可删除`。







