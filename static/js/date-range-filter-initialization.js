$(document).ready(function () {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59);
    $("#filter_start_date").val(moment(firstDay).format());
    $("#filter_end_date").val(moment(lastDay).format());

    $('#filter_date').daterangepicker(
        {
            startDate: firstDay,
            endDate: lastDay,
            locale: {
                "format": "YYYY/MM/DD",
                "separator": " - ",
                "applyLabel": "確認",
                "cancelLabel": "取消",
                "fromLabel": "從",
                "toLabel": "到",
                "customRangeLabel": "Custom",
                "daysOfWeek": [
                    "日",
                    "一",
                    "二",
                    "三",
                    "四",
                    "五",
                    "六"
                ],
                "monthNames": [
                    "一月",
                    "二月",
                    "三月",
                    "四月",
                    "五月",
                    "六月",
                    "七月",
                    "八月",
                    "九月",
                    "十月",
                    "十一月",
                    "十二月"
                ],
            }
        }
    );
})