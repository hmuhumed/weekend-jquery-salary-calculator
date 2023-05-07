$(document).ready(onReady) 

function onReady (){
    console.log('Here we gooooo!!!')
    $('#submit-btn').on('click' , submitHandle);
    $('#t-body').on('click' , '.erase' , deleteButton);
    
}

let totalSalary = 0 ;




function submitHandle(event) {
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let idNumber = $('#id-number').val();
    let employeeTitle = $('#employee-title').val();
    let annualSalary = $('#annual-salary').val();
    
    
    event.preventDefault();

    $('#t-body').append(`
    <tr>
    <td>
        ${firstName}
    </td>
    <td>
        ${lastName}
    </td>
    <td>
        ${employeeTitle}
    </td>
    <td>
        ${idNumber}
    </td>
    <td>
        ${annualSalary}
         
    </td>
    <td>
        <button class= "erase">Delete</button>
    </tr>`)

    // Emptying out input text after submit is clicked
     $('#first-name').val('');
     $('#last-name').val('');
     $('#id-number').val('');
     $('#employee-title').val('');
     $('#annual-salary').val('');


    totalSalary+=Math.round(annualSalary / 12);
    $('#tMonthly').text(totalSalary);
    if(totalSalary > 20000) {
        $('#totalMonthlyS').css( 'background-color' , 'red' )    
    } else if(totalSalary < 20000) {
        $('#totalMonthlyS').css( 'background-color' , 'green' )
    }
};

function deleteButton(){
    $(this).closest('tr').remove();
}
