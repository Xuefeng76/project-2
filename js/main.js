const myArray = JSON.parse(localStorage.getItem("accountData") || '[]');

function op() {

  let firstname = document.getElementById("fname").value;

  let lastname = document.getElementById("lname").value;
  let uEmail=document.getElementById("email").value;
  let password = document.getElementById("pwd").value;
  if (firstname != 0 && lastname != 0 && password != 0 && uEmail!=0) {
    if (searchByName(firstname) == 0) {
      console.log("have existed" + firstname);
      alert(firstname + " have existed");

    } else {
      const myfirstAc = new account(firstname, lastname,uEmail, password);
      myArray.push(myfirstAc);
      console.log(myArray);
      localStorage.setItem("accountData", JSON.stringify(myArray));
      //   console.log(localStorage.getItem("accountData").);
      alert("sign up succeed");
      document.getElementById("fname").value = null;
      document.getElementById("lname").value = null;
      document.getElementById("email").value=null;
      document.getElementById("pwd").value = null;
    }
  } else {
    alert("please enter sth");
  }




  /* 
   console.log(myfirstAc.firstName+myfirstAc.lastName+myfirstAc.password);  */
  /* console.log(document.getElementById("one").value+document.getElementById("two").value); */
}
function account(first, last,email, ps) {
  this.firstName = first;
  this.lastName = last;
  this.Email=email;
  this.password = ps;
}
function searchByName(name,email) {
  for (i = 0; i < myArray.length; i++) {
    if (myArray[i].firstName == name||myArray[i].Email==email) {
//store th i
      return 0;

      /* console.log("have existed");
            break; */
    }


    /* console.log("welcome"); */

  }
  return 1;
}

function Lop(){
  let Lguseremail=document.getElementById("Lemail").value;
  let Lgpassword=document.getElementById("Lpassword").value;
  if(Lguseremail!=0&&Lgpassword!=0){
    if(VerifyAccount(Lguseremail,Lgpassword)==0){
      alert("login successful");
      window.open("file:///C:/Users/baida/OneDrive/%E6%A1%8C%E9%9D%A2/web-projects/project%202/index.html","_blank");
      // var ii=localStorage.getItem('LogInAccount');
      // document.getElementById("reloadText").innerHTML=myArray[ii].firstName;
      
    }else{
      alert("Username or password is incorrect");

    }
  }else{
    alert("please enter sth");
  }
}
function VerifyAccount(email,password){
  for (i = 0; i < myArray.length; i++) {
    if(myArray[i].Email==email&&myArray[i].password==password){
      localStorage.setItem("LogInAccount", i);

      return 0;
    }
  }
  return 1;
}
function clearf(){
  // 移除所有
localStorage.clear();

}
function logout(){
  localStorage.removeItem('LogInAccount');
  location.reload();
}
