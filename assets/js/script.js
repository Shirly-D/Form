/* Author: 

*/

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





















// Print all possible words from phone number digits.
// For example if input number is 234, possible words which can be formed are (Alphabetical order):
// adg adh adi aeg aeh aei afg afh afi bdg bdh bdi beg beh bei bfg bfh bfi cdg cdh cdi ceg ceh cei cfg cfh cfi

var mobile = [ "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" ];
var num = [2, 3, 4];
var n = num.length;

function words (num, current_no, result, n)
{
    if (current_no == n)
    {
        document.write(result.join("") + "<br>")
        return;
    }
    for (var i = 0; i < mobile[num[current_no]].length; i++)
    {
        result.push(mobile[num[current_no]][i]);
        words(num, current_no + 1, result, n);
        result.pop();
        if(num[current_no] == 0 || num[current_no == 1])
        return
    }
}

function display_words(num, n)
{
    words(num, 0, [], n);
}

display_words(num, n);
























