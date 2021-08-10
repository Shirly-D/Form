/* Author: 

*/

var form = document.getElementById('form');
form.addEventListener('submit', formSubmit);
var detail = [];

function formSubmit(event) {
    event.preventDefault();
    var fname = document.myForm.fname.value;
    var lname = document.myForm.lname.value;
    var male = document.myForm.rad_btn.value;
    var female = document.myForm.rad_btn.value;
    var gender = male ? male : female ? female : "";
    var address = document.myForm.address.value;
    var check = document.myForm.checkbox.checked;


    if (fname != "" && lname != "" && gender != "" && address != "" && check != "")
    {
        alert('Thank you...!');
        var obj = {
            fname : fname,
            lname : lname,
            gender : gender,
            address : address
        }

        if(isEdit) {
        detail[index] = obj;
        isEdit = false;

        }else {
            detail.push(obj);
        }
        
        // console.log(detail);
        document.getElementById('fname').value = "";
        document.getElementById('lname').value = "";
        document.getElementById('address').value = "";
        document.getElementById('check').checked = "";
        display();

    }
    else
    {
        if (fname == null || fname == ""){
            alert("First name can't be blank");
            return false;
        }else if (lname == null || lname == ""){
            alert("Last name can't be blank");
            return false;
        }else if (male == "" || female == ""){
            alert("Gender is not selected");
            return false;
        }else if (address == ""){
            alert("Address can't be empty");
            return false;
        }else if (check == ""){
            alert("Checkbox needs to be checked");
            return false;
        }
    }

}

var index = -1;
var isEdit = false;

function display() {
    var body =  document.getElementsByTagName('body')[0];
    var tableElement = body.getElementsByTagName('table')  
    if(tableElement && tableElement.length){
        body.removeChild(tableElement[0]);
    }
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
        var btnEdit = document.createElement('button');
        btnEdit.textContent = "Edit";
        btnEdit.classList.add('editButton')
        var tdEdit = document.createElement('td');
        tdEdit.appendChild(btnEdit);
        btnEdit.addEventListener('click', function(e){
            // console.log(document.querySelector('.editButton'));
            var eBtn = document.querySelectorAll('.editButton');
            
            for(var x = 0; x < eBtn.length; x++){
                isEdit = true;
               if(e.target == eBtn[x]) {
                   index = x
               } 
            }
            
            document.myForm.fname.value = detail[index].fname;
            document.myForm.lname.value = detail[index].lname;
            document.myForm.rad_btn.value = detail[index].male;
            document.myForm.rad_btn.value = detail[index].female;
            document.myForm.address.value = detail[index].address;
            document.myForm.checkbox.checked = detail[index].check;
        })

        tr.appendChild(tdEdit);
        var btnDelete = document.createElement('button');
        btnDelete.textContent = "Delete";
        btnDelete.classList.add('del_btn');
        var tdDelete = document.createElement('td');
        tdDelete.appendChild(btnDelete);
        btnDelete.addEventListener('click', function(e){

            if (this == e.target){
                e.target.parentNode.parentNode.remove();
                }
        })
        tr.appendChild(tdDelete);
        table.appendChild(tr);
        
    }
    body.appendChild(table);

 }


function cancel() {
    var can = document.getElementById('cancel');
    can.removeEventListener('reset', cancel);  
    isEdit = false;
}
cancel();































































