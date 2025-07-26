function egg() {
    const currentTime = new Date().toDateString();
    alert(`Today's date is ${currentTime}`);
}


const userList = [
    { account: "123", pwd: "456" },
    { account: "user2", pwd: "password2" }
];

function LoginIn(){
        this.checkLogin = ()=>{
            const accountInput = document.getElementById("username").value;
            const pwdInput = document.getElementById("password").value;
            const checkInput = userList.find(({account, pwd}) => accountInput === account && pwdInput === pwd);
            if(checkInput){
                window.location.assign("main.html");
            } 
            else if(accountInput == ""){
                document.getElementById("checkPra2").style.visibility = "hidden";
                document.getElementById("password").style.border = "none";
                document.getElementById("checkPra1").style.visibility = "visible";
                document.getElementById("username").style.border = ".1rem solid rgb(202, 9, 9)";
            }
            else if(pwdInput == ""){
                document.getElementById("checkPra1").style.visibility = "hidden";
                document.getElementById("username").style.border = "none";
                document.getElementById("checkPra2").style.visibility = "visible";
                document.getElementById("password").style.border = ".1rem solid rgb(202, 9, 9)";
            }
            else {
                document.getElementById("password").style.border = "none";
                document.getElementById("username").style.border = "none";
                document.getElementById("checkPra1").style.visibility = "hidden";
                document.getElementById("checkPra2").style.visibility = "hidden";
                document.getElementById("checkPra3").style.visibility = "visible";
            }
        }
    }

const forLogin = new LoginIn();
