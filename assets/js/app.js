/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../scss/app.scss';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

import 'select2';
import bsCustomFileInput from 'bs-custom-file-input';

// somehow this doesn't work...
// @see https://select2.org/configuration/data-attributes
// $('select').select2({
//   theme: 'bootstrap4',
//   width: '100%',
// });
$('select').each(function () {
  $(this).select2({
    theme: "bootstrap4",
    width: '100%',
    placeholder: $(this).data('placeholder'),
    allowClear: Boolean($(this).data('allow-clear')) || false,
  });
});

$('select[autofocus]').select2('focus');

$('[data-toggle="tooltip"]').tooltip();

bsCustomFileInput.init();
