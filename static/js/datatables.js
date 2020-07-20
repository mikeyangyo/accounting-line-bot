$(document).ready(function () {
    const datatable = $('#datatable');
    datatable.each((index, element) => {
        const table = $(element).DataTable({
            bProcessing: true,
            bServerSide: true,
            bjQueryUI: true,
            searching: false,
            ordering: false,
            lengthChange: false,
            paging: false,
            info: false,
            language: {
                "decimal": "",
                "emptyTable": "無資料",
                "info": "顯示第 _START_ 至 _END_ 項結果，共 _TOTAL_ 項",
                "infoEmpty": "顯示第 0 至 0 項結果，共 0 項",
                "infoFiltered": "(從 _MAX_ 項結果中過濾)",
                "infoPostFix": "",
                "thousands": ",",
                "lengthMenu": "顯示 _MENU_ 項結果",
                "loadingRecords": "載入中...",
                "processing": "處理中...",
                "search": "搜尋:",
                "zeroRecords": "沒有符合的結果",
                "paginate": {
                    "first": "第一頁",
                    "last": "最後一頁",
                    "next": "下一頁",
                    "previous": "上一頁"
                },
                "aria": {
                    "sortAscending": ": 升冪排列",
                    "sortDescending": ": 降冪排列"
                }
            },
            sAjaxSource: "/get_records",
            columns: [
                { type: "date", className: 'text-center' },
                { type: "string", className: 'text-center' },
                { type: "string", className: 'text-center' },
                { type: "num-fmt", className: 'text-center' }
            ],
            fnServerParams: function (aoData) {
                aoData.push(
                    { "name": "start_date", "value": $('#filter_start_date').val() },
                    { "name": "end_date", "value": $('#filter_end_date').val() },
                );
            },
        });
        $('#filter_date').on('apply.daterangepicker', function (ev, picker) {
            $("#filter_start_date").val(picker.startDate.format());
            console.log($("#filter_start_date").val())
            $("#filter_end_date").val(picker.endDate.format());
            console.log($("#filter_end_date").val())
            table.draw();
        });
    })
});