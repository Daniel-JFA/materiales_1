var jq = jQuery.noConflict();
function inicializaciones_generales(){
	M.AutoInit();
}

jq(document).ready(function(){
	inicializaciones_generales()
	inicializaciones()
	listeners()
});


function inicializaciones(){
  jq('.sidenav').sidenav();
	jq('.carousel.carousel-slider').carousel({
		fullWidth: true
	});
	var instance = M.Carousel.getInstance(jq("#carousel"));
	setInterval(()=>{
		instance.next()
	},8000);

	jq('input#input_text, textarea#mi_idea').characterCounter();
	jq('input#input_text, textarea#titulo_idea').characterCounter();
}




function listeners(){

};
