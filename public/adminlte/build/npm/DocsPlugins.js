'use strict'

const Plugins = [
  // AdminLTE Dist
  {
    from: './adminlte/dist/css/',
    to: 'docs/assets/css/'
  },
  {
    from: './adminlte/dist/js/',
    to: 'docs/assets/js/'
  },
  // jQuery
  {
    from: 'node_modules/jquery/./adminlte/dist/',
    to: 'docs/assets/./adminlte/plugins/jquery/'
  },
  // Popper
  {
    from: 'node_modules/popper.js/./adminlte/dist/',
    to: 'docs/assets/./adminlte/plugins/popper/'
  },
  // Bootstrap
  {
    from: 'node_modules/bootstrap/./adminlte/dist/js/',
    to: 'docs/assets/./adminlte/plugins/bootstrap/js/'
  },
  // Font Awesome
  {
    from: 'node_modules/@fortawesome/fontawesome-free/css/',
    to: 'docs/assets/./adminlte/plugins/fontawesome-free/css/'
  },
  {
    from: 'node_modules/@fortawesome/fontawesome-free/webfonts/',
    to: 'docs/assets/./adminlte/plugins/fontawesome-free/webfonts/'
  },
  // overlayScrollbars
  {
    from: 'node_modules/overlayscrollbars/js/',
    to: 'docs/assets/./adminlte/plugins/overlayScrollbars/js/'
  },
  {
    from: 'node_modules/overlayscrollbars/css/',
    to: 'docs/assets/./adminlte/plugins/overlayScrollbars/css/'
  }
]

module.exports = Plugins
