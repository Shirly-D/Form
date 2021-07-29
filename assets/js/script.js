/* Author: 

*/

var form = document.getElementById('form');
form.addEventListener('submit', formSubmit);
var detail = [];

function formSubmit(event) {
    event.preventDefault();
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var male = document.getElementById('male').value;
    var female = document.getElementById('female').value;
    var gender = male ? male : female ? female : "";
    var address = document.getElementById('address').value;
    var check = document.getElementById('check').checked;

    if (fname != "" && lname != "" && gender != "" && address != "" && check != "")
    {
        alert('Thank you...!');
        console.log(fname, lname, gender, address, check);

        var obj = {
            fname : fname,
            lname : lname,
            gender : gender,
            address : address
        }
        detail.push(obj);
        // console.log(detail);
        display();

    }
    else
    {
        alert('Please fill all fields..');
    }


}

function display() {
    var table = document.createElement('table');
    var thRow = document.createElement('tr');
    var thName = document.createElement('th');
    thName.textContent="Name";
    var thLname = document.createElement('th');
    var thGen = document.createElement('th');
    var thAddress = document.createElement('th');
    var thEdit = document.createElement('th');
    var thDelete = document.createElement('th');
     thRow.appendChild(thName);
    table.appendChild(thRow);


    for (var i = 0; i < detail.length; i++){
        var tr = document.createElement('tr');
        var fname = document.createElement('td');
        fname.textContent=detail[i].fname;
        tr.appendChild(fname);
        lname = detail[i].lname;
        gender = detail[i].gender;
        address= detail[i].address;
        table.appendChild(tr);
    }
    document.getElementsByTagName('body')[0].appendChild(table);
}








// function cancel() {
//     var a;
//     var b = confirm("Are you sure..?");
//     if (b == true) {
//         a = "abc";
//     }
//     else
//     {
//         a = "xyz";
//     }
//     document.getElementById("cancel").innerHTML = a;
// }
















































