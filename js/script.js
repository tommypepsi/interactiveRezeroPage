var i=1;
var keys = {};
var time = false;
var time2 = false;
var timeout;
var w = window.innerWidth;
var h = window.innerHeight;
var down = h/2-48;
var left = w/2-32;
var porte1;
var porte2;
var porte3;
var porte4;
var porte5;
var porte6;
var aniPorte1 = false;
var aniPorte11 = false;
var aniPorte2 = false;
var aniPorte22 = false;
var aniPorte3 = false;
var aniPorte33 = false;
var aniPorte4 = false;
var aniPorte44 = false;
var aniPorte5 = false;
var aniPorte55 = false;
var aniPorte6 = false;
var aniPorte66 = false;
var animation = false;
var beaFirstAnimFinish = false;
var doorEntered = false;
var wallHit = false;
var wallHit2 = false;
var doorOpened = false;
var contenuStarted = false;
var delaiContenu = false;

var playerPos;
var fired = false;

function game()
{   
	if(document.getElementById("bubble").style.display == "none")
	{
		var instruc = document.getElementsByClassName("instruction")
		for(var i = 0; i < instruc.length; i++)
		{
			
			instruc[i].style.display = "none";
		}
	}


	var Width = document.getElementById("contenuEmilia").offsetWidth;
	var Height = document.getElementById("contenuEmilia").offsetHeight;
	var contenuEmilia = {up: $("#contenuEmilia").offset().top, left: $("#contenuEmilia").offset().left, right: $("#contenuEmilia").offset().left + Width, bottom: $("#contenuEmilia").offset().top + Height};
	
	var Width = document.getElementById("contenuPack").offsetWidth;
	var Height = document.getElementById("contenuPack").offsetHeight;
	var contenuPack = {up: $("#contenuPack").offset().top, left: $("#contenuPack").offset().left, right: $("#contenuPack").offset().left + Width, bottom: $("#contenuPack").offset().top + Height};
	
	var Width = document.getElementById("contenuBeatrice").offsetWidth;
	var Height = document.getElementById("contenuBeatrice").offsetHeight;
	var contenuBeatrice = {up: $("#contenuBeatrice").offset().top, left: $("#contenuBeatrice").offset().left, right: $("#contenuBeatrice").offset().left + Width, bottom: $("#contenuBeatrice").offset().top + Height};
	
	var Width = document.getElementById("contenuElsa").offsetWidth;
	var Height = document.getElementById("contenuElsa").offsetHeight;
	var contenuElsa = {up: $("#contenuElsa").offset().top, left: $("#contenuElsa").offset().left, right: $("#contenuElsa").offset().left + Width, bottom: $("#contenuElsa").offset().top + Height};
	
	var Width = document.getElementById("contenuRam").offsetWidth;
	var Height = document.getElementById("contenuRam").offsetHeight;
	var contenuRam = {up: $("#contenuRam").offset().top, left: $("#contenuRam").offset().left, right: $("#contenuRam").offset().left + Width, bottom: $("#contenuRam").offset().top + Height};
	
	var Width = document.getElementById("contenuRem").offsetWidth;
	var Height = document.getElementById("contenuRem").offsetHeight;
	var contenuRem = {up: $("#contenuRem").offset().top, left: $("#contenuRem").offset().left, right: $("#contenuRem").offset().left + Width, bottom: $("#contenuRem").offset().top + Height};
	
	var Width = document.getElementById("contenuReinhard").offsetWidth;
	var Height = document.getElementById("contenuReinhard").offsetHeight;
	var contenuReinhard = {up: $("#contenuReinhard").offset().top, left: $("#contenuReinhard").offset().left, right: $("#contenuReinhard").offset().left + Width, bottom: $("#contenuReinhard").offset().top + Height};
	
	var Width = document.getElementById("contenuRom").offsetWidth;
	var Height = document.getElementById("contenuRom").offsetHeight;
	var contenuRom = {up: $("#contenuRom").offset().top, left: $("#contenuRom").offset().left, right: $("#contenuRom").offset().left + Width, bottom: $("#contenuRom").offset().top + Height};
	
	var Width = document.getElementById("contenuRoswaal").offsetWidth;
	var Height = document.getElementById("contenuRoswaal").offsetHeight;
	var contenuRoswaal = {up: $("#contenuRoswaal").offset().top, left: $("#contenuRoswaal").offset().left, right: $("#contenuRoswaal").offset().left + Width, bottom: $("#contenuRoswaal").offset().top + Height};
	
	var Width = document.getElementById("contenuFelt").offsetWidth;
	var Height = document.getElementById("contenuFelt").offsetHeight;
	var contenuFelt = {up: $("#contenuFelt").offset().top, left: $("#contenuFelt").offset().left, right: $("#contenuFelt").offset().left + Width, bottom: $("#contenuFelt").offset().top + Height};
	
	var Width = document.getElementById("contenuAnastasia").offsetWidth;
	var Height = document.getElementById("contenuAnastasia").offsetHeight;
	var contenuAnastasia = {up: $("#contenuAnastasia").offset().top, left: $("#contenuAnastasia").offset().left, right: $("#contenuAnastasia").offset().left + Width, bottom: $("#contenuAnastasia").offset().top + Height};
	
	var Width = document.getElementById("contenuCrusch").offsetWidth;
	var Height = document.getElementById("contenuCrusch").offsetHeight;
	var contenuCrusch = {up: $("#contenuCrusch").offset().top, left: $("#contenuCrusch").offset().left, right: $("#contenuCrusch").offset().left + Width, bottom: $("#contenuCrusch").offset().top + Height};
	
	var Width = document.getElementById("contenuFelix").offsetWidth;
	var Height = document.getElementById("contenuFelix").offsetHeight;
	var contenuFelix = {up: $("#contenuFelix").offset().top, left: $("#contenuFelix").offset().left, right: $("#contenuFelix").offset().left + Width, bottom: $("#contenuFelix").offset().top + Height};
	
	var Width = document.getElementById("contenuPriscilla").offsetWidth;
	var Height = document.getElementById("contenuPriscilla").offsetHeight;
	var contenuPriscilla = {up: $("#contenuPriscilla").offset().top, left: $("#contenuPriscilla").offset().left, right: $("#contenuPriscilla").offset().left + Width, bottom: $("#contenuPriscilla").offset().top + Height};
	
	var Width = document.getElementById("contenuSubaru").offsetWidth;
	var Height = document.getElementById("contenuSubaru").offsetHeight;
	var contenuSubaru = {up: $("#contenuSubaru").offset().top, left: $("#contenuSubaru").offset().left, right: $("#contenuSubaru").offset().left + Width, bottom: $("#contenuSubaru").offset().top + Height};
	
	var Width = document.getElementById("contenuWilhelm").offsetWidth;
	var Height = document.getElementById("contenuWilhelm").offsetHeight;
	var contenuWilhelm = {up: $("#contenuWilhelm").offset().top, left: $("#contenuWilhelm").offset().left, right: $("#contenuWilhelm").offset().left + Width, bottom: $("#contenuWilhelm").offset().top + Height};

	var Width = document.getElementById("contenuMainScreen").offsetWidth;
	var Height = document.getElementById("contenuMainScreen").offsetHeight;
	var contenuMainScreen = {up: $("#contenuMainScreen").offset().top, left: $("#contenuMainScreen").offset().left, right: $("#contenuMainScreen").offset().left + Width, bottom: $("#contenuMainScreen").offset().top + Height};
	
	var Width = document.getElementById("webNovel").offsetWidth;
	var Height = document.getElementById("webNovel").offsetHeight;
	var webNovel = {up: $("#webNovel").offset().top, left: $("#webNovel").offset().left, right: $("#webNovel").offset().left + Width, bottom: $("#webNovel").offset().top + Height};
	
	var Width = document.getElementById("lightNovel").offsetWidth;
	var Height = document.getElementById("lightNovel").offsetHeight;
	var lightNovel = {up: $("#lightNovel").offset().top, left: $("#lightNovel").offset().left, right: $("#lightNovel").offset().left + Width, bottom: $("#lightNovel").offset().top + Height};
	
	var Width = document.getElementById("manga").offsetWidth;
	var Height = document.getElementById("manga").offsetHeight;
	var manga = {up: $("#manga").offset().top, left: $("#manga").offset().left, right: $("#manga").offset().left + Width, bottom: $("#manga").offset().top + Height};
	
	var Width = document.getElementById("anime").offsetWidth;
	var Height = document.getElementById("anime").offsetHeight;
	var anime = {up: $("#anime").offset().top, left: $("#anime").offset().left, right: $("#anime").offset().left + Width, bottom: $("#anime").offset().top + Height};
	
	var Width = document.getElementById("episodes1").offsetWidth;
	var Height = document.getElementById("episodes1").offsetHeight;
	var episode1 = {up: $("#episodes1").offset().top, left: $("#episodes1").offset().left, right: $("#episodes1").offset().left + Width, bottom: $("#episodes1").offset().top + Height};
	
	var Width = document.getElementById("episodes2").offsetWidth;
	var Height = document.getElementById("episodes2").offsetHeight;
	var episode2 = {up: $("#episodes2").offset().top, left: $("#episodes2").offset().left, right: $("#episodes2").offset().left + Width, bottom: $("#episodes2").offset().top + Height};
	
	var Width = document.getElementById("episodes3").offsetWidth;
	var Height = document.getElementById("episodes3").offsetHeight;
	var episode3 = {up: $("#episodes3").offset().top, left: $("#episodes3").offset().left, right: $("#episodes3").offset().left + Width, bottom: $("#episodes3").offset().top + Height};
	
	var Width = document.getElementById("episodes4").offsetWidth;
	var Height = document.getElementById("episodes4").offsetHeight;
	var episode4 = {up: $("#episodes4").offset().top, left: $("#episodes4").offset().left, right: $("#episodes4").offset().left + Width, bottom: $("#episodes4").offset().top + Height};
	
	var Width = document.getElementById("episodes5").offsetWidth;
	var Height = document.getElementById("episodes5").offsetHeight;
	var episode5 = {up: $("#episodes5").offset().top, left: $("#episodes5").offset().left, right: $("#episodes5").offset().left + Width, bottom: $("#episodes5").offset().top + Height};
	
	var Width = document.getElementById("episodes6").offsetWidth;
	var Height = document.getElementById("episodes6").offsetHeight;
	var episode6 = {up: $("#episodes6").offset().top, left: $("#episodes6").offset().left, right: $("#episodes6").offset().left + Width, bottom: $("#episodes6").offset().top + Height};
	
	var Width = document.getElementById("episodes7").offsetWidth;
	var Height = document.getElementById("episodes7").offsetHeight;
	var episode7 = {up: $("#episodes7").offset().top, left: $("#episodes7").offset().left, right: $("#episodes7").offset().left + Width, bottom: $("#episodes7").offset().top + Height};
	
	var Width = document.getElementById("episodes8").offsetWidth;
	var Height = document.getElementById("episodes8").offsetHeight;
	var episode8 = {up: $("#episodes8").offset().top, left: $("#episodes8").offset().left, right: $("#episodes8").offset().left + Width, bottom: $("#episodes8").offset().top + Height};
	
	var Width = document.getElementById("episodes9").offsetWidth;
	var Height = document.getElementById("episodes9").offsetHeight;
	var episode9 = {up: $("#episodes9").offset().top, left: $("#episodes9").offset().left, right: $("#episodes9").offset().left + Width, bottom: $("#episodes9").offset().top + Height};
	
	var Width = document.getElementById("episodes10").offsetWidth;
	var Height = document.getElementById("episodes10").offsetHeight;
	var episode10 = {up: $("#episodes10").offset().top, left: $("#episodes10").offset().left, right: $("#episodes10").offset().left + Width, bottom: $("#episodes10").offset().top + Height};
	
	var Width = document.getElementById("episodes11").offsetWidth;
	var Height = document.getElementById("episodes11").offsetHeight;
	var episode11 = {up: $("#episodes11").offset().top, left: $("#episodes11").offset().left, right: $("#episodes11").offset().left + Width, bottom: $("#episodes11").offset().top + Height};
	
	var Width = document.getElementById("episodes12").offsetWidth;
	var Height = document.getElementById("episodes12").offsetHeight;
	var episode12 = {up: $("#episodes12").offset().top, left: $("#episodes12").offset().left, right: $("#episodes12").offset().left + Width, bottom: $("#episodes12").offset().top + Height};
	
	var Width = document.getElementById("episodes13").offsetWidth;
	var Height = document.getElementById("episodes13").offsetHeight;
	var episode13 = {up: $("#episodes13").offset().top, left: $("#episodes13").offset().left, right: $("#episodes13").offset().left + Width, bottom: $("#episodes13").offset().top + Height};
	
	var Width = document.getElementById("episodes14").offsetWidth;
	var Height = document.getElementById("episodes14").offsetHeight;
	var episode14 = {up: $("#episodes14").offset().top, left: $("#episodes14").offset().left, right: $("#episodes14").offset().left + Width, bottom: $("#episodes14").offset().top + Height};
	
	var Width = document.getElementById("episodes15").offsetWidth;
	var Height = document.getElementById("episodes15").offsetHeight;
	var episode15 = {up: $("#episodes15").offset().top, left: $("#episodes15").offset().left, right: $("#episodes15").offset().left + Width, bottom: $("#episodes15").offset().top + Height};
	
	var Width = document.getElementById("episodes16").offsetWidth;
	var Height = document.getElementById("episodes16").offsetHeight;
	var episode16 = {up: $("#episodes16").offset().top, left: $("#episodes16").offset().left, right: $("#episodes16").offset().left + Width, bottom: $("#episodes16").offset().top + Height};
	
	var Width = document.getElementById("episodes17").offsetWidth;
	var Height = document.getElementById("episodes17").offsetHeight;
	var episode17 = {up: $("#episodes17").offset().top, left: $("#episodes17").offset().left, right: $("#episodes17").offset().left + Width, bottom: $("#episodes17").offset().top + Height};
	
	var Width = document.getElementById("episodes18").offsetWidth;
	var Height = document.getElementById("episodes18").offsetHeight;
	var episode18 = {up: $("#episodes18").offset().top, left: $("#episodes18").offset().left, right: $("#episodes18").offset().left + Width, bottom: $("#episodes18").offset().top + Height};
	
	var Width = document.getElementById("episodes19").offsetWidth;
	var Height = document.getElementById("episodes19").offsetHeight;
	var episode19 = {up: $("#episodes19").offset().top, left: $("#episodes19").offset().left, right: $("#episodes19").offset().left + Width, bottom: $("#episodes19").offset().top + Height};
	
	var Width = document.getElementById("episodes20").offsetWidth;
	var Height = document.getElementById("episodes20").offsetHeight;
	var episode20 = {up: $("#episodes20").offset().top, left: $("#episodes20").offset().left, right: $("#episodes20").offset().left + Width, bottom: $("#episodes20").offset().top + Height};
	
	var Width = document.getElementById("episodes21").offsetWidth;
	var Height = document.getElementById("episodes21").offsetHeight;
	var episode21 = {up: $("#episodes21").offset().top, left: $("#episodes21").offset().left, right: $("#episodes21").offset().left + Width, bottom: $("#episodes21").offset().top + Height};
	
	var Width = document.getElementById("episodes22").offsetWidth;
	var Height = document.getElementById("episodes22").offsetHeight;
	var episode22 = {up: $("#episodes22").offset().top, left: $("#episodes22").offset().left, right: $("#episodes22").offset().left + Width, bottom: $("#episodes22").offset().top + Height};
	
	var Width = document.getElementById("episodes23").offsetWidth;
	var Height = document.getElementById("episodes23").offsetHeight;
	var episode23 = {up: $("#episodes23").offset().top, left: $("#episodes23").offset().left, right: $("#episodes23").offset().left + Width, bottom: $("#episodes23").offset().top + Height};
	
	var Width = document.getElementById("episodes24").offsetWidth;
	var Height = document.getElementById("episodes24").offsetHeight;
	var episode24 = {up: $("#episodes24").offset().top, left: $("#episodes24").offset().left, right: $("#episodes24").offset().left + Width, bottom: $("#episodes24").offset().top + Height};
	
	var Width = document.getElementById("episodes25").offsetWidth;
	var Height = document.getElementById("episodes25").offsetHeight;
	var episode25 = {up: $("#episodes25").offset().top, left: $("#episodes25").offset().left, right: $("#episodes25").offset().left + Width, bottom: $("#episodes25").offset().top + Height};
	

	
	playerPos = {up: parseInt(document.getElementById("player").style.top), left: parseInt(document.getElementById("player").style.left), bottom: parseInt(document.getElementById("player").style.top) + 96, right: parseInt(document.getElementById("player").style.left) + 64};
	
	/*-------------------------Inétraction contenue-------------------------------------------*/	
	var lastEvent;
	var heldKeys = {};
	window.onkeydown = function(event) 
	{
		if (lastEvent && lastEvent.keyCode == event.keyCode) {
			return;
		}
		lastEvent = event;
		heldKeys[event.keyCode] = true;
		
		/*----------------Intro----------------*/
		if(playerPos.up > contenuMainScreen.up && playerPos.bottom < contenuMainScreen.bottom && playerPos.left > contenuMainScreen.left && playerPos.right < contenuMainScreen.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("intro1");
			}
		}
		/*---------------Emilia info------------*/
		if(playerPos.up > contenuEmilia.up && playerPos.bottom < contenuEmilia.bottom && playerPos.left > contenuEmilia.left && playerPos.right < contenuEmilia.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoEmilia1");
			}
		}
		/*---------------Puck info--------------*/
		if(playerPos.up > contenuPack.up && playerPos.bottom < contenuPack.bottom && playerPos.left > contenuPack.left && playerPos.right < contenuPack.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoPuck1");
			}
		}
		/*---------------Beatrice info----------*/
		if(playerPos.up > contenuBeatrice.up && playerPos.bottom < contenuBeatrice.bottom && playerPos.left > contenuBeatrice.left && playerPos.right < contenuBeatrice.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoBeatrice1");
			}
		}
		/*------------Elsa info----------------*/
		if(playerPos.up > contenuElsa.up && playerPos.bottom < contenuElsa.bottom && playerPos.left > contenuElsa.left && playerPos.right < contenuElsa.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoElsa1");
			}
		}
		/*-------------Ram info-------------*/
		if(playerPos.up > contenuRam.up && playerPos.bottom < contenuRam.bottom && playerPos.left > contenuRam.left && playerPos.right < contenuRam.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoRam1");
			}
		}
		/*--------------Rem info---------------*/
		if(playerPos.up > contenuRem.up && playerPos.bottom < contenuRem.bottom && playerPos.left > contenuRem.left && playerPos.right < contenuRem.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoRem1");
			}
		}
		/*--------------Reinhard info----------*/
		if(playerPos.up > contenuReinhard.up && playerPos.bottom < contenuReinhard.bottom && playerPos.left > contenuReinhard.left && playerPos.right < contenuReinhard.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoReinhard1");
			}
		}
		/*--------------Rom info-------------*/
		if(playerPos.up > contenuRom.up && playerPos.bottom < contenuRom.bottom && playerPos.left > contenuRom.left && playerPos.right < contenuRom.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoRom1");
			}
		}
		/*-------------Roswaal info---------------*/
		
		if(playerPos.up > contenuRoswaal.up && playerPos.bottom < contenuRoswaal.bottom && playerPos.left > contenuRoswaal.left && playerPos.right < contenuRoswaal.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoRoswaal1");
			}
		}
		/*--------------Felt info----------*/
		if(playerPos.up > contenuFelt.up && playerPos.bottom < contenuFelt.bottom && playerPos.left > contenuFelt.left && playerPos.right < contenuFelt.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoFelt1");
			}
		}
		/*--------------Anastasia info----------*/
		if(playerPos.up > contenuAnastasia.up && playerPos.bottom < contenuAnastasia.bottom && playerPos.left > contenuAnastasia.left && playerPos.right < contenuAnastasia.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoAnastasia1");
			}
		}
		/*------------Crusch info----------*/
		if(playerPos.up > contenuCrusch.up && playerPos.bottom < contenuCrusch.bottom && playerPos.left > contenuCrusch.left && playerPos.right < contenuCrusch.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoCrusch1");
			}
		}
		/*----------------Felix info----------*/
		if(playerPos.up > contenuFelix.up && playerPos.bottom < contenuFelix.bottom && playerPos.left > contenuFelix.left && playerPos.right < contenuFelix.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoFelix1");
			}
		}
		/*-------------Priscilla info----------*/
		if(playerPos.up > contenuPriscilla.up && playerPos.bottom < contenuPriscilla.bottom && playerPos.left > contenuPriscilla.left && playerPos.right < contenuPriscilla.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoPriscilla1");
			}
		}
		/*--------------Subaru info----------*/
		if(playerPos.up > contenuSubaru.up && playerPos.bottom < contenuSubaru.bottom && playerPos.left > contenuSubaru.left && playerPos.right < contenuSubaru.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoSubaru1");
			}
		}
		/*----------------Wilhelm info----------*/
		if(playerPos.up > contenuWilhelm.up && playerPos.bottom < contenuWilhelm.bottom && playerPos.left > contenuWilhelm.left && playerPos.right < contenuWilhelm.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoWilhelm1");
			}
		}
		/*-----------------WebNovel info----------*/
		if(playerPos.up > webNovel.up && playerPos.bottom < webNovel.bottom && playerPos.left > webNovel.left && playerPos.right < webNovel.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoWebNovel1");
			}
		}
		/*----------------LightNovel info----------*/
		if(playerPos.up > lightNovel.up && playerPos.bottom < lightNovel.bottom && playerPos.left > lightNovel.left && playerPos.right < lightNovel.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoLightNovel1");
			}
		}
		/*---------------manga info----------*/
		if(playerPos.up > manga.up && playerPos.bottom < manga.bottom && playerPos.left > manga.left && playerPos.right < manga.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoManga1");
			}
		}
		/*------------------anime info----------*/
		if(playerPos.up > anime.up && playerPos.bottom < anime.bottom && playerPos.left > anime.left && playerPos.right < anime.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("infoAnime1");
			}
		}
		/*------------------episode1 info----------*/
		if(playerPos.up > episode1.up && playerPos.bottom < episode1.bottom && playerPos.left > episode1.left && playerPos.right < episode1.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode11");
			}
		}
		/*------------------episode2 info----------*/
		if(playerPos.up > episode2.up && playerPos.bottom < episode2.bottom && playerPos.left > episode2.left && playerPos.right < episode2.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode21");
			}
		}
		/*------------------episode3 info----------*/
		if(playerPos.up > episode3.up && playerPos.bottom < episode3.bottom && playerPos.left > episode3.left && playerPos.right < episode3.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode31");
			}
		}
		/*------------------episode4 info----------*/
		if(playerPos.up > episode4.up && playerPos.bottom < episode4.bottom && playerPos.left > episode4.left && playerPos.right < episode4.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode41");
			}
		}
		/*------------------episode5 info----------*/
		if(playerPos.up > episode5.up && playerPos.bottom < episode5.bottom && playerPos.left > episode5.left && playerPos.right < episode5.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode51");
			}
		}
		/*------------------episode6 info----------*/
		if(playerPos.up > episode6.up && playerPos.bottom < episode6.bottom && playerPos.left > episode6.left && playerPos.right < episode6.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode61");
			}
		}
		/*------------------episode7 info----------*/
		if(playerPos.up > episode7.up && playerPos.bottom < episode7.bottom && playerPos.left > episode7.left && playerPos.right < episode7.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode71");
			}
		}
		/*------------------episode8 info----------*/
		if(playerPos.up > episode8.up && playerPos.bottom < episode8.bottom && playerPos.left > episode8.left && playerPos.right < episode8.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode81");
			}
		}
		/*------------------episode9 info----------*/
		if(playerPos.up > episode9.up && playerPos.bottom < episode9.bottom && playerPos.left > episode9.left && playerPos.right < episode9.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode91");
			}
		}
		/*------------------episode10 info----------*/
		if(playerPos.up > episode10.up && playerPos.bottom < episode10.bottom && playerPos.left > episode10.left && playerPos.right < episode10.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode101");
			}
		}
		/*------------------episode11 info----------*/
		if(playerPos.up > episode11.up && playerPos.bottom < episode11.bottom && playerPos.left > episode11.left && playerPos.right < episode11.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode111");
			}
		}
		/*------------------episode12 info----------*/
		if(playerPos.up > episode12.up && playerPos.bottom < episode12.bottom && playerPos.left > episode12.left && playerPos.right < episode12.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode121");
			}
		}
		/*------------------episode13 info----------*/
		if(playerPos.up > episode13.up && playerPos.bottom < episode13.bottom && playerPos.left > episode13.left && playerPos.right < episode13.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode131");
			}
		}
		/*------------------episode14 info----------*/
		if(playerPos.up > episode14.up && playerPos.bottom < episode14.bottom && playerPos.left > episode14.left && playerPos.right < episode14.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode141");
			}
		}
		/*------------------episode15 info----------*/
		if(playerPos.up > episode15.up && playerPos.bottom < episode15.bottom && playerPos.left > episode15.left && playerPos.right < episode15.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode151");
			}
		}
		/*------------------episode16 info----------*/
		if(playerPos.up > episode16.up && playerPos.bottom < episode16.bottom && playerPos.left > episode16.left && playerPos.right < episode16.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode161");
			}
		}
		/*------------------episode17 info----------*/
		if(playerPos.up > episode17.up && playerPos.bottom < episode17.bottom && playerPos.left > episode17.left && playerPos.right < episode17.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode171");
			}
		}
		/*------------------episode18 info----------*/
		if(playerPos.up > episode18.up && playerPos.bottom < episode18.bottom && playerPos.left > episode18.left && playerPos.right < episode18.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode181");
			}
		}
		/*------------------episode19 info----------*/
		if(playerPos.up > episode19.up && playerPos.bottom < episode19.bottom && playerPos.left > episode19.left && playerPos.right < episode19.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode191");
			}
		}
		/*------------------episode20 info----------*/
		if(playerPos.up > episode20.up && playerPos.bottom < episode20.bottom && playerPos.left > episode20.left && playerPos.right < episode20.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode201");
			}
		}
		/*------------------episode21 info----------*/
		if(playerPos.up > episode21.up && playerPos.bottom < episode21.bottom && playerPos.left > episode21.left && playerPos.right < episode21.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode211");
			}
		}
		/*------------------episode22 info----------*/
		if(playerPos.up > episode22.up && playerPos.bottom < episode22.bottom && playerPos.left > episode22.left && playerPos.right < episode22.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode221");
			}
		}
		/*------------------episode23 info----------*/
		if(playerPos.up > episode23.up && playerPos.bottom < episode23.bottom && playerPos.left > episode23.left && playerPos.right < episode23.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode231");
			}
		}
		/*------------------episode24 info----------*/
		if(playerPos.up > episode24.up && playerPos.bottom < episode24.bottom && playerPos.left > episode24.left && playerPos.right < episode24.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode241");
			}
		}
		/*------------------episode25 info----------*/
		if(playerPos.up > episode25.up && playerPos.bottom < episode25.bottom && playerPos.left > episode25.left && playerPos.right < episode25.right && event.keyCode == 32)
		{
			if(document.getElementById("bubble").style.display == "none")
			{
				document.getElementById("bubble").style.display = "block";
				bubble("episode251");
			}
		}
	};

	window.onkeyup = function(event) {
		lastEvent = null;
		delete heldKeys[event.keyCode];
	};
	/*-----------------------------------------------------------------------------------------*/
	/*-----------------------Instruction intro-------------------------------------*/
	if(playerPos.up > contenuMainScreen.up && playerPos.bottom < contenuMainScreen.bottom && playerPos.left > contenuMainScreen.left && playerPos.right < contenuMainScreen.right && !animation)
	{
		document.getElementById("intro").style.display = "block";
		instruction("intro");
	}
	else
	{
		document.getElementById("intro").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("intro").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*-----------------------Intruction Emilia------------------------------*/
	if(playerPos.up > contenuEmilia.up && playerPos.bottom < contenuEmilia.bottom && playerPos.left > contenuEmilia.left && playerPos.right < contenuEmilia.right && !animation)
	{
		document.getElementById("instrucEmilia").style.display = "block";
		instruction("instrucEmilia");
	}
	else
	{
		document.getElementById("instrucEmilia").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEmilia").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*-----------------------Intruction puck---------------------------------*/
	if(playerPos.up > contenuPack.up && playerPos.bottom < contenuPack.bottom && playerPos.left > contenuPack.left && playerPos.right < contenuPack.right && !animation)
	{
		document.getElementById("instrucPuck").style.display = "block";
		instruction("instrucPuck");
	}
	else
	{
		document.getElementById("instrucPuck").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucPuck").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*-----------------------Intruction Béatrice---------------------------------*/
	if(playerPos.up > contenuBeatrice.up && playerPos.bottom < contenuBeatrice.bottom && playerPos.left > contenuBeatrice.left && playerPos.right < contenuBeatrice.right && !animation)
	{
		document.getElementById("instrucBeatrice").style.display = "block";
		instruction("instrucBeatrice");
	}
	else
	{
		document.getElementById("instrucBeatrice").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucBeatrice").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*-----------------------Intruction Elsa---------------------------------*/
	if(playerPos.up > contenuElsa.up && playerPos.bottom < contenuElsa.bottom && playerPos.left > contenuElsa.left && playerPos.right < contenuElsa.right && !animation)
	{
		document.getElementById("instrucElsa").style.display = "block";
		instruction("instrucElsa");
	}
	else
	{
		document.getElementById("instrucElsa").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucElsa").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*-----------------------Intruction Ram---------------------------------*/
	if(playerPos.up > contenuRam.up && playerPos.bottom < contenuRam.bottom && playerPos.left > contenuRam.left && playerPos.right < contenuRam.right && !animation)
	{
		document.getElementById("instrucRam").style.display = "block";
		instruction("instrucRam");
	}
	else
	{
		document.getElementById("instrucRam").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucRam").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*-----------------------Intruction Rem---------------------------------*/
	if(playerPos.up > contenuRem.up && playerPos.bottom < contenuRem.bottom && playerPos.left > contenuRem.left && playerPos.right < contenuRem.right && !animation)
	{
		document.getElementById("instrucRem").style.display = "block";
		instruction("instrucRem");
	}
	else
	{
		document.getElementById("instrucRem").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucRem").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*-----------------------Intruction Reinhard---------------------------------*/
	if(playerPos.up > contenuReinhard.up && playerPos.bottom < contenuReinhard.bottom && playerPos.left > contenuReinhard.left && playerPos.right < contenuReinhard.right && !animation)
	{
		document.getElementById("instrucReinhard").style.display = "block";
		instruction("instrucReinhard");
	}
	else
	{
		document.getElementById("instrucReinhard").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucReinhard").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*-----------------------Intruction Rom---------------------------------*/
	if(playerPos.up > contenuRom.up && playerPos.bottom < contenuRom.bottom && playerPos.left > contenuRom.left && playerPos.right < contenuRom.right && !animation)
	{
		document.getElementById("instrucRom").style.display = "block";
		instruction("instrucRom");
	}
	else
	{
		document.getElementById("instrucRom").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucRom").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*-----------------------Intruction Roswaal---------------------------------*/
	if(playerPos.up > contenuRoswaal.up && playerPos.bottom < contenuRoswaal.bottom && playerPos.left > contenuRoswaal.left && playerPos.right < contenuRoswaal.right && !animation)
	{
		document.getElementById("instrucRoswaal").style.display = "block";
		instruction("instrucRoswaal");
	}
	else
	{
		document.getElementById("instrucRoswaal").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucRoswaal").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	
	
	/*-----------------------Intruction Felt---------------------------------*/
	if(playerPos.up > contenuFelt.up && playerPos.bottom < contenuFelt.bottom && playerPos.left > contenuFelt.left && playerPos.right < contenuFelt.right && !animation)
	{
		document.getElementById("instrucFelt").style.display = "block";
		instruction("instrucFelt");
	}
	else
	{
		document.getElementById("instrucFelt").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucFelt").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*-----------------------Intruction Anastasia---------------------------------*/
	if(playerPos.up > contenuAnastasia.up && playerPos.bottom < contenuAnastasia.bottom && playerPos.left > contenuAnastasia.left && playerPos.right < contenuAnastasia.right && !animation)
	{
		document.getElementById("instrucAnastasia").style.display = "block";
		instruction("instrucAnastasia");
	}
	else
	{
		document.getElementById("instrucAnastasia").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucAnastasia").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*-----------------------Intruction Crusch---------------------------------*/
	if(playerPos.up > contenuCrusch.up && playerPos.bottom < contenuCrusch.bottom && playerPos.left > contenuCrusch.left && playerPos.right < contenuCrusch.right && !animation)
	{
		document.getElementById("instrucCrusch").style.display = "block";
		instruction("instrucCrusch");
	}
	else
	{
		document.getElementById("instrucCrusch").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucCrusch").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*-----------------------Intruction Felix---------------------------------*/
	if(playerPos.up > contenuFelix.up && playerPos.bottom < contenuFelix.bottom && playerPos.left > contenuFelix.left && playerPos.right < contenuFelix.right && !animation)
	{
		document.getElementById("instrucFelix").style.display = "block";
		instruction("instrucFelix");
	}
	else
	{
		document.getElementById("instrucFelix").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucFelix").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*-----------------------Intruction Priscilla---------------------------------*/
	if(playerPos.up > contenuPriscilla.up && playerPos.bottom < contenuPriscilla.bottom && playerPos.left > contenuPriscilla.left && playerPos.right < contenuPriscilla.right && !animation)
	{
		document.getElementById("instrucPriscilla").style.display = "block";
		instruction("instrucPriscilla");
	}
	else
	{
		document.getElementById("instrucPriscilla").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucPriscilla").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*-----------------------Intruction Subaru---------------------------------*/
	if(playerPos.up > contenuSubaru.up && playerPos.bottom < contenuSubaru.bottom && playerPos.left > contenuSubaru.left && playerPos.right < contenuSubaru.right && !animation)
	{
		document.getElementById("instrucSubaru").style.display = "block";
		instruction("instrucSubaru");
	}
	else
	{
		document.getElementById("instrucSubaru").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucSubaru").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*-----------------------Intruction Wilhelm---------------------------------*/
	if(playerPos.up > contenuWilhelm.up && playerPos.bottom < contenuWilhelm.bottom && playerPos.left > contenuWilhelm.left && playerPos.right < contenuWilhelm.right && !animation)
	{
		document.getElementById("instrucWilhelm").style.display = "block";
		instruction("instrucWilhelm");
	}
	else
	{
		document.getElementById("instrucWilhelm").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucWilhelm").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction WebNovel---------------------------------*/
	if(playerPos.up > webNovel.up && playerPos.bottom < webNovel.bottom && playerPos.left > webNovel.left && playerPos.right < webNovel.right && !animation)
	{
		document.getElementById("instrucWebNovel").style.display = "block";
		instruction("instrucWebNovel");
	}
	else
	{
		document.getElementById("instrucWebNovel").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucWebNovel").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction LightNovel---------------------------------*/
	if(playerPos.up > lightNovel.up && playerPos.bottom < lightNovel.bottom && playerPos.left > lightNovel.left && playerPos.right < lightNovel.right && !animation)
	{
		document.getElementById("instrucLightNovel").style.display = "block";
		instruction("instrucLightNovel");
	}
	else
	{
		document.getElementById("instrucLightNovel").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucLightNovel").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction manga---------------------------------*/
	if(playerPos.up > manga.up && playerPos.bottom < manga.bottom && playerPos.left > manga.left && playerPos.right < manga.right && !animation)
	{
		document.getElementById("instrucManga").style.display = "block";
		instruction("instrucManga");
	}
	else
	{
		document.getElementById("instrucManga").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucManga").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction anime---------------------------------*/
	if(playerPos.up > anime.up && playerPos.bottom < anime.bottom && playerPos.left > anime.left && playerPos.right < anime.right && !animation)
	{
		document.getElementById("instrucAnime").style.display = "block";
		instruction("instrucAnime");
	}
	else
	{
		document.getElementById("instrucAnime").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucAnime").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode1---------------------------------*/
	if(playerPos.up > episode1.up && playerPos.bottom < episode1.bottom && playerPos.left > episode1.left && playerPos.right < episode1.right && !animation)
	{
		document.getElementById("instrucEpisode1").style.display = "block";
		instruction("instrucEpisode1");
	}
	else
	{
		document.getElementById("instrucEpisode1").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode1").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode2---------------------------------*/
	if(playerPos.up > episode2.up && playerPos.bottom < episode2.bottom && playerPos.left > episode2.left && playerPos.right < episode2.right && !animation)
	{
		document.getElementById("instrucEpisode2").style.display = "block";
		instruction("instrucEpisode2");
	}
	else
	{
		document.getElementById("instrucEpisode2").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode2").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode3---------------------------------*/
	if(playerPos.up > episode3.up && playerPos.bottom < episode3.bottom && playerPos.left > episode3.left && playerPos.right < episode3.right && !animation)
	{
		document.getElementById("instrucEpisode3").style.display = "block";
		instruction("instrucEpisode3");
	}
	else
	{
		document.getElementById("instrucEpisode3").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode3").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode4---------------------------------*/
	if(playerPos.up > episode4.up && playerPos.bottom < episode4.bottom && playerPos.left > episode4.left && playerPos.right < episode4.right && !animation)
	{
		document.getElementById("instrucEpisode4").style.display = "block";
		instruction("instrucEpisode4");
	}
	else
	{
		document.getElementById("instrucEpisode4").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode4").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode5---------------------------------*/
	if(playerPos.up > episode5.up && playerPos.bottom < episode5.bottom && playerPos.left > episode5.left && playerPos.right < episode5.right && !animation)
	{
		document.getElementById("instrucEpisode5").style.display = "block";
		instruction("instrucEpisode5");
	}
	else
	{
		document.getElementById("instrucEpisode5").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode5").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode6---------------------------------*/
	if(playerPos.up > episode6.up && playerPos.bottom < episode6.bottom && playerPos.left > episode6.left && playerPos.right < episode6.right && !animation)
	{
		document.getElementById("instrucEpisode6").style.display = "block";
		instruction("instrucEpisode6");
	}
	else
	{
		document.getElementById("instrucEpisode6").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode6").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode7---------------------------------*/
	if(playerPos.up > episode7.up && playerPos.bottom < episode7.bottom && playerPos.left > episode7.left && playerPos.right < episode7.right && !animation)
	{
		document.getElementById("instrucEpisode7").style.display = "block";
		instruction("instrucEpisode7");
	}
	else
	{
		document.getElementById("instrucEpisode7").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode7").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode8---------------------------------*/
	if(playerPos.up > episode8.up && playerPos.bottom < episode8.bottom && playerPos.left > episode8.left && playerPos.right < episode8.right && !animation)
	{
		document.getElementById("instrucEpisode8").style.display = "block";
		instruction("instrucEpisode8");
	}
	else
	{
		document.getElementById("instrucEpisode8").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode8").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode9---------------------------------*/
	if(playerPos.up > episode9.up && playerPos.bottom < episode9.bottom && playerPos.left > episode9.left && playerPos.right < episode9.right && !animation)
	{
		document.getElementById("instrucEpisode9").style.display = "block";
		instruction("instrucEpisode9");
	}
	else
	{
		document.getElementById("instrucEpisode9").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode9").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode10---------------------------------*/
	if(playerPos.up > episode10.up && playerPos.bottom < episode10.bottom && playerPos.left > episode10.left && playerPos.right < episode10.right && !animation)
	{
		document.getElementById("instrucEpisode10").style.display = "block";
		instruction("instrucEpisode10");
	}
	else
	{
		document.getElementById("instrucEpisode10").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode10").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode11---------------------------------*/
	if(playerPos.up > episode11.up && playerPos.bottom < episode11.bottom && playerPos.left > episode11.left && playerPos.right < episode11.right && !animation)
	{
		document.getElementById("instrucEpisode11").style.display = "block";
		instruction("instrucEpisode11");
	}
	else
	{
		document.getElementById("instrucEpisode11").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode11").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode12---------------------------------*/
	if(playerPos.up > episode12.up && playerPos.bottom < episode12.bottom && playerPos.left > episode12.left && playerPos.right < episode12.right && !animation)
	{
		document.getElementById("instrucEpisode12").style.display = "block";
		instruction("instrucEpisode12");
	}
	else
	{
		document.getElementById("instrucEpisode12").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode12").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode13---------------------------------*/
	if(playerPos.up > episode13.up && playerPos.bottom < episode13.bottom && playerPos.left > episode13.left && playerPos.right < episode13.right && !animation)
	{
		document.getElementById("instrucEpisode13").style.display = "block";
		instruction("instrucEpisode13");
	}
	else
	{
		document.getElementById("instrucEpisode13").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode13").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode14---------------------------------*/
	if(playerPos.up > episode14.up && playerPos.bottom < episode14.bottom && playerPos.left > episode14.left && playerPos.right < episode14.right && !animation)
	{
		document.getElementById("instrucEpisode14").style.display = "block";
		instruction("instrucEpisode14");
	}
	else
	{
		document.getElementById("instrucEpisode14").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode14").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode15---------------------------------*/
	if(playerPos.up > episode15.up && playerPos.bottom < episode15.bottom && playerPos.left > episode15.left && playerPos.right < episode15.right && !animation)
	{
		document.getElementById("instrucEpisode15").style.display = "block";
		instruction("instrucEpisode15");
	}
	else
	{
		document.getElementById("instrucEpisode15").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode15").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode16---------------------------------*/
	if(playerPos.up > episode16.up && playerPos.bottom < episode16.bottom && playerPos.left > episode16.left && playerPos.right < episode16.right && !animation)
	{
		document.getElementById("instrucEpisode16").style.display = "block";
		instruction("instrucEpisode16");
	}
	else
	{
		document.getElementById("instrucEpisode16").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode16").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode17---------------------------------*/
	if(playerPos.up > episode17.up && playerPos.bottom < episode17.bottom && playerPos.left > episode17.left && playerPos.right < episode17.right && !animation)
	{
		document.getElementById("instrucEpisode17").style.display = "block";
		instruction("instrucEpisode17");
	}
	else
	{
		document.getElementById("instrucEpisode17").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode17").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode18---------------------------------*/
	if(playerPos.up > episode18.up && playerPos.bottom < episode18.bottom && playerPos.left > episode18.left && playerPos.right < episode18.right && !animation)
	{
		document.getElementById("instrucEpisode18").style.display = "block";
		instruction("instrucEpisode18");
	}
	else
	{
		document.getElementById("instrucEpisode18").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode18").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode19---------------------------------*/
	if(playerPos.up > episode19.up && playerPos.bottom < episode19.bottom && playerPos.left > episode19.left && playerPos.right < episode19.right && !animation)
	{
		document.getElementById("instrucEpisode19").style.display = "block";
		instruction("instrucEpisode19");
	}
	else
	{
		document.getElementById("instrucEpisode19").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode19").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode20---------------------------------*/
	if(playerPos.up > episode20.up && playerPos.bottom < episode20.bottom && playerPos.left > episode20.left && playerPos.right < episode20.right && !animation)
	{
		document.getElementById("instrucEpisode20").style.display = "block";
		instruction("instrucEpisode20");
	}
	else
	{
		document.getElementById("instrucEpisode20").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode20").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode21---------------------------------*/
	if(playerPos.up > episode21.up && playerPos.bottom < episode21.bottom && playerPos.left > episode21.left && playerPos.right < episode21.right && !animation)
	{
		document.getElementById("instrucEpisode21").style.display = "block";
		instruction("instrucEpisode21");
	}
	else
	{
		document.getElementById("instrucEpisode21").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode21").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode22---------------------------------*/
	if(playerPos.up > episode22.up && playerPos.bottom < episode22.bottom && playerPos.left > episode22.left && playerPos.right < episode22.right && !animation)
	{
		document.getElementById("instrucEpisode22").style.display = "block";
		instruction("instrucEpisode22");
	}
	else
	{
		document.getElementById("instrucEpisode22").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode22").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode23---------------------------------*/
	if(playerPos.up > episode23.up && playerPos.bottom < episode23.bottom && playerPos.left > episode23.left && playerPos.right < episode23.right && !animation)
	{
		document.getElementById("instrucEpisode23").style.display = "block";
		instruction("instrucEpisode23");
	}
	else
	{
		document.getElementById("instrucEpisode23").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode23").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode24---------------------------------*/
	if(playerPos.up > episode24.up && playerPos.bottom < episode24.bottom && playerPos.left > episode24.left && playerPos.right < episode24.right && !animation)
	{
		document.getElementById("instrucEpisode24").style.display = "block";
		instruction("instrucEpisode24");
	}
	else
	{
		document.getElementById("instrucEpisode24").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode24").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	/*-----------------------Intruction Episode25---------------------------------*/
	if(playerPos.up > episode25.up && playerPos.bottom < episode25.bottom && playerPos.left > episode25.left && playerPos.right < episode25.right && !animation)
	{
		document.getElementById("instrucEpisode25").style.display = "block";
		instruction("instrucEpisode25");
	}
	else
	{
		document.getElementById("instrucEpisode25").style.display = "none";
	}
	if(document.getElementById("bubble").style.display == "block")
	{
		document.getElementById("instrucEpisode25").style.display = "none";
		document.getElementById("instrucDialogue").style.display = "block";
	}
	/*--------------------------------------------------------------------------------------------*/
	
	
	/*--------------------------Intéraction Portes-----------------------------------*/
	if(playerPos.up > porte1.up && playerPos.bottom < porte1.bottom && playerPos.left > porte1.right - 10 && playerPos.right < porte1.right +150 && !animation)
	{
		aniPorte1 = true;
		aniPorte2 = false;
		aniPorte3 = false;
		aniPorte4 = false;
		aniPorte5 = false;
		aniPorte6 = false;
		document.getElementById("instrucPorte1").style.display = "block";
		instruction("instrucPorte1");
		aniPorte11 = true;
	}
	else if (playerPos.up < porte1.up || playerPos.bottom > porte1.bottom || playerPos.left < porte1.right || playerPos.right > porte1.right +150 ||  animation)
	{
		document.getElementById("instrucPorte1").style.display = "none";
		aniPorte11 = false;
	}
	if(playerPos.up > porte2.up && playerPos.bottom < porte2.bottom && playerPos.left > porte2.right - 10 && playerPos.right < porte2.right +150 && !animation)
	{
		aniPorte2 = true;
		aniPorte1 = false;
		aniPorte3 = false;
		aniPorte4 = false;
		aniPorte5 = false;
		aniPorte6 = false;
		document.getElementById("instrucPorte2").style.display = "block";
		instruction("instrucPorte2");
		aniPorte22 = true;
	}
	else if (playerPos.up < porte2.up || playerPos.bottom > porte2.bottom || playerPos.left < porte2.right || playerPos.right > porte2.right +150 ||  animation)
	{
		document.getElementById("instrucPorte2").style.display = "none";
		aniPorte22 = false;
	}
	if(playerPos.up > porte3.up && playerPos.bottom < porte3.bottom && playerPos.left > porte3.right - 10 && playerPos.right < porte3.right +150 && !animation)
	{
		aniPorte3 = true;
		aniPorte2 = false;
		aniPorte1 = false;
		aniPorte4 = false;
		aniPorte5 = false;
		aniPorte6 = false;
		document.getElementById("instrucPorte3").style.display = "block";
		instruction("instrucPorte3");
		aniPorte33 = true;
	}
	else if (playerPos.up < porte3.up || playerPos.bottom > porte3.bottom || playerPos.left < porte3.right || playerPos.right > porte3.right +150 ||  animation)
	{
		document.getElementById("instrucPorte3").style.display = "none";
		aniPorte33 = false;
	}
	if(playerPos.up > porte4.up && playerPos.bottom < porte4.bottom && playerPos.left > porte4.right - 10 && playerPos.right < porte4.right +150 && !animation)
	{
		aniPorte4 = true;
		aniPorte2 = false;
		aniPorte3 = false;
		aniPorte1 = false;
		aniPorte5 = false;
		aniPorte6 = false;
		document.getElementById("instrucPorte4").style.display = "block";
		instruction("instrucPorte4");
		aniPorte44 = true;
	}
	else if (playerPos.up < porte4.up || playerPos.bottom > porte4.bottom || playerPos.left < porte4.right || playerPos.right > porte4.right +150 ||  animation)
	{
		document.getElementById("instrucPorte4").style.display = "none";
		aniPorte44 = false;
	}
	if(playerPos.up > porte5.up && playerPos.bottom < porte5.bottom && playerPos.left > porte5.right - 10 && playerPos.right < porte5.right +150 && !animation)
	{
		aniPorte5 = true;
		aniPorte2 = false;
		aniPorte3 = false;
		aniPorte4 = false;
		aniPorte1 = false;
		aniPorte6 = false;
		document.getElementById("instrucPorte5").style.display = "block";
		instruction("instrucPorte5");
		aniPorte55 = true;
	}
	else if (playerPos.up < porte5.up || playerPos.bottom > porte5.bottom || playerPos.left < porte5.right || playerPos.right > porte5.right +150 ||  animation)
	{
		document.getElementById("instrucPorte5").style.display = "none";
		aniPorte55 = false;
	}
	if(playerPos.up > porte6.up && playerPos.bottom < porte6.bottom && playerPos.left > porte6.right - 10 && playerPos.right < porte6.right +150 && !animation)
	{
		aniPorte6 = true;
		aniPorte2 = false;
		aniPorte3 = false;
		aniPorte4 = false;
		aniPorte5 = false;
		aniPorte1 = false;
		document.getElementById("instrucPorte6").style.display = "block";
		instruction("instrucPorte6");
		aniPorte66 = true;
	}
	else if (playerPos.up < porte6.up || playerPos.bottom > porte6.bottom || playerPos.left < porte6.right || playerPos.right > porte6.right +150 ||  animation)
	{
		document.getElementById("instrucPorte6").style.display = "none";
		aniPorte66 = false;
	}
	/*---------------------------------------------------------------------------------------------*/
	/*on peux donner des label a des if et s'en servir pour utiliser un break dessus*/
	deplacement: if (document.getElementById("bubble").style.display == "none" && !animation) //si il n'y a pas de bulle de dialogue on écoute les touche pour se déplacer
	{
		if(aniPorte11)
		{
			
			if(keys[32])
			{
				animation = true;
			}
		}
		if(aniPorte22)
		{
			if(keys[32])
			{
				animation = true;
			}
		}
		if(aniPorte33)
		{
			if(keys[32])
			{
				animation = true;
			}
		}
		if(aniPorte44)
		{
			if(keys[32])
			{
				animation = true;
			}
		}
		if(aniPorte55)
		{
			if(keys[32])
			{
				animation = true;
			}
		}
		if(aniPorte66)
		{
			if(keys[32])
			{
				animation = true;
			}
		}
		
		document.getElementById("playerimg").style.display = "inline";
		document.getElementById("playerspeak").style.display = "none";
		if (keys[16] && keys[83] || keys[16] && keys[40]) //shif + s
		{
			if ($(document).height() > parseInt(document.getElementById("player").style.top) + 96) //bloque si dépasse la hautre du document.
			{
				down = parseInt(document.getElementById("player").style.top) + 10;
				
				if(h/2 < parseInt(document.getElementById("player").style.top))
				{
					window.scrollBy(0,10);
				}
				
			}
			
			document.getElementById("player").style.top = down + "px";
			if(time == false)
			{
			  movedown(false);
			  time = true;
			  timeout = setTimeout(function()
			  {
				  time = false;
			  }, 100)
			}
		}
		else if(keys[16] && keys[87] || keys[16] && keys[38]) //shif + w
		{
			
			
			if (parseInt(document.getElementById("player").style.top) > 0)
			{
				down = parseInt(document.getElementById("player").style.top) - 10;
				var viewportOffset = document.getElementById("player").getBoundingClientRect();
				if(h/2 > viewportOffset.top - 96)
				{
					window.scrollBy(0,-10);
				}
			}
			
			document.getElementById("player").style.top = down + "px";
			if(time == false)
			{
			  moveup(false);
			  time = true;
			  timeout = setTimeout(function()
			  {
				  time = false;
			  }, 100)
			}
		}
		else if(keys[16] && keys[65] || keys[16] && keys[37]) //shif + a
		{
			if(parseInt(document.getElementById("player").style.left) > 0 && playerPos.left > porte1.right)
			{
				left = parseInt(document.getElementById("player").style.left) - 10;
			}
			
			document.getElementById("player").style.left = left + "px";
			if(time == false)
			{
			  moveleft(false);
			  time = true;
			  timeout = setTimeout(function()
			  {
				  time = false;
			  }, 100)
			} 
		}
		else if(keys[16] && keys[68] || keys[16] && keys[39]) //shif + d
		{
			if ($(document).width() > parseInt(document.getElementById("player").style.left) + 64)
			{
				left = parseInt(document.getElementById("player").style.left) + 10;
			}
			
			document.getElementById("player").style.left = left + "px";
			if(time == false)
			{
			  moveright(false);
			  time = true;
			  timeout = setTimeout(function()
			  {
				  time = false;
			  }, 100)
			}
		}
		else if(keys[87] || keys[38]) //w
		{
			if (parseInt(document.getElementById("player").style.top) > 0)
			{
				down = parseInt(document.getElementById("player").style.top) - 5;
				var viewportOffset = document.getElementById("player").getBoundingClientRect();
				if(h/2 > viewportOffset.top - 96)
				{
					window.scrollBy(0,-5);
				}
			}
			document.getElementById("player").style.top = down + "px";
			if(time == false)
			{
			  moveup(false);
			  time = true;
			  timeout = setTimeout(function()
			  {
				  time = false;
			  }, 300)
			}
		}
		else if(keys[83] || keys[40]) //s
		{
			if ($(document).height() > parseInt(document.getElementById("player").style.top) + 96)
			{
				down = parseInt(document.getElementById("player").style.top) + 5;
				if(h/2 < parseInt(document.getElementById("player").style.top))
				{
					window.scrollBy(0,5);
				}
			}
			document.getElementById("player").style.top = down + "px";
			if(time == false)
			{
			  movedown(false);
			  time = true;
			  timeout = setTimeout(function()
			  {
				  time = false;
			  }, 300)
			}
		}
		else if(keys[65] || keys[37]) //a
		{
			if(parseInt(document.getElementById("player").style.left) > 0 && playerPos.left > porte1.right)
			{
				left = parseInt(document.getElementById("player").style.left) - 5;
			}
			document.getElementById("player").style.left = left + "px";
			if(time == false)
			{
			  moveleft(false);
			  time = true;
			  timeout = setTimeout(function()
			  {
				  time = false;
			  }, 300)
			}
		}
		else if(keys[68] || keys[39]) //d
		{
			if ($(document).width() > parseInt(document.getElementById("player").style.left) + 64)
			{
				left = parseInt(document.getElementById("player").style.left) + 5;
			}
			document.getElementById("player").style.left = left + "px";
			if(time == false)
			{
			  moveright(false);
			  time = true;
			  timeout = setTimeout(function()
			  {
				  time = false;
			  }, 300)
			}
		}
	}
	else //sinon on écoute les touches concernant le dialogue
	{
		if(!animation)
		{
			document.getElementById("playerimg").style.display = "none";
			document.getElementById("playerspeak").style.display = "inline";
			if(time == false)
			{
			  movedown();
			  time = true;
			  timeout = setTimeout(function()
			  {
				  time = false;
			  }, 300)
			}
			
			if(keys[27]) //esc. on ferme la bulle
			{
				document.getElementById("bubble").style.display = "none";
				document.getElementById("instrucDialogue").style.display = "none";
				if(document.getElementById("intro1").style.display == "inline")
				{
					pageLoad("pages", "accueil");
				}
				else if(document.getElementById("intro2").style.display == "inline")
				{
					pageLoad("pages", "accueil");
				}
				else if(document.getElementById("intro3").style.display == "inline")
				{
					pageLoad("pages", "accueil");
				}
				else if(document.getElementById("intro4").style.display == "inline")
				{
					pageLoad("pages", "accueil");
				}
			}
			if(keys[32] && !fired) //space on passe au prochain dialogue si il y en a un
			{
				fired = true
				if(time2 == false) //sert a faire un délai sinon si espace est tenu pour plus de 20 milième de seconde des dialogue peuvent être passé
				{
					/*------------------------------bubble accueil--------------------------------------*/
					if(document.getElementById("intro1").style.display == "inline")
					{
						bubble("intro2");
					}
					else if(document.getElementById("intro2").style.display == "inline")
					{
						bubble("intro3");
					}
					else if(document.getElementById("intro3").style.display == "inline")
					{
						bubble("intro4");
					}
					else if(document.getElementById("intro4").style.display == "inline")
					{
						bubble("intro5");
						
					}
					else if(document.getElementById("intro5").style.display == "inline")
					{
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
						pageLoad("pages", "accueil");
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*----------------------------bubble Emilia------------------------------*/
					else if(document.getElementById("infoEmilia1").style.display == "inline")
					{
						bubble("infoEmilia2");
						
					}
					else if(document.getElementById("infoEmilia2").style.display == "inline")
					{
						bubble("infoEmilia3");
					}
					else if(document.getElementById("infoEmilia3").style.display == "inline")
					{
						bubble("infoEmilia4");
					}
					else if(document.getElementById("infoEmilia4").style.display == "inline")
					{
						bubble("infoEmilia5");
					}
					else if(document.getElementById("infoEmilia5").style.display == "inline")
					{
						bubble("infoEmilia6");
					}
					else if(document.getElementById("infoEmilia6").style.display == "inline")
					{
						bubble("infoEmilia7");
						
					}
					else if(document.getElementById("infoEmilia7").style.display == "inline")
					{
						document.getElementById("infoEmilia6").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					
					/*----------------------------bubble Puck------------------------------*/
					else if(document.getElementById("infoPuck1").style.display == "inline")
					{
						bubble("infoPuck2");
					}
					else if(document.getElementById("infoPuck2").style.display == "inline")
					{
						bubble("infoPuck3");
					}
					else if(document.getElementById("infoPuck3").style.display == "inline")
					{
						bubble("infoPuck4");
					}
					else if(document.getElementById("infoPuck4").style.display == "inline")
					{
						bubble("infoPuck5");
					}
					else if(document.getElementById("infoPuck5").style.display == "inline")
					{
						document.getElementById("infoPuck5").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					
					/*----------------------------bubble Béatrice------------------------------*/
					else if(document.getElementById("infoBeatrice1").style.display == "inline")
					{
						bubble("infoBeatrice2");
					}
					else if(document.getElementById("infoBeatrice2").style.display == "inline")
					{
						bubble("infoBeatrice3");
					}
					else if(document.getElementById("infoBeatrice3").style.display == "inline")
					{
						bubble("infoBeatrice4");
					}
					else if(document.getElementById("infoBeatrice4").style.display == "inline")
					{
						bubble("infoBeatrice5");
					}
					else if(document.getElementById("infoBeatrice5").style.display == "inline")
					{
						document.getElementById("infoBeatrice5").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Elsa------------------------------*/
					else if(document.getElementById("infoElsa1").style.display == "inline")
					{
						bubble("infoElsa2");
					}
					else if(document.getElementById("infoElsa2").style.display == "inline")
					{
						bubble("infoElsa3");
					}
					else if(document.getElementById("infoElsa3").style.display == "inline")
					{
						document.getElementById("infoElsa3").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Ram------------------------------*/
					else if(document.getElementById("infoRam1").style.display == "inline")
					{
						bubble("infoRam2");
					}
					else if(document.getElementById("infoRam2").style.display == "inline")
					{
						document.getElementById("infoRam2").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Rem------------------------------*/
					else if(document.getElementById("infoRem1").style.display == "inline")
					{
						bubble("infoRem2");
					}
					else if(document.getElementById("infoRem2").style.display == "inline")
					{
						document.getElementById("infoRem2").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Reinhard------------------------------*/
					else if(document.getElementById("infoReinhard1").style.display == "inline")
					{
						bubble("infoReinhard2");
					}
					else if(document.getElementById("infoReinhard2").style.display == "inline")
					{
						document.getElementById("infoReinhard2").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Rom------------------------------*/
					else if(document.getElementById("infoRom1").style.display == "inline")
					{
						bubble("infoRom2");
					}
					else if(document.getElementById("infoRom2").style.display == "inline")
					{
						bubble("infoRom3");
					}
					else if(document.getElementById("infoRom3").style.display == "inline")
					{
						bubble("infoRom4");
					}
					else if(document.getElementById("infoRom4").style.display == "inline")
					{
						bubble("infoRom5");
					}
					else if(document.getElementById("infoRom5").style.display == "inline")
					{
						document.getElementById("infoRom5").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Priscilla------------------------------*/
					else if(document.getElementById("infoPriscilla1").style.display == "inline")
					{
						bubble("infoPriscilla2");
					}
					else if(document.getElementById("infoPriscilla2").style.display == "inline")
					{
						bubble("infoPriscilla3");
					}
					else if(document.getElementById("infoPriscilla3").style.display == "inline")
					{
						bubble("infoPriscilla4");
					}
					else if(document.getElementById("infoPriscilla4").style.display == "inline")
					{
						bubble("infoPriscilla5");
					}
					else if(document.getElementById("infoPriscilla5").style.display == "inline")
					{
						bubble("infoPriscilla6");
					}
					else if(document.getElementById("infoPriscilla6").style.display == "inline")
					{
						document.getElementById("infoPriscilla6").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Felt------------------------------*/
					else if(document.getElementById("infoFelt1").style.display == "inline")
					{
						bubble("infoFelt2");
					}
					else if(document.getElementById("infoFelt2").style.display == "inline")
					{
						bubble("infoFelt3");
					}
					else if(document.getElementById("infoFelt3").style.display == "inline")
					{
						bubble("infoFelt4");
					}
					else if(document.getElementById("infoFelt4").style.display == "inline")
					{
						bubble("infoFelt5");
					}
					else if(document.getElementById("infoFelt5").style.display == "inline")
					{
						document.getElementById("infoFelt5").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Crusch------------------------------*/
					else if(document.getElementById("infoCrusch1").style.display == "inline")
					{
						bubble("infoCrusch2");
					}
					else if(document.getElementById("infoCrusch2").style.display == "inline")
					{
						bubble("infoCrusch3");
					}
					else if(document.getElementById("infoCrusch3").style.display == "inline")
					{
						bubble("infoCrusch4");
					}
					else if(document.getElementById("infoCrusch4").style.display == "inline")
					{
						bubble("infoCrusch5");
					}
					else if(document.getElementById("infoCrusch5").style.display == "inline")
					{
						document.getElementById("infoCrusch5").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Anastasia------------------------------*/
					else if(document.getElementById("infoAnastasia1").style.display == "inline")
					{
						bubble("infoAnastasia2");
					}
					else if(document.getElementById("infoAnastasia2").style.display == "inline")
					{
						bubble("infoAnastasia3");
					}
					else if(document.getElementById("infoAnastasia3").style.display == "inline")
					{
						bubble("infoAnastasia4");
					}
					else if(document.getElementById("infoAnastasia4").style.display == "inline")
					{
						document.getElementById("infoAnastasia4").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Roswaal------------------------------*/
					else if(document.getElementById("infoRoswaal1").style.display == "inline")
					{
						bubble("infoRoswaal2");
					}
					else if(document.getElementById("infoRoswaal2").style.display == "inline")
					{
						document.getElementById("infoRoswaal2").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Subaru------------------------------*/
					else if(document.getElementById("infoSubaru1").style.display == "inline")
					{
						bubble("infoSubaru2");
					}
					else if(document.getElementById("infoSubaru2").style.display == "inline")
					{
						document.getElementById("infoSubaru2").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Felix------------------------------*/
					else if(document.getElementById("infoFelix1").style.display == "inline")
					{
						bubble("infoFelix2");
					}
					else if(document.getElementById("infoFelix2").style.display == "inline")
					{
						document.getElementById("infoFelix2").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Wilhelm------------------------------*/
					else if(document.getElementById("infoWilhelm1").style.display == "inline")
					{
						bubble("infoWilhelm2");
					}
					else if(document.getElementById("infoWilhelm2").style.display == "inline")
					{
						document.getElementById("infoWilhelm2").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble WebNovel------------------------------*/
					else if(document.getElementById("infoWebNovel1").style.display == "inline")
					{
						bubble("infoWebNovel2");
					}
					else if(document.getElementById("infoWebNovel2").style.display == "inline")
					{
						bubble("infoWebNovel3");
					}
					else if(document.getElementById("infoWebNovel3").style.display == "inline")
					{
						bubble("infoWebNovel4");
					}
					else if(document.getElementById("infoWebNovel4").style.display == "inline")
					{
						bubble("infoWebNovel5");
					}
					else if(document.getElementById("infoWebNovel5").style.display == "inline")
					{
						document.getElementById("infoWebNovel5").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble LightNovel------------------------------*/
					else if(document.getElementById("infoLightNovel1").style.display == "inline")
					{
						bubble("infoLightNovel2");
					}
					else if(document.getElementById("infoLightNovel2").style.display == "inline")
					{
						bubble("infoLightNovel3");
					}
					else if(document.getElementById("infoLightNovel3").style.display == "inline")
					{
						bubble("infoLightNovel4");
					}
					else if(document.getElementById("infoLightNovel4").style.display == "inline")
					{
						document.getElementById("infoLightNovel4").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble manga------------------------------*/
					else if(document.getElementById("infoManga1").style.display == "inline")
					{
						bubble("infoManga2");
					}
					else if(document.getElementById("infoManga2").style.display == "inline")
					{
						bubble("infoManga3");
					}
					else if(document.getElementById("infoManga3").style.display == "inline")
					{
						bubble("infoManga4");
					}
					else if(document.getElementById("infoManga4").style.display == "inline")
					{
						document.getElementById("infoManga4").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble anime------------------------------*/
					else if(document.getElementById("infoAnime1").style.display == "inline")
					{
						bubble("infoAnime2");
					}
					else if(document.getElementById("infoAnime2").style.display == "inline")
					{
						bubble("infoAnime3");
					}
					else if(document.getElementById("infoAnime3").style.display == "inline")
					{
						bubble("infoAnime4");
					}
					else if(document.getElementById("infoAnime4").style.display == "inline")
					{
						document.getElementById("infoAnime4").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode1------------------------------*/
					else if(document.getElementById("episode11").style.display == "inline")
					{
						bubble("episode12");
					}
					else if(document.getElementById("episode12").style.display == "inline")
					{
						bubble("episode13");
					}
					else if(document.getElementById("episode13").style.display == "inline")
					{
						bubble("episode14");
					}
					else if(document.getElementById("episode14").style.display == "inline")
					{
						bubble("episode15");
						
					}
					else if(document.getElementById("episode15").style.display == "inline")
					{
						document.getElementById("episode15").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode2------------------------------*/
					else if(document.getElementById("episode21").style.display == "inline")
					{
						bubble("episode22");
					}
					else if(document.getElementById("episode22").style.display == "inline")
					{
						bubble("episode23");
					}
					else if(document.getElementById("episode23").style.display == "inline")
					{
						bubble("episode24");
					}
					else if(document.getElementById("episode24").style.display == "inline")
					{
						bubble("episode25");
						
					}
					else if(document.getElementById("episode25").style.display == "inline")
					{
						document.getElementById("episode25").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode3------------------------------*/
					else if(document.getElementById("episode31").style.display == "inline")
					{
						bubble("episode32");
					}
					else if(document.getElementById("episode32").style.display == "inline")
					{
						document.getElementById("episode32").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode4------------------------------*/
					else if(document.getElementById("episode41").style.display == "inline")
					{
						bubble("episode42");
					}
					else if(document.getElementById("episode42").style.display == "inline")
					{
						document.getElementById("episode42").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode5------------------------------*/
					else if(document.getElementById("episode51").style.display == "inline")
					{
						bubble("episode52");
					}
					else if(document.getElementById("episode52").style.display == "inline")
					{
						bubble("episode53");
					}
					else if(document.getElementById("episode53").style.display == "inline")
					{
						bubble("episode54");
					}
					else if(document.getElementById("episode54").style.display == "inline")
					{
						bubble("episode55");
						
					}
					else if(document.getElementById("episode55").style.display == "inline")
					{
						document.getElementById("episode55").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode6------------------------------*/
					else if(document.getElementById("episode61").style.display == "inline")
					{
						bubble("episode62");
					}
					else if(document.getElementById("episode62").style.display == "inline")
					{
						bubble("episode63");
					}
					else if(document.getElementById("episode63").style.display == "inline")
					{
						bubble("episode64");
					}
					else if(document.getElementById("episode64").style.display == "inline")
					{
						document.getElementById("episode64").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode7------------------------------*/
					else if(document.getElementById("episode71").style.display == "inline")
					{
						bubble("episode72");
					}
					else if(document.getElementById("episode72").style.display == "inline")
					{
						bubble("episode73");
					}
					else if(document.getElementById("episode73").style.display == "inline")
					{
						bubble("episode74");
					}
					else if(document.getElementById("episode74").style.display == "inline")
					{
						bubble("episode75");
						
					}
					else if(document.getElementById("episode75").style.display == "inline")
					{
						document.getElementById("episode75").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode8------------------------------*/
					else if(document.getElementById("episode81").style.display == "inline")
					{
						bubble("episode82");
					}
					else if(document.getElementById("episode82").style.display == "inline")
					{
						bubble("episode83");
					}
					else if(document.getElementById("episode83").style.display == "inline")
					{
						bubble("episode84");
					}
					else if(document.getElementById("episode84").style.display == "inline")
					{
						document.getElementById("episode84").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode9------------------------------*/
					else if(document.getElementById("episode91").style.display == "inline")
					{
						bubble("episode92");
					}
					else if(document.getElementById("episode92").style.display == "inline")
					{
						bubble("episode93");
					}
					else if(document.getElementById("episode93").style.display == "inline")
					{
						document.getElementById("episode93").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode10------------------------------*/
					else if(document.getElementById("episode101").style.display == "inline")
					{
						bubble("episode102");
					}
					else if(document.getElementById("episode102").style.display == "inline")
					{
						bubble("episode103");
					}
					else if(document.getElementById("episode103").style.display == "inline")
					{
						bubble("episode104");
					}
					else if(document.getElementById("episode104").style.display == "inline")
					{
						bubble("episode105");
						
					}
					else if(document.getElementById("episode105").style.display == "inline")
					{
						document.getElementById("episode105").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode11------------------------------*/
					else if(document.getElementById("episode111").style.display == "inline")
					{
						bubble("episode112");
					}
					else if(document.getElementById("episode112").style.display == "inline")
					{
						bubble("episode113");
					}
					else if(document.getElementById("episode113").style.display == "inline")
					{
						bubble("episode114");
					}
					else if(document.getElementById("episode114").style.display == "inline")
					{
						bubble("episode115");
						
					}
					else if(document.getElementById("episode115").style.display == "inline")
					{
						document.getElementById("episode115").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode12------------------------------*/
					else if(document.getElementById("episode121").style.display == "inline")
					{
						bubble("episode122");
					}
					else if(document.getElementById("episode122").style.display == "inline")
					{
						bubble("episode123");
					}
					else if(document.getElementById("episode123").style.display == "inline")
					{
						bubble("episode124");
					}
					else if(document.getElementById("episode124").style.display == "inline")
					{
						bubble("episode125");
						
					}
					else if(document.getElementById("episode125").style.display == "inline")
					{
						document.getElementById("episode125").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode13------------------------------*/
					else if(document.getElementById("episode131").style.display == "inline")
					{
						bubble("episode132");
					}
					else if(document.getElementById("episode132").style.display == "inline")
					{
						bubble("episode133");
					}
					else if(document.getElementById("episode133").style.display == "inline")
					{
						bubble("episode134");
					}
					else if(document.getElementById("episode134").style.display == "inline")
					{
						document.getElementById("episode134").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode14------------------------------*/
					else if(document.getElementById("episode141").style.display == "inline")
					{
						bubble("episode142");
					}
					else if(document.getElementById("episode142").style.display == "inline")
					{
						bubble("episode143");
					}
					else if(document.getElementById("episode143").style.display == "inline")
					{
						bubble("episode144");
					}
					else if(document.getElementById("episode144").style.display == "inline")
					{
						bubble("episode145");
						
					}
					else if(document.getElementById("episode145").style.display == "inline")
					{
						bubble("episode146");
						
					}
					else if(document.getElementById("episode146").style.display == "inline")
					{
						document.getElementById("episode146").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode15------------------------------*/
					else if(document.getElementById("episode151").style.display == "inline")
					{
						bubble("episode152");
					}
					else if(document.getElementById("episode152").style.display == "inline")
					{
						bubble("episode153");
					}
					else if(document.getElementById("episode153").style.display == "inline")
					{
						document.getElementById("episode153").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode16------------------------------*/
					else if(document.getElementById("episode161").style.display == "inline")
					{
						bubble("episode162");
					}
					else if(document.getElementById("episode162").style.display == "inline")
					{
						bubble("episode163");
					}
					else if(document.getElementById("episode163").style.display == "inline")
					{
						bubble("episode164");
					}
					else if(document.getElementById("episode164").style.display == "inline")
					{
						document.getElementById("episode164").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode17------------------------------*/
					else if(document.getElementById("episode171").style.display == "inline")
					{
						bubble("episode172");
					}
					else if(document.getElementById("episode172").style.display == "inline")
					{
						bubble("episode173");
					}
					else if(document.getElementById("episode173").style.display == "inline")
					{
						document.getElementById("episode173").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode18------------------------------*/
					else if(document.getElementById("episode181").style.display == "inline")
					{
						bubble("episode182");
					}
					else if(document.getElementById("episode182").style.display == "inline")
					{
						bubble("episode183");
					}
					else if(document.getElementById("episode183").style.display == "inline")
					{
						bubble("episode184");
					}
					else if(document.getElementById("episode184").style.display == "inline")
					{
						bubble("episode185");
						
					}
					else if(document.getElementById("episode185").style.display == "inline")
					{
						bubble("episode186");
						
					}
					else if(document.getElementById("episode186").style.display == "inline")
					{
						document.getElementById("episode186").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode19------------------------------*/
					else if(document.getElementById("episode191").style.display == "inline")
					{
						bubble("episode192");
					}
					else if(document.getElementById("episode192").style.display == "inline")
					{
						bubble("episode193");
					}
					else if(document.getElementById("episode193").style.display == "inline")
					{
						document.getElementById("episode193").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode20------------------------------*/
					else if(document.getElementById("episode201").style.display == "inline")
					{
						bubble("episode202");
					}
					else if(document.getElementById("episode202").style.display == "inline")
					{
						bubble("episode203");
					}
					else if(document.getElementById("episode203").style.display == "inline")
					{
						document.getElementById("episode203").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode21------------------------------*/
					else if(document.getElementById("episode211").style.display == "inline")
					{
						bubble("episode212");
					}
					else if(document.getElementById("episode212").style.display == "inline")
					{
						bubble("episode213");
					}
					else if(document.getElementById("episode213").style.display == "inline")
					{
						bubble("episode214");
					}
					else if(document.getElementById("episode214").style.display == "inline")
					{
						bubble("episode215");
						
					}
					else if(document.getElementById("episode215").style.display == "inline")
					{
						document.getElementById("episode215").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode22------------------------------*/
					else if(document.getElementById("episode221").style.display == "inline")
					{
						bubble("episode222");
					}
					else if(document.getElementById("episode222").style.display == "inline")
					{
						bubble("episode223");
					}
					else if(document.getElementById("episode223").style.display == "inline")
					{
						document.getElementById("episode223").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode23------------------------------*/
					else if(document.getElementById("episode231").style.display == "inline")
					{
						bubble("episode232");
					}
					else if(document.getElementById("episode232").style.display == "inline")
					{
						bubble("episode233");
					}
					else if(document.getElementById("episode233").style.display == "inline")
					{
						document.getElementById("episode233").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode24------------------------------*/
					else if(document.getElementById("episode241").style.display == "inline")
					{
						bubble("episode242");
					}
					else if(document.getElementById("episode242").style.display == "inline")
					{
						bubble("episode243");
					}
					else if(document.getElementById("episode243").style.display == "inline")
					{
						document.getElementById("episode243").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/
					/*----------------------------bubble Episode25------------------------------*/
					else if(document.getElementById("episode251").style.display == "inline")
					{
						bubble("episode252");
					}
					else if(document.getElementById("episode252").style.display == "inline")
					{
						document.getElementById("episode252").style.display = "none";
						document.getElementById("bubble").style.display = "none";
						document.getElementById("instrucDialogue").style.display = "none";
					}
					/*---------------------------------------------------------------------------*/

					time2 = true;
					timeout = setTimeout(function()
					{
						time2 = false;
					}, 500)
				}
				
			}
			if (fired && !keys[32])
			{
				fired = false;
			}
		}
	}
	if (animation)
	{
		
		if(aniPorte1)
		{
			porteAnim(porte1, "porte1", "beatrice1", "li1", "lien1");
		}
		if(aniPorte2)
		{
			porteAnim(porte2, "porte2", "beatrice2", "li2", "lien2");
		}
		if(aniPorte3)
		{
			porteAnim(porte3, "porte3", "beatrice3", "li3", "lien3");
		}
		if(aniPorte4)
		{
			porteAnim(porte4, "porte4", "beatrice4", "li4", "lien4");
		}
		if(aniPorte5)
		{
			porteAnim(porte5, "porte5", "beatrice5", "li5", "lien5");
		}
		if(aniPorte6)
		{
			porteAnim(porte6, "porte6", "beatrice6", "li6", "lien6");
		}
	}
}


function pageLoad(Class, id)
{
	document.getElementById("bubble").style.display = "none";
	var pages = document.getElementsByClassName(Class);
	for(var i = 0; i < pages.length; i++)
	{
		
		if(pages[i].id == id)
		{
			if(id != "accueil")
			{
				setTimeout(function()
				{
					document.getElementById("accueil").style.display = "none";
				}, 1000);
			}
			
			if(id != "personnage")
			{
				setTimeout(function()
				{
					document.getElementById("personnage").style.display = "none";
				}, 1000);
			}
			if(id != "medias")
			{
				setTimeout(function()
				{
					document.getElementById("medias").style.display = "none";
				}, 1000);
			}
			if(id != "liens")
			{
				setTimeout(function()
				{
					document.getElementById("liens").style.display = "none";
					
				}, 1000);
			}
			if(id != "contact")
			{
				setTimeout(function()
				{
					document.getElementById("contact").style.display = "none";
				}, 1000);
			}
			if(id != "episodes")
			{
				setTimeout(function()
				{
					document.getElementById("episodes").style.display = "none";
				}, 1000);
			}
			
			
			pages[i].style.display = "block";
			var Element2 = pages[i];
			setTimeout(function test()
			{
				Element2.style.opacity = "1";
			}, 10);
			
		}
		else
		{
			pages[i].style.opacity = "0";
			var Element = pages[i];
			setTimeout(function()
			{
				Element.style.display = "none";
			}, 1000);
		}
	}
}

function pageLoadClick(Class, id)
{
	document.getElementById("bubble").style.display = "none";
	var pages = document.getElementsByClassName(Class);
	for(var i = 0; i < pages.length; i++)
	{
		
		if(pages[i].id == id)
		{
			if(id != "accueil")
			{
				setTimeout(function()
				{
					document.getElementById("accueil").style.display = "none";
				}, 1000);
			}
			
			if(id != "personnage")
			{
				setTimeout(function()
				{
					document.getElementById("personnage").style.display = "none";
				}, 1000);
			}
			if(id != "medias")
			{
				setTimeout(function()
				{
					document.getElementById("medias").style.display = "none";
				}, 1000);
			}
			if(id != "liens")
			{
				setTimeout(function()
				{
					document.getElementById("liens").style.display = "none";
					
				}, 1000);
			}
			if(id != "contact")
			{
				setTimeout(function()
				{
					document.getElementById("contact").style.display = "none";
				}, 1000);
			}
			if(id != "episodes")
			{
				setTimeout(function()
				{
					document.getElementById("episodes").style.display = "none";
				}, 1000);
			}
			
			
			var Element2 = pages[i];
			setTimeout(function test()
			{
				Element2.style.display = "block";
				setTimeout(function test()
				{
					Element2.style.opacity = "1";
				}, 10);
				
			}, 1000);
			
		}
		else
		{
			pages[i].style.opacity = "0";
			var Element = pages[i];
			setTimeout(function()
			{
				Element.style.display = "none";
			}, 1000);
		}
	}
}

function porteAnim(porte, porteId, beatrice, li ,lienId)
{
	var playerPos = {up: parseInt(document.getElementById("player").style.top), left: parseInt(document.getElementById("player").style.left), bottom: parseInt(document.getElementById("player").style.top) + 96, right: parseInt(document.getElementById("player").style.left) + 64};

	if(playerPos.bottom < porte.bottom && !doorEntered)  //dirige vers bas de porte
	{
		
		newPos = playerPos.up +1;
		document.getElementById("player").style.top = newPos + "px";
		if(time == false)
		{
		  movedown();
		  time = true;
		  timeout = setTimeout(function()
		  {
			  time = false;
		  }, 100)
		}
	}
	else if(playerPos.left > porte.right && !doorEntered) //dirige vers porte
	{
		newPos = playerPos.left -1;
		document.getElementById("player").style.left = newPos + "px";
		if(time == false)
		{
		  moveleft();
		  time = true;
		  timeout = setTimeout(function()
		  {
			  time = false;
		  }, 100)
		}
	}
	else if(parseInt(document.getElementById(porteId).style.marginLeft) > -372 && !doorOpened) // ouvre porte et fait apparaitre pièce
	{
		
		lastAnimFrame = parseInt(document.getElementById(porteId).style.marginLeft);
		if(time == false)
		{
			document.getElementById(porteId).style.marginLeft = lastAnimFrame - 124 + "px";
			time = true;
			timeout = setTimeout(function()
			{
			  time = false;
			}, 100)
		}
		document.getElementById(beatrice).style.opacity = "1";
		document.getElementsByTagName('style')[0].innerHTML= "#" + li + ":before{opacity:1}";
		document.getElementById(lienId).style.opacity = "0";
	}
	else if(playerPos.right > porte.right - 12 && !doorEntered) //entre dans la pièce
	{
		doorOpened = true;
		newPos = playerPos.left -1;
		document.getElementById("player").style.left = newPos + "px";
		if(time == false)
		{
		  moveleft();
		  time = true;
		  timeout = setTimeout(function()
		  {
			  time = false;
		  }, 100)
		}
	}
	else if(parseInt(document.getElementById(beatrice).style.marginLeft) > -288 && !beaFirstAnimFinish) //animation de béatrice
	{
		document.getElementById("contenu").style.background = "#000000";
		document.getElementById("accueil").style.opacity = "0";
		document.getElementById("personnage").style.opacity = "0";
		document.getElementById("medias").style.opacity = "0";
		document.getElementById("liens").style.opacity = "0";
		document.getElementById("contact").style.opacity = "0";
		document.getElementById("episodes").style.opacity = "0";
		
		doorEntered = true;
		document.getElementById("playerimg").style.marginLeft = "0px"
		lastAnimFrame = parseInt(document.getElementById(beatrice).style.marginLeft);
		
		if(time == false)
		{
			
			time = true;
			timeout = setTimeout(function()
			{
			  time = false;
			  document.getElementById(beatrice).style.marginLeft = lastAnimFrame - 96 + "px";
			}, 1000)
		}
	}
	else if(playerPos.left < porte.right + 200 || playerPos.up > porte.bottom - 100) //personnage revole
	{
		document.getElementById("accueil").style.display = "none";
		document.getElementById("personnage").style.display = "none";
		document.getElementById("medias").style.display = "none";
		document.getElementById("liens").style.display = "none";
		document.getElementById("contact").style.display = "none";
		document.getElementById("episodes").style.display = "none";
		
		
		document.getElementById("contenu").style.background = "linear-gradient(to right, #c81e2b,rgba(0,0,0,1),rgba(0,0,0,.95),rgba(0,0,0,.9),rgba(0,0,0,.95),rgba(0,0,0,1),#c81e2b)"; 
		document.getElementById("playerimg").style.display = "none";
		document.getElementById("revole").style.display = "block";
		if(playerPos.left < porte.right + 200)
		{
			newPos = playerPos.left + 20;
			document.getElementById("player").style.left = newPos + "px";
		}
		if(playerPos.up > porte.bottom - 200)
		{
			newPos = playerPos.up - 5;
			document.getElementById("player").style.top = newPos + "px";
		}
		
		if(lienId == "lien1")
		{
			pageLoad("pages", "accueil");
		}
		if(lienId == "lien2")
		{
			pageLoad("pages", "episodes");
		}
		if(lienId == "lien3")
		{
			pageLoad("pages", "personnage");
		}
		if(lienId == "lien4")
		{
			pageLoad("pages", "medias");
		}
		if(lienId == "lien5")
		{
			pageLoad("pages", "liens");
		}
		if(lienId == "lien6")
		{
			pageLoad("pages", "contact");
		}
	}
	else if(playerPos.right < w - 200)//personnage revole
	{
			newPos = playerPos.left + 20;
			document.getElementById("player").style.left = newPos + "px";
	}
	else if(playerPos.right < w)//personnage revole
	{
		if(playerPos.right < w)
		{
			newPos = playerPos.left + 20;
			document.getElementById("player").style.left = newPos + "px";
		}
		if(playerPos.bottom < porte.bottom)
		{
			newPos = playerPos.up + 5;
			document.getElementById("player").style.top = newPos + "px";
		}
		
	}
	else if(parseInt(document.getElementById(beatrice).style.marginLeft) < 0) //fini animation de béatrice
	{

		wallHit = true;
		if(parseInt(document.getElementById("revole").style.marginLeft) == 0)
		{
			wallHit2 = true;
		}
		
		beaFirstAnimFinish = true;
		lastAnimFrame = parseInt(document.getElementById(beatrice).style.marginLeft);
		
		if(time == false)
		{
			
			time = true;
			timeout = setTimeout(function()
			{
			  time = false;
			  document.getElementById(beatrice).style.marginLeft = lastAnimFrame + 96 + "px";
			}, 1000)
		}
	}
	else if(parseInt(document.getElementById(porteId).style.marginLeft) < 0) //ferme la porte
	{
		lastAnimFrame = parseInt(document.getElementById(porteId).style.marginLeft);
		if(time == false)
		{
			document.getElementById(porteId).style.marginLeft = lastAnimFrame + 124 + "px";
			time = true;
			timeout = setTimeout(function()
			{
			  time = false;
			}, 100)
		}
		
		
		
	}
	else //fait disparaitre pièce et réinitialise les variable
	{
		document.getElementById(lienId).style.opacity = "1";
		document.getElementById(beatrice).style.opacity = "0";
		document.getElementsByTagName('style')[0].innerHTML= "";
		animation = false;
		beaFirstAnimFinish = false;
		doorEntered = false;
		wallHit = false;
		wallHit2 = false;
		doorOpened = false;
		aniPorte1 = false;
		aniPorte2 = false;
		aniPorte3 = false;
		aniPorte4 = false;
		aniPorte5 = false;
		aniPorte6 = false;
		left = playerPos.left;
	}
	if(wallHit) //si le mur est frappé on change l'animation de subaru
	{
		if(wallHit2)
		{

			document.getElementById("revole").style.marginLeft = "-64px";
			wallHit2 = false;
		}
		if(time2 == false)
		{
			time2 = true;
			timeout = setTimeout(function()
			{
				newFrame = parseInt(document.getElementById("revole").style.marginLeft) - 64;
				if(newFrame == -256)
				{
					document.getElementById("revole").style.display = "none";
					document.getElementById("playerimg").style.display = "block";
					document.getElementById("playerimg").style.marginLeft = "0px";
					document.getElementById("revole").style.marginLeft = "0px";
					wallHit = false;
				}
				else
				{
					document.getElementById("revole").style.marginLeft = newFrame + "px";
				}
				time2 = false;
			  
			}, 500)
		}
	}

}

function instruction(instructionId)
{
	var playerPos = {up: parseInt(document.getElementById("player").style.top), left: parseInt(document.getElementById("player").style.left), bottom: parseInt(document.getElementById("player").style.top) + 96, right: parseInt(document.getElementById("player").style.left) + 64};

	var instructions = document.getElementsByClassName("instruction");
	for(var i = 0; i < instructions.length; i++)
	{
		if(instructions[i].id == instructionId)
		{
			instructions[i].style.display = "inline";
		}
		else
		{
			instructions[i].style.display = "none";
		}
	}
	instructionW = document.getElementById("instruction").offsetWidth;
	instructionH = document.getElementById("instruction").offsetHeight;
	playerPosLeft = document.getElementById("player").style.left;
	playerPosTop = document.getElementById("player").style.top;
	instructionMid = bubbleW/2;

	
	instructionPos = playerPos.left;
	document.getElementById("instruction").style.left = instructionPos  + "px";
	document.getElementById("instruction").style.top = parseInt(playerPosTop)-instructionH + "px";
}

/*function animationPorte()
{
	var playerPos = {up: parseInt(document.getElementById("player").style.top), left: parseInt(document.getElementById("player").style.left), bottom: parseInt(document.getElementById("player").style.top) + 96, right: parseInt(document.getElementById("player").style.left) + 64};
	for(i=0)
}*/

function bubble(dialogueId)
{
	
	
	var dialogues = document.getElementsByClassName("dialogue");
	for(var i = 0; i < dialogues.length; i++)
	{
		if(dialogues[i].id == dialogueId)
		{
			dialogues[i].style.display = "inline";
		}
		else
		{
			dialogues[i].style.display = "none";
		}
	}
	bubbleW = document.getElementById("bubble").offsetWidth;
	bubbleH = document.getElementById("bubble").offsetHeight;
	playerPosLeft = document.getElementById("player").style.left;
	playerPosTop = document.getElementById("player").style.top;
	bubbleMid = bubbleW/2;
	instruction("instrucDialogue");
	
	bubblePos = parseInt(playerPosLeft)-bubbleMid;
	document.getElementById("bubble").style.left = bubblePos  + "px";
	document.getElementById("bubble").style.top = parseInt(playerPosTop)-bubbleH-30 + "px";
}

function movedown()
{
	document.getElementById("playerimg").style.marginTop = "0px";
	var margin = i * 64;
	document.getElementById("playerimg").style.marginLeft = -margin + "px";
	document.getElementById("playerspeak").style.marginLeft = -margin + "px";
	if (i*64 == 256)
	{
		document.getElementById("playerimg").style.marginLeft = "0px";
		document.getElementById("playerspeak").style.marginLeft = "0px";
		i = 0;
	}
	i++;
}
function moveleft()
{
	document.getElementById("playerimg").style.marginTop = "-96px";
	var margin = i * 64;
	document.getElementById("playerimg").style.marginLeft = -margin + "px";
	if (i*64 == 256)
	{
		document.getElementById("playerimg").style.marginLeft = "0px";
		i = 0;
	}
	i++;
}
function moveright()
{
	document.getElementById("playerimg").style.marginTop = "-191px";
	var margin = i * 64;
	document.getElementById("playerimg").style.marginLeft = -margin + "px";
	if (i*64 == 256)
	{
		document.getElementById("playerimg").style.marginLeft = "0px";
		i = 0;
	}
	i++;
}
function moveup()
{
	document.getElementById("playerimg").style.marginTop = "-289px";
	var margin = i * 64;
	document.getElementById("playerimg").style.marginLeft = -margin + "px";
	if (i*64 == 256)
	{
		document.getElementById("playerimg").style.marginLeft = "0px";
		i = 0;
	}
	i++;
}


window.onload = function(){
	window.body.onkeydown = function(e) //empêche la barre d'espacement et flêches de faire défilé la page
	{
		if(e.keyCode == 32 && e.target == document.body || e.keyCode == 37 && e.target == document.body || e.keyCode == 38 && e.target == document.body || e.keyCode == 39 && e.target == document.body || e.keyCode == 40 && e.target == document.body) 
		{
			e.preventDefault();
			return false;
		}
	}
	
	var contenuW = document.getElementById("contenu").offsetWidth;
	var contenuH = document.getElementById("contenu").offsetHeight;
	document.getElementById("contenuMainScreen").style.left = contenuW/2+50 +"px"; //position image acceuil
	document.getElementById("contenuMainScreen").style.top = contenuH/2-256-50 +"px";
	
	
	document.getElementById("player").style.left = w/2+110 + "px"; //place le personnage au milieu de la page au démarrage
	document.getElementById("player").style.top = h/2-256-48 + "px";
	
	var rect1 = document.getElementById("cadre1").getBoundingClientRect(); //donne la position top right bottom et left d'un élément.
	var rect2 = document.getElementById("cadre2").getBoundingClientRect();
	var rect3 = document.getElementById("cadre3").getBoundingClientRect();
	var rect4 = document.getElementById("cadre4").getBoundingClientRect();
	var rect5 = document.getElementById("cadre5").getBoundingClientRect();
	var rect6 = document.getElementById("cadre6").getBoundingClientRect();
	porte1 = {up: rect1.top, right: rect1.right, bottom: rect1.bottom};
	porte2 = {up: rect2.top, right: rect2.right, bottom: rect2.bottom};
	porte3 = {up: rect3.top, right: rect3.right, bottom: rect3.bottom};
	porte4 = {up: rect4.top, right: rect4.right, bottom: rect4.bottom};
	porte5 = {up: rect5.top, right: rect5.right, bottom: rect5.bottom};
	porte6 = {up: rect6.top, right: rect6.right, bottom: rect6.bottom};
	
	
	$(document).keydown(function(event)
	{
		keys[event.which] = true;
	}).keyup(function(event)
	{
		document.getElementById("playerimg").style.marginLeft = "0px";
		delete keys[event.which];
	});
	
	bubble("intro2");
	instruction("instrucDialogue");
	setInterval(function()
	{
		game();
	}, 20);
}
