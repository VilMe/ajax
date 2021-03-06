"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

	$('#get-fortune-button').on('click', () => {
		$.get('/fortune', (results) => {
			const fortune = results
			$('#fortune-text').html(fortune)
		});
	});
    // TODO: get the fortune and show it in the #fortune-text div
}


showFortune()



// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};
    console.log(formData)




    $('.btn-primary').on('click',() => { 

        $.post(url,formData, (results) => {
            const forecast = results
            console.log(forecast)
            $.get('#weather-info').html(forecast);
        });

    	// $.get('/weather.json', (results) => { 
    	// 	console.log(results)
    	// 	$('#weather-info').html(formData);
    	// });

    });

    // TODO: request weather with that URL and show the forecast in #weather-info
}


$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


