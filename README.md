# vue-cli-plugin-svg-icon

Adds webpack rules to generate optimized svg sprites.

# Setup

``` bash
yarn add --dev @4tw/vue-cli-plugin-svg-icon
```

# Usage

Provide a `svgDir` option under `pluginOptions` in your `vue.config.js` config.

``` javascript
module.exports = {
  pluginOptions: {
    svgDir: path.resolve(__dirname, 'src/assets/svg'),
  },
}
```

# Usage

All svg files under the `svgDir` are processes and provided as an import.
The imports are aliased under `svg`.

``` javascript
import Icon from 'svg/your_icon.svg'
```

The imported module provides a symbol from the [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader#runtime-configuration)
