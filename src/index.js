import './style.css';
import clearDay from './assets/images/clear-day.jpg';
import clearNight from './assets/images/clear-night.jpg';
import rain from './assets/images/rain.jpg';
import snow from './assets/images/snow.jpg';
import cloudy from './assets/images/cloudy-day.jpg';
import overcast from './assets/images/overcast.jpg';
import fogg from './assets/images/fogg.jpg';

const input = document.getElementById('myInput');

//set background color
document.body.style.backgroundColor = "#94b8b8";

//handling the input value
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

        //setting custom image
        const iconVal = data.days[0].icon;
        const img = new Image();
        if(iconVal=="clear-day")
            img.src = clearDay;
        else if(iconVal=="clear-night")
            img.src = clearNight;
        else if(iconVal=="rain")
            img.src = rain;
        else if(iconVal=="snow")
            img.src = snow;
        else if(iconVal="cloudy")
            img.src = cloudy;
        else if(iconVal="overcast")
            img.src = overcast;
        else if(iconVal="fogg")
            img.src = fogg;
        //console.log(iconVal);
        document.body.setAttribute("style",`background-image:url(${img.src}); background-size:cover; background-repeat:no-repeat;background-attachment: fixed;`);


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
    
        //now i wanted to add the 14 days forcast result
        //not working for now
        // const container = document.createElement('div');
        // container.style.display = 'flex';
        // container.style.flexWrap = 'wrap';
        // container.style.justifyContent = 'center';
        // container.style.alignItems = 'center';
        // container.style.position = 'fixed';
        // container.style.bottom = '0';
        // container.style.width = '100%';
        // document.body.appendChild(container);

        // for (let i = 1; i <= 14; i++) {
        //     const item = document.createElement('div');
        //     item.textContent = 
        //     `data.days[${i}].datetime,
        //     data.days[${i}].temp,
        //     data.days[${i}].tempmax,
        //     data.days[${i}].tempmin
        //     `;
        //     item.style.width = 'calc(100% / 7 - 20px)';
        //     item.style.height = '100px';
        //     item.style.margin = '10px';
        //     item.style.backgroundColor = 'gray';
        //     container.appendChild(item);
        // }

        //for day-1
        $("#day-1").html(data.days[1].datetime);
        $("#day-1-temp").html(data.days[1].temp);
        $("#day-1-max").html(data.days[1].tempmax);
        $("#day-1-min").html(data.days[1].tempmin);
        
        //for day-2
        $("#day-2").html(data.days[2].datetime);
        $("#day-2-temp").html(data.days[2].temp);
        $("#day-2-max").html(data.days[2].tempmax);
        $("#day-2-min").html(data.days[2].tempmin);

        //for day-3
        $("#day-3").html(data.days[3].datetime);
        $("#day-3-temp").html(data.days[3].temp);
        $("#day-3-max").html(data.days[3].tempmax);
        $("#day-3-min").html(data.days[3].tempmin);

        //for day-4
        $("#day-4").html(data.days[4].datetime);
        $("#day-4-temp").html(data.days[4].temp);
        $("#day-4-max").html(data.days[4].tempmax);
        $("#day-4-min").html(data.days[4].tempmin);

        //for day-5
        $("#day-5").html(data.days[5].datetime);
        $("#day-5-temp").html(data.days[5].temp);
        $("#day-5-max").html(data.days[5].tempmax);
        $("#day-5-min").html(data.days[5].tempmin);

        //for day-6
        $("#day-6").html(data.days[6].datetime);
        $("#day-6-temp").html(data.days[6].temp);
        $("#day-6-max").html(data.days[6].tempmax);
        $("#day-6-min").html(data.days[6].tempmin);

        //for day-7
        $("#day-7").html(data.days[7].datetime);
        $("#day-7-temp").html(data.days[7].temp);
        $("#day-7-max").html(data.days[7].tempmax);
        $("#day-7-min").html(data.days[7].tempmin);

        //for day-8
        $("#day-8").html(data.days[8].datetime);
        $("#day-8-temp").html(data.days[8].temp);
        $("#day-8-max").html(data.days[8].tempmax);
        $("#day-8-min").html(data.days[8].tempmin);

        //for day-9
        $("#day-9").html(data.days[9].datetime);
        $("#day-9-temp").html(data.days[9].temp);
        $("#day-9-max").html(data.days[9].tempmax);
        $("#day-9-min").html(data.days[9].tempmin);

        //for day-10
        $("#day-10").html(data.days[10].datetime);
        $("#day-10-temp").html(data.days[10].temp);
        $("#day-10-max").html(data.days[10].tempmax);
        $("#day-10-min").html(data.days[10].tempmin);

        //for day-11
        $("#day-11").html(data.days[11].datetime);
        $("#day-11-temp").html(data.days[11].temp);
        $("#day-11-max").html(data.days[11].tempmax);
        $("#day-11-min").html(data.days[11].tempmin);

        //for day-12
        $("#day-12").html(data.days[12].datetime);
        $("#day-12-temp").html(data.days[12].temp);
        $("#day-12-max").html(data.days[12].tempmax);
        $("#day-12-min").html(data.days[12].tempmin);

        //for day-13
        $("#day-13").html(data.days[13].datetime);
        $("#day-13-temp").html(data.days[13].temp);
        $("#day-13-max").html(data.days[13].tempmax);
        $("#day-13-min").html(data.days[13].tempmin);

        //for day-14
        $("#day-14").html(data.days[14].datetime);
        $("#day-14-temp").html(data.days[14].temp);
        $("#day-14-max").html(data.days[14].tempmax);
        $("#day-14-min").html(data.days[14].tempmin);

    }catch(err){
        $("#errId").html("Something wrong");
    }  
}