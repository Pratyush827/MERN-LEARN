//promise 

function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "John Doe" };
            resolve(data);
        }, 2000);
    });
}
getData()
    .then(data => {
        console.log("Data received:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });