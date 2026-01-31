
/**
 * - show loader
 * - display data
 * - Fetch api error handling - inside the first then res object
 */
function fetchUser (){
    showSpinner()
    fetch('https://randomuser.me/api/')
    .then(res => {
        if(!res.ok){ //fetch api only catches the network error, so its a good practise to check for http status code here, but with axio lib it handles it on ctch block
            throw new Error('Something went wrong');
        }
        return res.json();
    })
    .then(data => {
        hideSpinner()
        console.log('Data: ', data);
        displayUser(data.results[0]);

    })
    .catch(error => {
        hideSpinner()
        console.log('Error is: ', error);
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