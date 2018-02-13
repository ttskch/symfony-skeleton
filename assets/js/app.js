import 'select2';

$('select').each(function () {
    $(this).select2({
        theme: "bootstrap4",
        placeholder: $(this).attr('placeholder'),
        allowClear: Boolean($(this).data('allow_clear')) || false,
    });
});

$('[data-toggle="tooltip"]').tooltip();
