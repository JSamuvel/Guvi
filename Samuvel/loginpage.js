function validate()
{
    var name=document.getElementById("name");
    var password=document.getElementById("password");
    if(name.value.trim() ==""||password.value.trim() =="")
    {
        alert("No blank values allowed");
        return false;
    }
    else
    {
        true;
    }
}