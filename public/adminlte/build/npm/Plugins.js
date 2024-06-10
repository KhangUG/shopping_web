'use strict'

const Plugins = [
  // jQuery
  {
    from: 'node_modules/jquery/dist',
    to: './adminlte/plugins/jquery'
  },
  // Popper
  {
    from: 'node_modules/popper.js/dist',
    to: './adminlte/plugins/popper'
  },
  // Bootstrap
  {
    from: 'node_modules/bootstrap/./adminlte/dist/js',
    to: './adminlte/plugins/bootstrap/js'
  },
  // Font Awesome
  {
    from: 'node_modules/@fortawesome/fontawesome-free/css',
    to: './adminlte/plugins/fontawesome-free/css'
  },
  {
    from: 'node_modules/@fortawesome/fontawesome-free/webfonts',
    to: './adminlte/plugins/fontawesome-free/webfonts'
  },
  // overlayScrollbars
  {
    from: 'node_modules/overlayscrollbars/js',
    to: './adminlte/plugins/overlayScrollbars/js'
  },
  {
    from: 'node_modules/overlayscrollbars/css',
    to: './adminlte/plugins/overlayScrollbars/css'
  },
  // Chart.js
  {
    from: 'node_modules/chart.js/./adminlte/dist/',
    to: './adminlte/plugins/chart.js'
  },
  // jQuery UI
  {
    from: 'node_modules/jquery-ui-./adminlte/dist/',
    to: './adminlte/plugins/jquery-ui'
  },
  // Flot
  {
    from: 'node_modules/flot/./adminlte/dist/es5/',
    to: './adminlte/plugins/flot'
  },
  {
    from: 'node_modules/flot/source/',
    to: './adminlte/plugins/flot/plugins'
  },
  // Summernote
  {
    from: 'node_modules/summernote/./adminlte/dist/',
    to: './adminlte/plugins/summernote'
  },
  // Bootstrap Slider
  {
    from: 'node_modules/bootstrap-slider/./adminlte/dist/',
    to: './adminlte/plugins/bootstrap-slider'
  },
  {
    from: 'node_modules/bootstrap-slider/./adminlte/dist/css',
    to: './adminlte/plugins/bootstrap-slider/css'
  },
  // Bootstrap Colorpicker
  {
    from: 'node_modules/bootstrap-colorpicker/./adminlte/dist/js',
    to: './adminlte/plugins/bootstrap-colorpicker/js'
  },
  {
    from: 'node_modules/bootstrap-colorpicker/./adminlte/dist/css',
    to: './adminlte/plugins/bootstrap-colorpicker/css'
  },
  // Tempusdominus Bootstrap 4
  {
    from: 'node_modules/tempusdominus-bootstrap-4/build/js',
    to: './adminlte/plugins/tempusdominus-bootstrap-4/js'
  },
  {
    from: 'node_modules/tempusdominus-bootstrap-4/build/css',
    to: './adminlte/plugins/tempusdominus-bootstrap-4/css'
  },
  // Moment
  {
    from: 'node_modules/moment/min',
    to: './adminlte/plugins/moment'
  },
  {
    from: 'node_modules/moment/locale',
    to: './adminlte/plugins/moment/locale'
  },
  // FastClick
  {
    from: 'node_modules/fastclick/lib',
    to: './adminlte/plugins/fastclick'
  },
  // Date Range Picker
  {
    from: 'node_modules/daterangepicker/',
    to: './adminlte/plugins/daterangepicker'
  },
  // DataTables
  {
    from: 'node_modules/pdfmake/build',
    to: './adminlte/plugins/pdfmake'
  },
  {
    from: 'node_modules/jszip/dist',
    to: './adminlte/plugins/jszip'
  },
  {
    from: 'node_modules/datatables.net/js',
    to: './adminlte/plugins/datatables'
  },
  {
    from: 'node_modules/datatables.net-bs4/js',
    to: './adminlte/plugins/datatables-bs4/js'
  },
  {
    from: 'node_modules/datatables.net-bs4/css',
    to: './adminlte/plugins/datatables-bs4/css'
  },
  {
    from: 'node_modules/datatables.net-autofill/js',
    to: './adminlte/plugins/datatables-autofill/js'
  },
  {
    from: 'node_modules/datatables.net-autofill-bs4/js',
    to: './adminlte/plugins/datatables-autofill/js'
  },
  {
    from: 'node_modules/datatables.net-autofill-bs4/css',
    to: './adminlte/plugins/datatables-autofill/css'
  },
  {
    from: 'node_modules/datatables.net-buttons/js',
    to: './adminlte/plugins/datatables-buttons/js'
  },
  {
    from: 'node_modules/datatables.net-buttons-bs4/js',
    to: './adminlte/plugins/datatables-buttons/js'
  },
  {
    from: 'node_modules/datatables.net-buttons-bs4/css',
    to: './adminlte/plugins/datatables-buttons/css'
  },
  {
    from: 'node_modules/datatables.net-colreorder/js',
    to: './adminlte/plugins/datatables-colreorder/js'
  },
  {
    from: 'node_modules/datatables.net-colreorder-bs4/js',
    to: './adminlte/plugins/datatables-colreorder/js'
  },
  {
    from: 'node_modules/datatables.net-colreorder-bs4/css',
    to: './adminlte/plugins/datatables-colreorder/css'
  },
  {
    from: 'node_modules/datatables.net-fixedcolumns/js',
    to: './adminlte/plugins/datatables-fixedcolumns/js'
  },
  {
    from: 'node_modules/datatables.net-fixedcolumns-bs4/js',
    to: './adminlte/plugins/datatables-fixedcolumns/js'
  },
  {
    from: 'node_modules/datatables.net-fixedcolumns-bs4/css',
    to: './adminlte/plugins/datatables-fixedcolumns/css'
  },
  {
    from: 'node_modules/datatables.net-fixedheader/js',
    to: './adminlte/plugins/datatables-fixedheader/js'
  },
  {
    from: 'node_modules/datatables.net-fixedheader-bs4/js',
    to: './adminlte/plugins/datatables-fixedheader/js'
  },
  {
    from: 'node_modules/datatables.net-fixedheader-bs4/css',
    to: './adminlte/plugins/datatables-fixedheader/css'
  },
  {
    from: 'node_modules/datatables.net-keytable/js',
    to: './adminlte/plugins/datatables-keytable/js'
  },
  {
    from: 'node_modules/datatables.net-keytable-bs4/js',
    to: './adminlte/plugins/datatables-keytable/js'
  },
  {
    from: 'node_modules/datatables.net-keytable-bs4/css',
    to: './adminlte/plugins/datatables-keytable/css'
  },
  {
    from: 'node_modules/datatables.net-responsive/js',
    to: './adminlte/plugins/datatables-responsive/js'
  },
  {
    from: 'node_modules/datatables.net-responsive-bs4/js',
    to: './adminlte/plugins/datatables-responsive/js'
  },
  {
    from: 'node_modules/datatables.net-responsive-bs4/css',
    to: './adminlte/plugins/datatables-responsive/css'
  },
  {
    from: 'node_modules/datatables.net-rowgroup/js',
    to: './adminlte/plugins/datatables-rowgroup/js'
  },
  {
    from: 'node_modules/datatables.net-rowgroup-bs4/js',
    to: './adminlte/plugins/datatables-rowgroup/js'
  },
  {
    from: 'node_modules/datatables.net-rowgroup-bs4/css',
    to: './adminlte/plugins/datatables-rowgroup/css'
  },
  {
    from: 'node_modules/datatables.net-rowreorder/js',
    to: './adminlte/plugins/datatables-rowreorder/js'
  },
  {
    from: 'node_modules/datatables.net-rowreorder-bs4/js',
    to: './adminlte/plugins/datatables-rowreorder/js'
  },
  {
    from: 'node_modules/datatables.net-rowreorder-bs4/css',
    to: './adminlte/plugins/datatables-rowreorder/css'
  },
  {
    from: 'node_modules/datatables.net-scroller/js',
    to: './adminlte/plugins/datatables-scroller/js'
  },
  {
    from: 'node_modules/datatables.net-scroller-bs4/js',
    to: './adminlte/plugins/datatables-scroller/js'
  },
  {
    from: 'node_modules/datatables.net-scroller-bs4/css',
    to: './adminlte/plugins/datatables-scroller/css'
  },
  {
    from: 'node_modules/datatables.net-searchbuilder/js',
    to: './adminlte/plugins/datatables-searchbuilder/js'
  },
  {
    from: 'node_modules/datatables.net-searchbuilder-bs4/js',
    to: './adminlte/plugins/datatables-searchbuilder/js'
  },
  {
    from: 'node_modules/datatables.net-searchbuilder-bs4/css',
    to: './adminlte/plugins/datatables-searchbuilder/css'
  },
  {
    from: 'node_modules/datatables.net-searchpanes/js',
    to: './adminlte/plugins/datatables-searchpanes/js'
  },
  {
    from: 'node_modules/datatables.net-searchpanes-bs4/js',
    to: './adminlte/plugins/datatables-searchpanes/js'
  },
  {
    from: 'node_modules/datatables.net-searchpanes-bs4/css',
    to: './adminlte/plugins/datatables-searchpanes/css'
  },
  {
    from: 'node_modules/datatables.net-select/js',
    to: './adminlte/plugins/datatables-select/js'
  },
  {
    from: 'node_modules/datatables.net-select-bs4/js',
    to: './adminlte/plugins/datatables-select/js'
  },
  {
    from: 'node_modules/datatables.net-select-bs4/css',
    to: './adminlte/plugins/datatables-select/css'
  },

  // Fullcalendar
  {
    from: 'node_modules/fullcalendar/',
    to: './adminlte/plugins/fullcalendar'
  },
  // icheck bootstrap
  {
    from: 'node_modules/icheck-bootstrap/',
    to: './adminlte/plugins/icheck-bootstrap'
  },
  // inputmask
  {
    from: 'node_modules/inputmask/./adminlte/dist/',
    to: './adminlte/plugins/inputmask'
  },
  // ion-rangeslider
  {
    from: 'node_modules/ion-rangeslider/',
    to: './adminlte/plugins/ion-rangeslider'
  },
  // JQVMap (jqvmap-novulnerability)
  {
    from: 'node_modules/jqvmap-novulnerability/./adminlte/dist/',
    to: './adminlte/plugins/jqvmap'
  },
  // jQuery Mapael
  {
    from: 'node_modules/jquery-mapael/js/',
    to: './adminlte/plugins/jquery-mapael'
  },
  // Raphael
  {
    from: 'node_modules/raphael/',
    to: './adminlte/plugins/raphael'
  },
  // jQuery Mousewheel
  {
    from: 'node_modules/jquery-mousewheel/',
    to: './adminlte/plugins/jquery-mousewheel'
  },
  // jQuery Knob
  {
    from: 'node_modules/jquery-knob-chif/./adminlte/dist/',
    to: './adminlte/plugins/jquery-knob'
  },
  // pace-progress
  {
    from: 'node_modules/@lgaitan/pace-progress/./adminlte/dist/',
    to: './adminlte/plugins/pace-progress'
  },
  // Select2
  {
    from: 'node_modules/select2/./adminlte/dist/',
    to: './adminlte/plugins/select2'
  },
  {
    from: 'node_modules/@ttskch/select2-bootstrap4-theme/./adminlte/dist/',
    to: './adminlte/plugins/select2-bootstrap4-theme'
  },
  // Sparklines
  {
    from: 'node_modules/sparklines/source/',
    to: './adminlte/plugins/sparklines'
  },
  // SweetAlert2
  {
    from: 'node_modules/sweetalert2/./adminlte/dist/',
    to: './adminlte/plugins/sweetalert2'
  },
  {
    from: 'node_modules/@sweetalert2/theme-bootstrap-4/',
    to: './adminlte/plugins/sweetalert2-theme-bootstrap-4'
  },
  // Toastr
  {
    from: 'node_modules/toastr/build/',
    to: './adminlte/plugins/toastr'
  },
  // jsGrid
  {
    from: 'node_modules/jsgrid/dist',
    to: './adminlte/plugins/jsgrid'
  },
  {
    from: 'node_modules/jsgrid/demos/db.js',
    to: './adminlte/plugins/jsgrid/demos/db.js'
  },
  // flag-icon-css
  {
    from: 'node_modules/flag-icon-css/css',
    to: './adminlte/plugins/flag-icon-css/css'
  },
  {
    from: 'node_modules/flag-icon-css/flags',
    to: './adminlte/plugins/flag-icon-css/flags'
  },
  // bootstrap4-duallistbox
  {
    from: 'node_modules/bootstrap4-duallistbox/dist',
    to: './adminlte/plugins/bootstrap4-duallistbox/'
  },
  // filterizr
  {
    from: 'node_modules/filterizr/dist',
    to: './adminlte/plugins/filterizr/'
  },
  // ekko-lightbox
  {
    from: 'node_modules/ekko-lightbox/dist',
    to: './adminlte/plugins/ekko-lightbox/'
  },
  // bootstrap-switch
  {
    from: 'node_modules/bootstrap-switch/dist',
    to: './adminlte/plugins/bootstrap-switch/'
  },
  // jQuery Validate
  {
    from: 'node_modules/jquery-validation/./adminlte/dist/',
    to: './adminlte/plugins/jquery-validation'
  },
  // bs-custom-file-input
  {
    from: 'node_modules/bs-custom-file-input/./adminlte/dist/',
    to: './adminlte/plugins/bs-custom-file-input'
  },
  // bs-stepper
  {
    from: 'node_modules/bs-stepper/./adminlte/dist/',
    to: './adminlte/plugins/bs-stepper'
  },
  // CodeMirror
  {
    from: 'node_modules/codemirror/lib/',
    to: './adminlte/plugins/codemirror'
  },
  {
    from: 'node_modules/codemirror/addon/',
    to: './adminlte/plugins/codemirror/addon'
  },
  {
    from: 'node_modules/codemirror/keymap/',
    to: './adminlte/plugins/codemirror/keymap'
  },
  {
    from: 'node_modules/codemirror/mode/',
    to: './adminlte/plugins/codemirror/mode'
  },
  {
    from: 'node_modules/codemirror/theme/',
    to: './adminlte/plugins/codemirror/theme'
  },
  // dropzonejs
  {
    from: 'node_modules/dropzone/./adminlte/dist/',
    to: './adminlte/plugins/dropzone'
  },
  // uPlot
  {
    from: 'node_modules/uplot/./adminlte/dist/',
    to: './adminlte/plugins/uplot'
  }
]

module.exports = Plugins
