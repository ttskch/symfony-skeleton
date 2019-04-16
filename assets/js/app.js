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
