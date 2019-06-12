'use strict'
const path = require('path')
const config = require('../config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const packageConfig = require('../package.json')
const externalsOptions = require('../externals.json')
const components = require('../components.json')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return [MiniCssExtractPlugin.loader].concat(loaders)
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
/**
 * 设置 externals 配置项：不打包到组件里，运行时从外部获取
 * vue、mintui组件、互相依赖的自定义组件、package.json dependencies
 *
 * @returns {{vue}}
 */
exports.getExternals = () => {
  const {vue, mintui} = externalsOptions
  let result = {vue}
  mintui.forEach(key => {
    // mintui 组件用到 按需加载 ，应该按照 babel 转换后的语法，进行配置。
    result[`mint-ui/lib/${key}`] = `mint-ui/lib/${key}`;
    result[`mint-ui/lib/${key}/style.css`] = `mint-ui/lib/${key}/style.css`;
  })

  Object.keys(components).forEach(function(key) {
    result[`zyby-ui/components/${key}.vue`] = `vue-zyby-ui/lib/${key}.js`
    // result['zyby-ui/components/Back.css'] = 'vue-zyby-ui/lib/theme/Back.css'
  });

  Object.keys(packageConfig.dependencies).forEach(function(key) {
    result[key] = key;
  });
  return result
}
