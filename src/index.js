const input = document.getElementById('myInput');
document.body.style.backgroundColor = "#94b8b8";

input.addEventListener("keydown", (event) =>{
    if(event.key === "Enter"){
        getData();
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
        $("#condition").html(data.currentConditions.conditions);
        $("#address").html(data.resolvedAddress);
        $("#time").html(data.currentConditions.datetime);
        $("#latitude").html(data.latitude);
        $("#longitude").html(data.longitude);
        $("#temp").html(data.currentConditions.feelslike);
        $("#humidity").html(data.currentConditions.humidity);
        $("#weatherDesc").html(data.description);
        //for day-1
        $("#temp-max").html(data.days[0].feelslikemax);
        $("#temp-min").html(data.days[0].feelslikemin);
        
        
        //api calls for background image change
        const fetchImg = await fetch(`https://pixabay.com/api/?key=32846660-95d8df5d4035034b605954169&q=${data.days[0].icon}&image_type=photo`,{mod: 'cors'});
        const imgData = await fetchImg.json();
        console.log(imgData);
        const imgURL = imgData.hits[Math.floor(Math.random() * 20)].largeImageURL;
        document.body.setAttribute("style",`background-image:url(${imgURL}); background-size:cover; background-repeat:no-repeat;`);
    
    }catch(err){
        $("#errId").html("City not found");
    }  
}