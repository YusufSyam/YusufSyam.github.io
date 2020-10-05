var account = [
    {
        username: "html@gmail.com",
        password: "1234"
    }
]

function checkUser() {
    let validated = false
    var username = document.getElementById("user-email").value
    var password = document.getElementById("user-password").value

    for (i = 0; i < account.length; i++) {
        if (username == account[i].username && password == account[i].password) {
            validated = !validated
            break
        }
        
    }

    if (validated == true) {
        window.location.href = "www.google.com"
    } else{
        alert("Incorrect email or password")
    }
}