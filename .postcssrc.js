// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  'plugins': {
    'postcss-px2rem-exclude': {
      remUnit: 75,
      exclude: /node_modules|folder_name/i
    }
  }
}

