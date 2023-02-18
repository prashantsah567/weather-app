import './style.css';
import myImage from './assets/images/clear-day.jpg';

const input = document.getElementById('myInput');

//set background color
document.body.style.backgroundColor = "#94b8b8";

//using the imported image 
const img = new Image();
img.src = myImage;

input.addEventListener("keydown", (event) =>{
    if(event.key === "Enter"){
        getData();
        $(".hidden-part").show();
    }
});

async function getData() {
    try{   
        const cityName = input.value.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g,'');
        const fetchUrl = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=us&key=LJZYFMZ2G2GD9SU8MEHMYLXVL&contentType=json`,
        { mode: 'cors' });
        const data = await fetchUrl.json();
        console.log(data);

        //assigning all the data fields for current condition
        $("#condition").html(data.days[0].conditions);
        $("#address").html(data.resolvedAddress);
        $("#date").html(data.days[0].datetime);
        $("#latitude").html(data.latitude);
        $("#longitude").html(data.longitude);
        $("#temp").html(data.currentConditions.temp);
        $("#feelslike").html(data.currentConditions.feelslike);
        $("#sunrise").html(data.currentConditions.sunrise);
        $("#sunset").html(data.currentConditions.sunset);
        $("#humidity").html(data.currentConditions.humidity);
        $("#visibility").html(data.currentConditions.visibility);
        $("#windSpeed").html(data.currentConditions.windspeed);
        $("#weatherDesc").html(data.days[0].description);


        //api calls for background image change
        // const fetchImg = await fetch(`https://pixabay.com/api/?key=32846660-95d8df5d4035034b605954169&q=${data.days[0].icon}&image_type=photo`,{mod: 'cors'});
        // const imgData = await fetchImg.json();
        // console.log(imgData);
        // const imgURL = imgData.hits[Math.floor(Math.random() * 20)].largeImageURL;
        // document.body.setAttribute("style",`background-image:url(${imgURL}); background-size:cover; background-repeat:no-repeat;`);
    
        //setting custom image
        document.body.setAttribute("style",`background-image:url(${img.src}); background-size:cover; background-repeat:no-repeat;`);

    }catch(err){
        $("#errId").html("City not found");
    }  
}