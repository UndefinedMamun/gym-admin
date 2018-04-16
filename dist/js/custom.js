$(document).ready(function() {
    //Data Tables
    $('#example1').DataTable({
      dom: 'Bfrtip',
      buttons: [
          {
            extend: 'excel',
            text: 'Excel',
            exportOptions: {
                columns: 'th:not(:last-child)'
            }
          },
          {
            extend: 'copy',
            text: 'Copy',
            exportOptions: {
                columns: 'th:not(:last-child)'
            }
          },
          {
            extend: 'csv',
            text: 'CSV',
            exportOptions: {
                columns: 'th:not(:last-child)'
            }
          },
          {
            extend: 'pdf',
            text: 'PDF',
            exportOptions: {
                columns: 'th:not(:last-child)'
            }
          },
          {
            extend: 'print',
            text: 'Print',
            exportOptions: {
                columns: 'th:not(:last-child)'
            },
            customize: function ( win ) {
                $(win.document.body)
                    .prepend(
                        '<h4 style="position:absolute; right:0; bottom:0;">Developed by Microkodes</h4>'
                    );
            }
          }
      ]
    });

    //Date picker
    $('.datepicker').datepicker({
      autoclose: true
    });
    
    //Time Picker
    $('.timepicker').timepicker({
        showInputs: false
    });

    //Initialize Select2 Elements
    $('.select2').select2();


    //Billings client Behaviour
    $('#billings-client').on('change', function(e){
        if(e.target.value == 0)
            $('#client-info').css('display', 'none');
        else
            $('#client-info').css('display', 'block');
        
    })


    //Advanced Payment fields toggle
    $('#apCheckbox').change(function(e){
        if(this.checked)
            $('#advance-payments-ops').css('display', 'block');
        else
            $('#advance-payments-ops').css('display', 'none');
    });


    console.log('working')
})