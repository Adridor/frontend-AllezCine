function myclick(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    alert(firstname + ' ' + lastname + '\n' + email + '\n' + subject + '\n' + message);
    return false; //do not submit the form
}
