/* Author: 

*/

function required() 
{
    var input = document.forms["form"]["fname"].value;
    if (input == "")
    {
        alert("Fillm all fields");
        return false;
    }
    else
    {
        alert("You can proceed");
        return true;
    }
}






















