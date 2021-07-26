/* Author: 

*/

var form = document.getElementById('form')
form.addEventListener('submit', function(event) {
    event.preventDefault();

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var gender = document.getElementsByName('rad_btn');
    for (var i = 1; i < gender.length; i++)
    {
        if (gender[i].checked)
        {
            document.getElementById('male').value;
            document.getElementById('female').value;
        }
    }
    var address = document.getElementById('address').value;
    var check = document.getElementById('check').value;
})


// function required() 
// {
//     var input = document.forms["forms"]["fname"].value;
    
//     if (input == "")
//     {
//         alert("Fillm all fields");
//         return false;
//     }
//     else
//     {
//         alert("You can proceed");
//         return true;
//     }
// }


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

// var table = document.createElement('table');
// var thead = document.createElement('thead');
// var tbody = document.createElement('tbody');

// table.appendChild(thead);
// table.appendChild(tbody);
// document.getElementsById(body).appendChild(table);




















// Print all possible words from phone number digits.
// For example if input number is 234, possible words which can be formed are (Alphabetical order):
// adg adh adi aeg aeh aei afg afh afi bdg bdh bdi beg beh bei bfg bfh bfi cdg cdh cdi ceg ceh cei cfg cfh cfi

// var mobile = [ "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" ];
// var num = [2, 3, 4];
// var n = num.length;

// function words (num, current_no, result, n)
// {
//     if (current_no == n)
//     {
//         document.write(result.join("") + "<br>")
//         return;
//     }
//     for (var i = 0; i < mobile[num[current_no]].length; i++)
//     {
//         result.push(mobile[num[current_no]][i]);
//         words(num, current_no + 1, result, n);
//         result.pop();
//         if(num[current_no] == 0 || num[current_no == 1])
//         return
//     }
// }

// function display_words(num, n)
// {
//     words(num, 0, [], n);
// }

// display_words(num, n);
























