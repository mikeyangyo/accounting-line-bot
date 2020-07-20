$(document).ready(() => {
    $('#create_record_form').validate({
        rules: {
            amount: {
                required: true,
                min: 1
            }
        },
        messages: {
            amount: {
                required: "請務必填寫金額",
                min: "請勿填寫負數金額"
            },
        },
        errorElement: 'span',
        errorPlacement: function (error, element) {
            error.addClass('invalid-feedback');
            element.closest('.form-group').append(error);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass('is-invalid');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass('is-invalid');
        }
    });
})