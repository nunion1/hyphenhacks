var myData;
var dataRead = false;
fetch('https://navy-scandalous-tilapia.glitch.me/api/profiles')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        myData = data;
        console.log("work")
        dataRead = true;
        loadFirst()
    })
    .catch(error => {
        console.log('Fetch error:', error);
    });
console.log("test")
  
// async function addData(name, description, classes, imageLink, phoneNumber, email){
// try {
//     const response = await fetch('https://navy-scandalous-tilapia.glitch.me/api/addProfile', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({name, description, classes, imageLink, phoneNumber, email})
//     });
//     const data = await response.json();
//     if(response.status === 200) {
//         console.log(data.message);
//     } else {
//         console.error('Error adding item:', data.message);
//     }
// } catch (error) {
//     console.error('Network error:', error);
// }
// }
// name, description, classes, imageLink, phoneNumber, email
async function addData(){ 
    let name = document.getElementById("userName").value
    let school = document.getElementById("school").value
    let description = document.getElementById("description").value
    let classes = []
    if (document.getElementById("englishBox").checked){
        classes.push("English")
    }
    if (document.getElementById("historyBox").checked){
        classes.push("History")
    }
    if (document.getElementById("mathBox").checked){
        classes.push("Math")
    }
    if (document.getElementById("spanishBox").checked){
        classes.push("Spanish")
    }
    if (document.getElementById("chineseBox").checked){
        classes.push("Chinese")
    }
    if (document.getElementById("frenchBox").checked){
        classes.push("French")
    }
    let imageLink = document.getElementById("imageLink").value
    let phoneNumber = document.getElementById("phoneNumber").value
    let email = document.getElementById("email").value
    try {
        const response = await fetch('https://navy-scandalous-tilapia.glitch.me/api/addProfile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, school, description, classes, imageLink, phoneNumber, email})
        });
        const data = await response.json();
        if(response.status === 200) {
            console.log(data.message);
        } else {
            console.error('Error adding item:', data.message);
        }
    } catch (error) {
        console.error('Network error:', error);
    }
    }
function myTest(){
    console.log("MYTEST")
}
let savedPeople = []
// let currentlyOn;
let currentlyOn=0;
async function loadFirst(){
    currentlyOn = 0;
    if (dataRead){
        let mdco = myData[currentlyOn]
        document.getElementById("nameEnd").innerHTML=mdco["name"]
        document.getElementById("schoolEnd").innerHTML=mdco["school"]
        document.getElementById("descriptionEnd").innerHTML=mdco["description"]
        let classesText = ""
        console.log(mdco["classes"].length)
        for (let i = 0; i < mdco["classes"].length; i++){

            if (i!=0){
                classesText+=", "
            }else{
                classesText+="I can tutor: "
            }
            classesText+=mdco["classes"][i]
        }
        document.getElementById("classesEnd").innerHTML=classesText
        // if (mdco["phoneNumber"]!=undefined){
        //     document.getElementById("numberEnd").innerHTML="Phone Number: "+mdco["phoneNumber"]
        // }
        // if (mdco["email"]!=undefined){
        //     document.getElementById("emailEnd").innerHTML="Email: "+mdco["email"]
        // }
    }
}
async function loadNext(){
    currentlyOn++
    
    if (dataRead){
        let mdco = myData[currentlyOn]
        document.getElementById("nameEnd").innerHTML=mdco["name"]
        document.getElementById("schoolEnd").innerHTML=mdco["school"]
        document.getElementById("descriptionEnd").innerHTML=mdco["description"]
        let classesText = ""
        console.log(mdco["classes"].length)
        for (let i = 0; i < mdco["classes"].length; i++){

            if (i!=0){
                classesText+=", "
            }else{
                classesText+="I can tutor: "
            }
            classesText+=mdco["classes"][i]
        }
        document.getElementById("classesEnd").innerHTML=classesText
    }
}

function saveCurrent(){
    let mdco = myData[currentlyOn]
    savedPeople.push([mdco["name"], mdco["phoneNumber"], mdco["email"]]);
    console.log(savedPeople)
    loadNext()
}