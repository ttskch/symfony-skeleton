import 'select2';

// somehow this doesn't work...
// @see https://select2.org/configuration/data-attributes
// $('select').select2({
//     theme: 'bootstrap4',
//     width: '100%',
// });
$('select').each(function () {
    $(this).select2({
        theme: "bootstrap4",
        width: '100%',
        placeholder: $(this).data('placeholder'),
        allowClear: Boolean($(this).data('allow-clear')) || false,
    });
});

$('[data-toggle="tooltip"]').tooltip();
