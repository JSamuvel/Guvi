function validatename()
{
    var name=document.getElementById("name");
    var regxname=/^[a-zA-Z]+$/;
    if(name.match(regxname))
    {
        return false;
    }
    else
    {
        return true;
    }
}
function validateemail()
{
    var email=document.getElementById("email");
    var regxemail=/^[a-zA-Z0-9]+$/
    if(email.match(regxemail))
    {
        return false;
    }
    else
    {
        return true;
    }
}
function validatepassword()
{
    var password=document.getElementById("password");
    var regxpassword="^(.{0,6}|[^0,9]|[^A-Z]|[^a-z]|[a-zA-Z0-9])$";
    if(password.match(regxpassword))
    {
        return false;
    }
    else
    {
        return true;
    }
}
function validateconfrimpassword()
{
    var password=document.getElementById("password");
    var confrimpassword=document.getElementById("confrimpassword");
    
    if(password!=confrimpassword)
    {
        return false;
    }
    else
    {
        alert("Register Successfully");
        return true;
    }
}
function validate()
{
    if(validatename() && validateemail() && validatepassword() && validateconfrimpassword())
    alert("Register Successfully");
    window.open("loginpage.html");
    return true;
}