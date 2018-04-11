$(document).ready(function() {
    //Data Tables
    $('#example1').DataTable({
      dom: 'Bfrtip',
      buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print'
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


    //Advanced Payment fields toggle
    $('#apCheckbox').change(function(e){
        if(this.checked)
            $('#advance-payments-ops').css('display', 'block');
        else
            $('#advance-payments-ops').css('display', 'none');
    });


    console.log('working')
})