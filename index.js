const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, theme, variants }) {
  const flattenObject = (obj, prefix = '', separator = '-') =>
    Object.keys(obj).reduce((acc, k) => {
      const pre = prefix.length ? prefix + separator : ''
      if (typeof obj[k] === 'object') {
        Object.assign(acc, flattenObject(obj[k], pre + k))
      } else acc[pre + k] = obj[k]
      return acc
    }, {})

  const widths = theme('outlineWidth', {
    0: '0',
    2: '2px',
    4: '4px',
    6: '6px',
    8: '8px',
    10: '10px'
  })

  const styles = theme('outlineStyle', {
    solid: 'solid'
  })

  const colors = flattenObject(theme('outlineColor', {}), '', '-')

  const offsets = theme('outlineOffset', {
    0: '0',
    1: '1px',
    2: '2px',
    4: '4px'
  })

  const utils = {}
  const prefix = '.outline'

  if (widths.DEFAULT || styles.DEFAULT || colors.DEFAULT || offsets.DEFAULT) {
    utils[prefix] = {}
    if (widths.DEFAULT) {
      utils[prefix]['outline-width'] = widths.DEFAULT
    }
    if (styles.DEFAULT) {
      utils[prefix]['outline-style'] = styles.DEFAULT
    }
    if (colors.DEFAULT) {
      utils[prefix]['outline-color'] = colors.DEFAULT
    }
    if (offsets.DEFAULT) {
      utils[prefix]['outline-offset'] = offsets.DEFAULT
    }
  }

  for (const width in widths) {
    utils[`${prefix}-${width}`] = {
      'outline-width': widths[width]
    }
  }

  for (const style in styles) {
    utils[`${prefix}-${style}`] = {
      'outline-style': styles[style]
    }
  }

  for (const color in colors) {
    utils[`${prefix}-${color}`] = {
      'outline-color': colors[color]
    }
  }

  for (const offset in offsets) {
    utils[`${prefix}-offset-${offset}`] = {
      'outline-offset': offsets[offset]
    }
  }

  addUtilities(utils, variants('outline'))
})