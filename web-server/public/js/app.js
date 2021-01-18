console.log('client side javascript file is loaded');

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
    })
})
fetch('http://localhost:3009/weather?address=boston').then((response) => {
    console.log(response, 'this is responseeee');
    response
    .clone()
    .json()
    .catch(() => response.text())
    .then((data) => {
        console.log(data);
    });
});

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    const methodA = () => {
        let promise = new Promise(function(resolve, reject) {
            // after 1 second signal that the job is finished with an error
            setTimeout(() => resolve("after 5 seconds"), 5000);
        });
        return promise;
    } 
    
    const methodB = () => {
        let promise = new Promise(function(resolve, reject) {

            // after 1 second signal that the job is finished with an error
            setTimeout(() => resolve("after 5 seconds"), 5000);
        });
        return promise;
    } 

    const checkIfNumber = (value, callback) => {
        if(!isNaN(value)){
            callback(null, 'Yes, this is a number')
        }else {
            callback('Failure', null)
        }
    }

    const checkIfNumberPromise = (value) => {
        return new Promise(function(resolve, reject) {
            if(!isNaN(value)){
                resolve('Yes, this is a number')
            }else {
                reject(new Error('Failure'))
            }
        });
    }

    fetch(`http://localhost:3009/weather?address=${location}`).then((response => {
        let err;
        console.log(response, 'response');
        response
        .clone()
        .json()
        .catch(() => response.text())
        .then((data) => {
            if(!data.location){
                messageOne.textContent = data;
            }else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        })

        methodA()
        .then(data => console.log('Method A :', data))

        methodB()
        .then(data => console.log('Method B :', data))

        checkIfNumber(10, (err, data) => {
            if(err) {
                console.log('Error', err);
            }else {
                console.log('Data', data)
            }
        });

        

        checkIfNumberPromise(10)
        .then(data => console.log('Promise Data', data))
        .catch(err => console.log('Promise Error', err))

    }));



});