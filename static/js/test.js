
function initializeLiff(myLiffId) {
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            // start to use LIFF's api
            initializeApp();
        })
        .catch((err) => {
        });
}

initializeLiff('1654464072-6pdBbdmn');

$("#create_record_form").submit(function (event) {
    if (!liff.isInClient()) {
        alert("請用 line app 造訪此網站");
    } else if ($('#create_record_form').valid()) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxhIOar8g2X5uc8jnfPs2as_vvdDf-WW0h-tSeyD5cGwOQDJ-9t/exec",
            type: "POST",
            data: {
                "amount": parseInt($('#amount').val()),
                "description": $('#description').val(),
                "type": parseInt($("#type option:selected").val())
            }
        })
        liff.sendMessages([{
            'type': 'text',
            'text': "記帳完畢"
        }]).then(function () {
            window.alert('Message sent');
        }).catch(function (error) {
            window.alert('Error sending message: ' + error);
        });
        liff.closeWindow();
    }
});
