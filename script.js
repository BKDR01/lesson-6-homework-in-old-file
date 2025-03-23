let apiUrl = 'https://ipinfo.io/json'
let Api = document.querySelector('#Api')
let org = document.querySelector('#org')
let hostname = document.querySelector('#hostname')
let City = document.querySelector('#City')
let region = document.querySelector('#region')
let country = document.querySelector('#country')
let timezone = document.querySelector('#timezone')
let loc = document.querySelector('#loc')




async function getData() {
    try {
       let response = await fetch(apiUrl)      
       let data = await response.json();
        console.log(data);


        Api.innerHTML = data.ip;
        org.innerHTML = data.org;
        hostname.innerHTML = data.hostname || 'N/A'; 
        City.innerHTML = data.city;
        region.innerHTML = data.region;
        country.innerHTML = data.country;
        timezone.innerHTML = data.timezone;
        loc.innerHTML = data.loc;

        


    } catch (error) {
        console.log(error);
        
    }
}

getData()