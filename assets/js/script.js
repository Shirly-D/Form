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
    thName.textContent = "Name";
    var thLname = document.createElement('th');
    thLname.textContent = "Last Name";
    var thGen = document.createElement('th');
    thGen.textContent = "Gender";
    var thAddress = document.createElement('th');
    thAddress.textContent = "Address";
    var thEdit = document.createElement('th');
    thEdit.textContent = "Edit";
    var thDelete = document.createElement('th');
    thDelete.textContent = "Delete";
    thRow.appendChild(thName);
    thRow.appendChild(thLname);
    thRow.appendChild(thGen);
    thRow.appendChild(thAddress);
    thRow.appendChild(thEdit);
    thRow.appendChild(thDelete);
    table.appendChild(thRow);

    
    for (var i = 0; i < detail.length; i++){
        var tr = document.createElement('tr');
        var fname = document.createElement('td');
        fname.textContent = detail[i].fname;
        tr.appendChild(fname);
        var lname = document.createElement('td');
        lname.textContent = detail[i].lname;
        tr.appendChild(lname);
        var gender = document.createElement('td');
        gender.textContent = detail[i].gender;
        tr.appendChild(gender);
        var address = document.createElement('td');
        address.textContent = detail[i].address;
        tr.appendChild(address);
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
















































