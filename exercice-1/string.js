//Commit: [done] exercice 1
String.prototype.replaceAll = function(search, replacement) {
	    var target = this;
	    return target.replace(new RegExp(search, 'g'), replacement);
};


function isString(mot){
	if(typeof mot === 'string'){
		return true;
	}
	throw { 
		  name:        "Custom error", 
		  level:       "Show Stopper", 
		  message:     "Il faut passer un String en parametre", 
		  htmlMessage: "Il faut passer un String en parametre",
		  toString:    function(){return this.name + ": " + this.message;} 
	}; 
	return false;
}

function isUndefined(mot){
	if(typeof mot !== 'undefined'){
		return true;
	}
	throw { 
		  name:        "Custom error", 
		  level:       "Show Stopper", 
		  message:     "Il faut passer quelque chose en parametre", 
		  htmlMessage: "Il faut passer quelque chose en parametre",
		  toString:    function(){return this.name + ": " + this.message;} 
	}; 
	return false;
}
console.log(" \n ");

function ucfirst(mot){
		isString(mot)
		res = mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase();
		return res;
	
		
};
console.log("ucfirst -> " + ucfirst("hello word"));


function capitalize(mot){
		isString(mot)
		var text = mot.split(" ");
		var tab = [];
		for (var unMot of text){
			final = unMot.charAt(0).toUpperCase() + unMot.slice(1).toLowerCase();
			tab.push(final);
		}
	return tab.join(" ");

	
}
console.log("capitalize -> " +capitalize("hello word"));

function camelCase(mot){
	isString(mot)

	capital = capitalize(mot);
	capital = capital.replace(/\s/g, "");

	return capital;

}
console.log("camelCase -> " +camelCase("hello word"));


function snake_case(mot){
	if(isString(mot)){
		mot = mot.toLowerCase()
		splitMot = mot.split(" ");
		return splitMot.join("_");
	}
	return false;
}
console.log("snake_case -> " +snake_case("hello word"));

function prop_access(prairie, string){
		isUndefined(string);
		isUndefined(prairie);

		listProp = string.split('.');
		var temps = prairie;

		for (x in listProp){
			if(temps.hasOwnProperty(listProp[x])){
				 temps = temps[listProp[x]];
			}else {
				return null;
			}
		}
		return temps = temps;
	
}
var toto = {
	animal: {
		type: {
			name: "chien"
		}
	}
};
console.log("prop_access -> " +prop_access(toto, "animal.type.name"));

function leet(mot){
	isString(mot);
 	mot = mot.toLowerCase();
 	leetArray = { a: "4", e:"3", i:"1", o:"0", u:"(_)", y:"7"}
 	var Newmot = "";

 	for(x in leetArray){
 		 mot = mot.replaceAll(x, leetArray[x]);
 	}

 	return mot;
}
console.log("leet -> " +leet("aNimal type name"));


function verlan(mot){
	isString(mot);
	return mot.split("").reverse().join("").split(" ").reverse().join(" ");
}
console.log("verlan -> " +verlan("Hello world"));

function yoda(mot){
	isString(mot);
	return mot.split(' ').reverse().join(" ");
}
console.log("yoda -> " +yoda("Hello world"));

function vig(mot, key) {
	isString(mot);
	isString(key);

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    key = key.toUpperCase();
    let letters = mot.toUpperCase().split("");
    let count = 0;
    letters = letters.map((letter) => {
        if (alphabet.includes(letter)) {
            letter = String.fromCharCode((letter.charCodeAt(0) - 65 + key[count % key.length].charCodeAt(0) - 65) % 26 + 65);
            count++;
        }

        return letter;
    });

    return letters.join("").toLowerCase();
}
console.log("vig -> " +vig("Hello world", '12'));