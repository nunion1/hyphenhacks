fetch('https://navy-scandalous-tilapia.glitch.me/api/items')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log("work")
    })
    .catch(error => {
        console.log('Fetch error:', error);
    });
console.log("test")

addData("myNameIs", "myDescriptionIs", "wee")
  
async function addData(name, description, classes){
try {
    const response = await fetch('https://navy-scandalous-tilapia.glitch.me/api/addItem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, description, classes})
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