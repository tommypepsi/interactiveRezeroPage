// Auteur : Christian Lépine
//
// Permet de faire la validation d'un formulaire html
//
// 1 - Ajouter dans la section <HEAD>:
// <script src="Validation.js"></script>
//
// 2 - Ajouter à la balise <form ...  onSubmit="return validation(this)">
//
// 3 - Déclarer une classe aux éléments du formulaire selon :
//
// class="vide"		Permet de s'assurer que l'élément n'est pas vide
// class="telephone"	Permet de valider un numéro de téléphone 
// class="courriel"	Permet de valider un courriel
// class="codepostal"	Permet de valider un code postal
// class="radio"	Permet de valider qu'au moins 1 option est sélectionné
// class="coche"	Permet de valider qu'au moins 1 case est cochée
//
//


function validation(MonFormulaire)
{
	var raison="";
	
	raison += detect(document.getElementsByClassName("vide"),vide,raison);
	raison += detect(document.getElementsByClassName("telephone"),telephone,raison);
	raison += detect(document.getElementsByClassName("courriel"),courriel,raison);
	raison += detect(document.getElementsByClassName("codepostal"),codepostal,raison);

	
	if (raison != "") {
		alert("Il y a des erreurs!\n" + raison);
		return false;
		}
}

function detect(objet,fonction, raison) {
	var raison ="";
	for (index = 0; index < objet.length; ++index)
	{
		raison += fonction(objet[index]);
	}
	
	return raison;
}
	
function blanc(champ)
{
    champ.style.background = 'White';    
}

function espace(s)
{
	return s.replace(/^\s+|\s+$/, '');
}

function courriel(champ)
{
	var erreur="";
	champ.value = espace(champ.value);
	var filtre = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
	var Carillegal= /[\(\)\<\>\,\;\:\\\"\[\]]/;
   
	if (champ.value.length < 1)
	{
		champ.style.background = 'Red';
        erreur = "Vous devez entrer une adresse de courriel.\n";
	}
	else if (filtre.test(champ.value))
	{
	    champ.style.background = 'White';    
	}
	else if (champ.value.match(Carillegal))
	{
	    champ.style.background = 'orange';
	    erreur = "Le courriel contient des caractères illégaux.\n";
	}
	else
	{
	    champ.style.background = 'Yellow';
	    erreur = "Courriel non valide.\n";
	}

	return erreur;

}

function telephone(champ)
{
	var erreur = "";
	var filtre = /^([0-9]{1})*[- .(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4}$/;

	if (champ.value.length < 1)
	{
		erreur = "Vous devez entrer un numéro de téléphone.\n";
        champ.style.background = 'Red';
	}
	else if (filtre.test(champ.value))
	{
		champ.style.background = 'White';
	}
	else
	{
        erreur = "Vous devez inclure le code régional dans le numéro de téléphone ou il contient des caractères illégaux.\n";
        champ.style.background = 'Yellow';
	}
    
	return erreur;
}

function codepostal(champ)
{
	var erreur = "";
	champ.value = champ.value.toUpperCase();
	var  filtre = /^[ABCEGHJKLMNPRSTVXY][0-9][A-Z] [0-9][A-Z][0-9]$/;

	if (champ.value.length < 1)
	{
		erreur = "Vous devez entrer un code postal.\n";
	    champ.style.background = 'Red';
	}
	else if (filtre.test(champ.value))
	{
		champ.style.background = 'White';
	}
	else
	{
		erreur = "Le code postal n'est pas valide.\n";
		champ.style.background = 'Yellow';
	}
    return erreur;
}

function coche(champ)
{
	erreur = 'Au moins une case ' + champ[0].name + ' doit être cochée\n';
	i = 0;
        
        while (i < champ.length) {
        if (champ[i].checked) {erreur = "";}
        i++;        
    }
	
	return erreur;  
}

function radio(champ)
{
	erreur = 'Au moins une option ' + champ[0].name + ' doit être sélectionée\n';
	i = 0;
        
        while (i < champ.length) {
        if (champ[i].checked) {erreur = "";}
        i++;        
    }
	
	return erreur;  
}

function vide(champ)
{
	var erreur = "";
 
	if (champ.value.length < 1)
	{
		champ.style.background = 'Red';
		erreur = 'le champ ' + champ.name + ' ne peut pas être vide\n';
	}
	else
	{
        champ.style.background = 'White';
	}
	return erreur;  
}


function IsNumeric(number){
    return (/^[0-9]+$/.test(number));
}

function IsIP(ip){
	return (/^(([0-2]*[0-9]+[0-9]+)\.([0-2]*[0-9]+[0-9]+)\.([0-2]*[0-9]+[0-9]+)\.([0-2]*[0-9]+[0-9]+))$/.test(ip));
}

function IsURL(string){
    return (/^(((ht|f)tp(s?))\:\/\/)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?$/.test(string.toLowerCase()));
}

function IsPhone(number){
    return (/^\d{3}-\d{3}-\d{4}$/.test(number));
}