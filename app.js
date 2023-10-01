var myData;
var dataRead = false;
var mainPage = false
console.log("1")
try{
    savedPeople = JSON.parse(localStorage.getItem("Saved People"))
    tmp=[]
    savedPeople = savedPeople.filter(function (v) {
        if (tmp.indexOf(v.toString()) < 0) {
            tmp.push(v.toString());
            return v;
        }
    });
}
catch{
    savedPeople=[]
}
// if (savedPeople==null){
    localSavedPeople = []
// }
console.log("SP",savedPeople)
// doFetch()
// function doFetch(){
console.log("started")
console.log("2")

if (window.location.pathname=="/index.html" || window.location.pathname==" /hyphenhacks/index.html" || window.location.pathname==" /hyphenhacks/" || window.location.pathname=="/hyphenhacks/index.html" || window.location.pathname=="/hyphenhacks/"){
    console.log("yay")
    mainPage = true;
}else{
    console.log("wrong")
}
function myEnable(){
    mainPage=true
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
    
}
console.log(window.location.pathname)
if (mainPage){
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
}
  
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
    if (name!=""){
    let school = document.getElementById("school").value
    let grade = document.getElementById("grade").value
    let description = document.getElementById("description").value
    let classes = []
    if (document.getElementById("englishBox").checked){
        classes.push("English")
    }
    if (document.getElementById("geometeryBox").checked){
        classes.push("Algebra 2")
    }
    
    if (document.getElementById("algebraBox").checked){
        classes.push("Geometry")
    }
    if (document.getElementById("precalculusBox").checked){
        classes.push("PreCalculus")
    }
    if (document.getElementById("calculusBox").checked){
        classes.push("Calculus")
    }
    if (document.getElementById("statsBox").checked){
        classes.push("Stats")
    }
    if (document.getElementById("biologyBox").checked){
        classes.push("Biology")
    }
    if (document.getElementById("chemistryBox").checked){
        classes.push("Chemistry")
    }
    if (document.getElementById("physicsBox").checked){
        classes.push("Physics")
    }
    if (document.getElementById("historyBox").checked){
        classes.push("History")
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
            body: JSON.stringify({name, school, grade, description, classes, imageLink, phoneNumber, email})
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
    document.getElementById("userName").value = ""
    // document.getElementById("grade").value = ""
    document.getElementById("school").value = ""
    document.getElementById("description").value = ""
    document.getElementById("imageLink").value = ""
    document.getElementById("phoneNumber").value = ""
    document.getElementById("englishBox").checked = false
    document.getElementById("geometeryBox").checked = false
    document.getElementById("algebraBox").checked = false
    document.getElementById("precalculusBox").checked = false
    document.getElementById("calculusBox").checked = false
    document.getElementById("statsBox").checked = false
    document.getElementById("biologyBox").checked = false
    document.getElementById("chemistryBox").checked = false
    document.getElementById("physicsBox").checked = false
    document.getElementById("historyBox").checked = false
    document.getElementById("spanishBox").checked = false
    document.getElementById("chineseBox").checked = false
    document.getElementById("frenchBox").checked = false
}else{
    console.log("stupid lol")
}
    }
function myTest(){
    console.log("MYTEST")
}
// let savedPeople = []
// let currentlyOn;
let currentlyOn=0;

async function loadFirst(){
    currentlyOn = 0;
    if (dataRead){
        let mdco = myData[currentlyOn]
        document.getElementById("nameEnd").innerHTML=mdco["name"]
        // var val = document.getElementById('imagename').value,
        mySrc = mdco["imageLink"]

        document.getElementById("imageEnd").src = mySrc;
        // document.getElementById("imageEnd").appendChild(img);
        document.getElementById("schoolEnd").innerHTML=mdco["school"]
        document.getElementById("gradeEnd").innerHTML=mdco["grade"]
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
async function loadNext(direction){
    currentlyOn++
    
    document.getElementById("personbox").classList.add("animateCard"+direction)
    setTimeout(()=>{
        document.getElementById("personbox").classList.remove("animateCard"+direction);
        console.log(dataRead)
        if (dataRead){
            let mdco = myData[currentlyOn]
            document.getElementById("nameEnd").innerHTML=mdco["name"]
    
            // console.log(mdco["imageLink"])
            mySrc = mdco["imageLink"]
    
            document.getElementById("imageEnd").src = mySrc;
            document.getElementById("schoolEnd").innerHTML=mdco["school"]
            document.getElementById("gradeEnd").innerHTML=mdco["grade"]
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
    
 } , 300);
    
   
}

function saveCurrent(){
    let mdco = myData[currentlyOn]
    localSavedPeople.push([mdco["name"], mdco["phoneNumber"], mdco["email"]]);
    console.log()
    localStorage.setItem("Saved People", JSON.stringify(localSavedPeople))
    loadNext("Right")
}

function loadMyMatches(){
    targetBox = document.getElementById("MyMatchesBox")
    myDiv = document.getElementById("containerDiv")
    console.log("b4",savedPeople)
    savedPeople=removeDuplicates(savedPeople)
    var tmp = [];

// savedPeople = savedPeople.filter(function (v) {
//     if (tmp.indexOf(v.toString()) < 0) {
//         tmp.push(v.toString());
//         return v;
//     }
// });
    // console.log("after",b)
    outputText = ""

    
      
      // Select the table's tbody
      const tbody = document.querySelector('#contactTable tbody');
      
      // Loop through the data array and add each data item as a row
      savedPeople.forEach(item => {
        const tr = document.createElement('tr');
        
        item.forEach(cellData => {
          const td = document.createElement('td');
          td.textContent = cellData;
          tr.appendChild(td);
        });
        
        tbody.appendChild(tr);
      });
}

function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}