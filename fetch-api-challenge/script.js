/**
 * - show loader
 * - display data
 * - change background
 */





function fetchUser (){
    showSpinner()
    fetch('https://api.randomuser.me/')
    .then(res => res.json())
    .then(data => {
        hideSpinner()
        console.log('Data: ', data);
        displayUser(data.results[0]);

    })
    .catch(error => {
        hideSpinner()
        console.log('Error: ', error);
    })
}
function displayUser(user){
    let divUser = document.querySelector('#user')
    document.body.style.backgroundColor = user.gender === 'male' ? 'steelBlue' : 'maroon'

    divUser.innerHTML = `
     <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src=${user.picture.medium}
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span> ${user.name.title} ${user.name.first} ${user.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.location.country}-${user.location.state}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
            </div>
          </div>
        </div>
    `;
}

function showSpinner(){
    document.querySelector('.spinner').style.display = 'block'
}


function hideSpinner(){
    document.querySelector('.spinner').style.display = 'none'
}






document.getElementById('generate').addEventListener('click', fetchUser)