function idCard(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    var address = document.getElementById("address").value;

    var fullName = firstName + " " + lastName;


    document.getElementById("postFullName").innerHTML = fullName;
    document.getElementById("postAddress").innerHTML = "Address: " + address;


    var age = parseInt(document.getElementById("age").value);
    var phoneNumber = parseInt(document.getElementById("phoneNumber").value);

    var numberArray = [];
    numberArray.push(age, phoneNumber);

    for (i=0; i < numberArray.length; i++){
        if(numberArray[i] <= 100){
            document.getElementById("postAge").innerHTML = "Age: " + age;
        } 
        else if(numberArray[i] > 100){

            document.getElementById("postPhoneNumber").innerHTML = "Phone: " + phoneNumber;
        }
    }
}