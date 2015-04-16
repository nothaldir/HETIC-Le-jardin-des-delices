//jQuery
$(document).ready(function(){

// Position et animations du +1
var x = 0;
var y = 0;

   $(document).mousemove(function(e){
      x=(e.pageX);
      y=(e.pageY);
      $('#plus1').css("top", y+25);
      $('#plus1').css("left", x+35);
   }); 

  $( ".image_clic" ).mousedown(function() {
    $( "#plus1" ).fadeIn(50);
  });

  $( ".image_clic" ).mouseup(function() {
    $( "#plus1" ).fadeOut(50);
  });



// Animation click
$('.img-zoom').hover(function() {
        $(this).addClass('transition');
 
      }, function() {
        $(this).removeClass('transition');
      });

$( ".img-zoom" )
  .mouseup(function() {
    $( this ).addClass('transition');
  })
  .mousedown(function() {
    $( this ).removeClass('transition');
  });



// Texte du +1
$("img[alt='pomme']").mouseover(function(e) {
  $("#plus1").html("+1 pomme !")
});

$("img[alt='carotte']").mouseover(function(e) {
  $("#plus1").html("+1 carotte !")
});

$("img[alt='mangue']").mouseover(function(e) {
  $("#plus1").html("+1 mangue !")
});

$("img[alt='chou']").mouseover(function(e) {
  $("#plus1").html("+1 chou !")
});

$("img[alt='kiwi']").mouseover(function(e) {
  $("#plus1").html("+1 kiwi !")
});

$("img[alt='radis']").mouseover(function(e) {
  $("#plus1").html("+1 radis !")
});




// Dérouler upgrades
$(".up1").click(function() {
    $(".amelio1").slideToggle(300);
    $(".amelio2, .amelio3, .amelio4, .amelio5, .amelio6").css('display', 'none');
});

$(".up2").click(function() {
    $(".amelio2").slideToggle(300);
    $(".amelio1, .amelio3, .amelio4, .amelio5, .amelio6").css('display', 'none')
});

$(".up3").click(function() {
    $(".amelio3").slideToggle(300);
    $(".amelio2, .amelio1, .amelio4, .amelio5, .amelio6").css('display', 'none')    
});

$(".up4").click(function() {
    $(".amelio4").slideToggle(300);
    $(".amelio2, .amelio3, .amelio1, .amelio5, .amelio6").css('display', 'none')    
});

$(".up5").click(function() {
    $(".amelio5").slideToggle(300);
    $(".amelio2, .amelio3, .amelio4, .amelio1, .amelio6").css('display', 'none')    
});

$(".up6").click(function() {
    $(".amelio6").slideToggle(300);
    $(".amelio2, .amelio3, .amelio4, .amelio5, .amelio1").css('display', 'none')    
});

});



// POP-UPS

$( "button" ).click(function() {
  $( ".hide" ).slideToggle( "slow" );
});

var popID = null;


//Lorsque vous cliquez sur un lien de la classe poplight et que le href commence par #
$('a.poplight[href^=#]').click(function() {
    popID = $(this).attr('rel'); //Trouver la pop-up correspondante
    var popURL = $(this).attr('href'); //Retrouver la largeur dans le href

    //Récupérer les variables depuis le lien
    var query= popURL.split('?');
    var dim= query[1].split('&amp;');
    var popWidth = dim[0].split('=')[1]; //La première valeur du lien

    //Faire apparaitre la pop-up
    $('#' + popID).fadeIn().css({
        'width': Number(popWidth)
    })

    //Récupération du margin, qui permettra de centrer la fenêtre - on ajuste de 80px en conformité avec le CSS
    var popMargTop = ($('#' + popID).height() + 80) / 2;
    var popMargLeft = ($('#' + popID).width() + 80) / 2;

    //On affecte le margin
    $('#' + popID).css({
        'margin-top' : -popMargTop,
        'margin-left' : -popMargLeft
    });

    //Effet fade-in du fond opaque
    if( $('#' + popID).hasClass("popup_block") )
    {
        $('body').append('<div id="fade"></div>'); //Ajout du fond opaque noir
        //Apparition du fond - .css({'filter' : 'alpha(opacity=80)'}) pour corriger les bogues de IE
        $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
    }
    
    return false;
});

//Fermeture de la pop-up et du fond
$('body').on('click', 'a.close, #fade', function() { //Au clic sur le body...
        $('#fade , .popup_block').fadeOut(function() {
            $('#fade, a.close').remove();
            $('#' + popID).remove();
            $('#' + popID).remove();            
        }); //...ils disparaissent ensemble
        
        return false;
    });







// Ressources
var pommes = 0;
var carottes = 0;
var mangues = 0;
var choux = 0;
var kiwis = 0;
var radis = 0; 

var total = 0;

// Images pour jardin
var potager = document.getElementById('jardin');
var champ = document.getElementById('jardin');
var exploit = document.getElementById('jardin');

// Fonctions Pommes
function PommeClick(number){
    pommes = pommes + number;
    document.getElementById("pommes").innerHTML = pommes;
};

var NbPotagerPomme = 0;
var NbChampPomme = 0;
var NbExploitPomme = 0;
var prodPomme = 0;


function clickPotagerPomme(){
    var potagerPommeCost = Math.floor(10 * Math.pow(1.1,NbPotagerPomme));      
    if(pommes >= potagerPommeCost){                                            
        NbPotagerPomme = NbPotagerPomme + 1;                                   
    	  pommes = pommes - potagerPommeCost;                                    
        prodPomme = prodPomme + 1
        document.getElementById('potagerPomme').innerHTML = "Quantité : " + NbPotagerPomme;  
        document.getElementById('pommes').innerHTML = pommes;                  
        potager.innerHTML = potager.innerHTML + "<img class='small' src='images/potager.png' />";          
        document.getElementById('prodPomme').innerHTML = prodPomme + "/sec";
        document.getElementById('check1').setAttribute("href", "#?w=500");
    }
    else
    {
        document.getElementById('check1').removeAttribute('href');
    }
    
    var nextCostPotagerPomme = Math.floor(10 * Math.pow(1.1,NbPotagerPomme));               
    document.getElementById('potagerPommeCost').innerHTML = "Coût : " + nextCostPotagerPomme ;  
};

function clickChampPomme(){
    var champPommeCost = Math.floor(100 * Math.pow(1.2,NbChampPomme));      
    if(pommes >= champPommeCost){                                           
        NbChampPomme = NbChampPomme + 1;                                   
        pommes = pommes - champPommeCost;                                    
        prodPomme = prodPomme + 2
        document.getElementById('champPomme').innerHTML = "Quantité : " + NbChampPomme;  
        document.getElementById('pommes').innerHTML = pommes;                  
        champ.innerHTML = champ.innerHTML + "<img class='small' src='images/champ.png' />";          
        document.getElementById('prodPomme').innerHTML = prodPomme + "/sec";
        document.getElementById('check2').setAttribute("href", "#?w=500");
    }
    else
    {
        document.getElementById('check2').removeAttribute('href');
    }

    
    var nextCostChampPomme = Math.floor(100 * Math.pow(1.2,NbChampPomme));               
    document.getElementById('champPommeCost').innerHTML = "Coût : " + nextCostChampPomme ;  
};

function clickExploitPomme(){
    var exploitPommeCost = Math.floor(300 * Math.pow(1.3,NbExploitPomme));      
    if(pommes >= exploitPommeCost){                                            
        NbExploitPomme = NbExploitPomme + 1;                                   
        pommes = pommes - exploitPommeCost;                                    
        prodPomme = prodPomme + 4
        document.getElementById('exploitPomme').innerHTML = "Quantité : " + NbExploitPomme;  
        document.getElementById('pommes').innerHTML = pommes;                  
        exploit.innerHTML = exploit.innerHTML + "<img class='small' src='images/exploitation.png' />";          
        document.getElementById('prodPomme').innerHTML = prodPomme + "/sec";
        document.getElementById('check3').setAttribute("href", "#?w=500");
    }
    else
    {
        document.getElementById('check3').removeAttribute('href');
    }
    
    var nextCostExploitPomme = Math.floor(300 * Math.pow(1.3,NbExploitPomme));               
    document.getElementById('exploitPommeCost').innerHTML = "Coût : " + nextCostExploitPomme ;  
};

window.setInterval(function(){
	
	PommeClick(NbPotagerPomme);
	
}, 1000);

window.setInterval(function(){
  
  PommeClick(NbChampPomme);
  
}, 500);

window.setInterval(function(){
  
  PommeClick(NbExploitPomme);
  
}, 250);


// Fonctions Carotte

function CarotteClick(number){
    carottes = carottes + number;
    document.getElementById("carottes").innerHTML = carottes;
};

var NbPotagerCarotte = 0;
var NbChampCarotte = 0;
var NbExploitCarotte = 0;
var prodCarotte = 0;

function clickPotagerCarotte(){
    var potagerCarotteCost = Math.floor(10 * Math.pow(1.1,NbPotagerCarotte));      
    if(carottes >= potagerCarotteCost){                                            
        NbPotagerCarotte = NbPotagerCarotte + 1;                                   
          carottes = carottes - potagerCarotteCost;                                    
        prodCarotte = prodCarotte + 1
        document.getElementById('potagerCarotte').innerHTML = "Quantité : " + NbPotagerCarotte;  
        document.getElementById('carottes').innerHTML = carottes;                  
        potager.innerHTML = potager.innerHTML + "<img class='small' src='images/potager.png' />";          
        document.getElementById('prodCarotte').innerHTML = prodCarotte + "/sec";
        document.getElementById('check4').setAttribute("href", "#?w=500");
    }
    else
    {
        document.getElementById('check4').removeAttribute('href');
    }
    
    var nextCostPotagerCarotte = Math.floor(10 * Math.pow(1.1,NbPotagerCarotte));               
    document.getElementById('potagerCarotteCost').innerHTML = "Coût : " + nextCostPotagerCarotte ;  
};

function clickChampCarotte(){
    var champCarotteCost = Math.floor(100 * Math.pow(1.2,NbChampCarotte));      
    if(carottes >= champCarotteCost){                                            
        NbChampCarotte = NbChampCarotte + 1;                                   
        carottes = carottes - champCarotteCost;                                    
        prodCarotte = prodCarotte + 2
        document.getElementById('champCarotte').innerHTML = "Quantité : " + NbChampCarotte;  
        document.getElementById('carottes').innerHTML = carottes;                  
        champ.innerHTML = champ.innerHTML + "<img class='small' src='images/champ.png' />";          
        document.getElementById('prodCarotte').innerHTML = prodCarotte + "/sec";
        document.getElementById('check5').setAttribute("href", "#?w=500");
    }
    else
    {
        document.getElementById('check5').removeAttribute('href');
    }
    
    var nextCostChampCarotte = Math.floor(100 * Math.pow(1.2,NbChampCarotte));               
    document.getElementById('champCarotteCost').innerHTML = "Coût : " + nextCostChampCarotte ;  
};

function clickExploitCarotte(){
    var exploitCarotteCost = Math.floor(300 * Math.pow(1.3,NbExploitCarotte));      
    if(carottes >= exploitCarotteCost){                                            
        NbExploitCarotte = NbExploitCarotte + 1;                                   
        carottes = carottes - exploitCarotteCost;                                    
        prodCarotte = prodCarotte + 4
        document.getElementById('exploitCarotte').innerHTML = "Quantité : " + NbExploitCarotte;  
        document.getElementById('carottes').innerHTML = carottes;                  
        exploit.innerHTML = exploit.innerHTML + "<img class='small' src='images/exploitation.png' />";          
        document.getElementById('prodCarotte').innerHTML = prodCarotte + "/sec";
        document.getElementById('check6').setAttribute("href", "#?w=500");
    }
    else
    {
        document.getElementById('check6').removeAttribute('href');
    }
    
    var nextCostExploitCarotte = Math.floor(300 * Math.pow(1.3,NbExploitCarotte));               
    document.getElementById('exploitCarotteCost').innerHTML = "Coût : " + nextCostExploitCarotte ;  
};


window.setInterval(function(){
    
    CarotteClick(NbPotagerCarotte);
    
}, 1000);

window.setInterval(function(){
  
  CarotteClick(NbChampCarotte);
  
}, 500);

window.setInterval(function(){
  
  CarotteClick(NbExploitCarotte);
  
}, 250);


// Fonctions Mangue

function MangueClick(number){
    mangues = mangues + number;
    document.getElementById("mangues").innerHTML = mangues;
};

var NbPotagerMangue = 0;
var NbChampMangue = 0;
var NbExploitMangue = 0;
var prodMangue = 0;

function clickPotagerMangue(){
    var potagerMangueCost = Math.floor(10 * Math.pow(1.1,NbPotagerMangue));      
    if(mangues >= potagerMangueCost){                                            
        NbPotagerMangue = NbPotagerMangue + 1;                                   
        mangues = mangues - potagerMangueCost;                                    
        prodMangue = prodMangue + 1
        document.getElementById('potagerMangue').innerHTML = "Quantité : " + NbPotagerMangue;  
        document.getElementById('mangues').innerHTML = mangues;                  
        potager.innerHTML = potager.innerHTML + "<img class='small' src='images/potager.png' />";          
        document.getElementById('prodMangue').innerHTML = prodMangue + "/sec";
        document.getElementById('check7').setAttribute("href", "#?w=500");
    }
    else
    {
        document.getElementById('check7').removeAttribute('href');
    }
    
    var nextCostPotagerMangue = Math.floor(10 * Math.pow(1.1,NbPotagerMangue));               
    document.getElementById('potagerMangueCost').innerHTML = "Coût : " + nextCostPotagerMangue ;  
};

function clickChampMangue(){
    var champMangueCost = Math.floor(100 * Math.pow(1.2,NbChampMangue));      
    if(mangues >= champMangueCost){                                            
        NbChampMangue = NbChampMangue + 1;                                   
        mangues = mangues - champMangueCost;                                    
        prodMangue = prodMangue + 2
        document.getElementById('champMangue').innerHTML = "Quantité : " + NbChampMangue;  
        document.getElementById('mangues').innerHTML = mangues;                  
        champ.innerHTML = champ.innerHTML + "<img class='small' src='images/champ.png' />";          
        document.getElementById('prodMangue').innerHTML = prodMangue + "/sec";
        document.getElementById('check8').setAttribute("href", "#?w=500");
    }
    else
    {
        document.getElementById('check8').removeAttribute('href');
    }
    
    var nextCostChampMangue = Math.floor(100 * Math.pow(1.2,NbChampMangue));               
    document.getElementById('champMangueCost').innerHTML = "Coût : " + nextCostChampMangue ;  
};

function clickExploitMangue(){
    var exploitMangueCost = Math.floor(300 * Math.pow(1.3,NbExploitMangue));      
    if(mangues >= exploitMangueCost){                                            
        NbExploitMangue = NbExploitMangue + 1;                                   
        mangues = mangues - exploitMangueCost;                                    
        prodMangue = prodMangue + 4
        document.getElementById('exploitMangue').innerHTML = "Quantité : " + NbExploitMangue;  
        document.getElementById('mangues').innerHTML = mangues;                  
        exploit.innerHTML = exploit.innerHTML + "<img class='small' src='images/exploitation.png' />";          
        document.getElementById('prodMangue').innerHTML = prodMangue + "/sec";
        document.getElementById('check9').setAttribute("href", "#?w=500");
    }
    else
    {
        document.getElementById('check9').removeAttribute('href');
    }
    
    var nextCostExploitMangue = Math.floor(300 * Math.pow(1.3,NbExploitMangue));               
    document.getElementById('exploitMangueCost').innerHTML = "Coût : " + nextCostExploitMangue ;  
};


window.setInterval(function(){
  
  MangueClick(NbPotagerMangue);
  
}, 1000);

window.setInterval(function(){
  
  MangueClick(NbChampMangue);
  
}, 500);

window.setInterval(function(){
  
  MangueClick(NbExploitMangue);
  
}, 250);


// Fonctions chou

function ChouClick(number){
    choux = choux + number;
    document.getElementById("choux").innerHTML = choux;
};

var NbPotagerChou = 0;
var NbChampChou = 0;
var NbExploitChou = 0;
var prodChou = 0;

function clickPotagerChou(){
    var potagerChouCost = Math.floor(10 * Math.pow(1.1,NbPotagerChou));      
    if(choux >= potagerChouCost){                                            
        NbPotagerChou = NbPotagerChou + 1;                                   
        choux = choux - potagerChouCost;                                    
        prodChou = prodChou + 1
        document.getElementById('potagerChou').innerHTML = "Quantité : " + NbPotagerChou;  
        document.getElementById('choux').innerHTML = choux;                  
        potager.innerHTML = potager.innerHTML + "<img class='small' src='images/potager.png' />";          
        document.getElementById('prodChou').innerHTML = prodChou + "/sec";
        document.getElementById('check10').setAttribute("href", "#?w=500");
    }
    else
    {
        document.getElementById('check10').removeAttribute('href');
    }
    
    var nextCostPotagerChou = Math.floor(10 * Math.pow(1.1,NbPotagerChou));               
    document.getElementById('potagerChouCost').innerHTML = "Coût : " + nextCostPotagerChou ;  
};

function clickChampChou(){
    var champChouCost = Math.floor(100 * Math.pow(1.2,NbChampChou));      
    if(choux >= champChouCost){                                            
        NbChampChou = NbChampChou + 1;                                   
        choux = choux - champChouCost;                                    
        prodChou = prodChou + 2
        document.getElementById('champChou').innerHTML = "Quantité : " + NbChampChou;  
        document.getElementById('choux').innerHTML = choux;                  
        champ.innerHTML = champ.innerHTML + "<img class='small' src='images/champ.png' />";          
        document.getElementById('prodChou').innerHTML = prodChou + "/sec";
        document.getElementById('check11').setAttribute("href", "#?w=500");
    }
    else
    {
        document.getElementById('check11').removeAttribute('href');
    }
    
    var nextCostChampChou = Math.floor(100 * Math.pow(1.2,NbChampChou));               
    document.getElementById('champChouCost').innerHTML = "Coût : " + nextCostChampChou ;  
};

function clickExploitChou(){
    var exploitChouCost = Math.floor(300 * Math.pow(1.3,NbExploitChou));      
    if(choux >= exploitChouCost){                                            
        NbExploitChou = NbExploitChou + 1;                                   
        choux = choux - exploitChouCost;                                    
        prodChou = prodChou + 4
        document.getElementById('exploitChou').innerHTML = "Quantité : " + NbExploitChou;  
        document.getElementById('choux').innerHTML = choux;                  
        exploit.innerHTML = exploit.innerHTML + "<img class='small' src='images/exploitation.png' />";          
        document.getElementById('prodChou').innerHTML = prodChou + "/sec";
        document.getElementById('check12').setAttribute("href", "#?w=500");
    }
    else
    {
        document.getElementById('check12').removeAttribute('href');
    }
    
    var nextCostExploitChou = Math.floor(300 * Math.pow(1.3,NbExploitChou));               
    document.getElementById('exploitChouCost').innerHTML = "Coût : " + nextCostExploitChou ;  
};


window.setInterval(function(){
  
  ChouClick(NbPotagerChou);
  
}, 1000);

window.setInterval(function(){
  
  ChouClick(NbChampChou);
  
}, 500);

window.setInterval(function(){
  
  ChouClick(NbExploitChou);
  
}, 250);


// Fonctions kiwi

function KiwiClick(number){
    kiwis = kiwis + number;
    document.getElementById("kiwis").innerHTML = kiwis;
};

var NbPotagerKiwi = 0;
var NbChampKiwi = 0;
var NbExploitKiwi = 0;
var prodKiwi = 0;

function clickPotagerKiwi(){
    var potagerKiwiCost = Math.floor(10 * Math.pow(1.1,NbPotagerKiwi));      
    if(kiwis >= potagerKiwiCost){                                            
        NbPotagerKiwi = NbPotagerKiwi + 1;                                   
        kiwis = kiwis - potagerKiwiCost;                                    
        prodKiwi = prodKiwi + 1
        document.getElementById('potagerKiwi').innerHTML = "Quantité : " + NbPotagerKiwi;  
        document.getElementById('kiwis').innerHTML = kiwis;                  
        potager.innerHTML = potager.innerHTML + "<img class='small' src='images/potager.png' />";          
        document.getElementById('prodKiwi').innerHTML = prodKiwi + "/sec";
        document.getElementById('check13').setAttribute("href", "#?w=500");
    }
    else
    {
        document.getElementById('check13').removeAttribute('href');
    }
    
    var nextCostPotagerKiwi = Math.floor(10 * Math.pow(1.1,NbPotagerKiwi));               
    document.getElementById('potagerKiwiCost').innerHTML = "Coût : " + nextCostPotagerKiwi ;  
};

function clickChampKiwi(){
    var champKiwiCost = Math.floor(100 * Math.pow(1.2,NbChampKiwi));      
    if(kiwis >= champKiwiCost){                                            
        NbChampKiwi = NbChampKiwi + 1;                                   
        kiwis = kiwis - champKiwiCost;                                    
        prodKiwi = prodKiwi + 2
        document.getElementById('champKiwi').innerHTML = "Quantité : " + NbChampKiwi;  
        document.getElementById('kiwis').innerHTML = kiwis;                  
        champ.innerHTML = champ.innerHTML + "<img class='small' src='images/champ.png' />";          
        document.getElementById('prodKiwi').innerHTML = prodKiwi + "/sec";
        document.getElementById('check14').setAttribute("href", "#?w=500");
    }
    else
    {
        document.getElementById('check14').removeAttribute('href');
    }
    
    var nextCostChampKiwi = Math.floor(100 * Math.pow(1.2,NbChampKiwi));               
    document.getElementById('champKiwiCost').innerHTML = "Coût : " + nextCostChampKiwi ;  
};

function clickExploitKiwi(){
    var exploitKiwiCost = Math.floor(300 * Math.pow(1.3,NbExploitKiwi));      
    if(kiwis >= exploitKiwiCost){                                            
        NbExploitKiwi = NbExploitKiwi + 1;                                   
        kiwis = kiwis - exploitKiwiCost;                                    
        prodKiwi = prodKiwi + 4
        document.getElementById('exploitKiwi').innerHTML = "Quantité : " + NbExploitKiwi;  
        document.getElementById('kiwis').innerHTML = kiwis;                  
        exploit.innerHTML = exploit.innerHTML + "<img class='small' src='images/exploitation.png' />";          
        document.getElementById('prodKiwi').innerHTML = prodKiwi + "/sec";
        document.getElementById('check15').setAttribute("href", "#?w=500");
    }
    else
    {
        document.getElementById('check15').removeAttribute('href');
    }
    
    var nextCostExploitKiwi = Math.floor(300 * Math.pow(1.3,NbExploitKiwi));               
    document.getElementById('exploitKiwiCost').innerHTML = "Coût : " + nextCostExploitKiwi ;  
};


window.setInterval(function(){
  
  KiwiClick(NbPotagerKiwi);
  
}, 1000);

window.setInterval(function(){
  
  KiwiClick(NbChampKiwi);
  
}, 500);

window.setInterval(function(){
  
  KiwiClick(NbExploitKiwi);
  
}, 250);


// Fonctions Radi

function RadiClick(number){
    radis = radis + number;
    document.getElementById("radis").innerHTML = radis;
};

var NbPotagerRadi = 0;
var NbChampRadi = 0;
var NbExploitRadi = 0;
var prodRadi = 0;

function clickPotagerRadi(){
    var potagerRadiCost = Math.floor(10 * Math.pow(1.1,NbPotagerRadi));      
    if(radis >= potagerRadiCost){                                            
        NbPotagerRadi = NbPotagerRadi + 1;                                   
        radis = radis - potagerRadiCost;                                    
        prodRadi = prodRadi + 1
        document.getElementById('potagerRadi').innerHTML = "Quantité : " + NbPotagerRadi;  
        document.getElementById('radis').innerHTML = radis;                  
        potager.innerHTML = potager.innerHTML + "<img class='small' src='images/potager.png' />";          
        document.getElementById('prodRadi').innerHTML = prodRadi + "/sec";
        document.getElementById('check16').setAttribute("href", "#?w=500");
    }
    else
    {
        document.getElementById('check16').removeAttribute('href');
    }
    
    var nextCostPotagerRadi = Math.floor(10 * Math.pow(1.1,NbPotagerRadi));               
    document.getElementById('potagerRadiCost').innerHTML = "Coût : " + nextCostPotagerRadi ;  
};

function clickChampRadi(){
    var champRadiCost = Math.floor(100 * Math.pow(1.2,NbChampRadi));      
    if(radis >= champRadiCost){                                            
        NbChampRadi = NbChampRadi + 1;                                   
        radis = radis - champRadiCost;                                    
        prodRadi = prodRadi + 2
        document.getElementById('champRadi').innerHTML = "Quantité : " + NbChampRadi;  
        document.getElementById('radis').innerHTML = radis;                  
        champ.innerHTML = champ.innerHTML + "<img class='small' src='images/champ.png' />";          
        document.getElementById('prodRadi').innerHTML = prodRadi + "/sec";
        document.getElementById('check17').setAttribute("href", "#?w=500");
    }
    else
    {
        document.getElementById('check17').removeAttribute('href');
    }
    
    var nextCostChampRadi = Math.floor(100 * Math.pow(1.2,NbChampRadi));               
    document.getElementById('champRadiCost').innerHTML = "Coût : " + nextCostChampRadi ;  
};

function clickExploitRadi(){
    var exploitRadiCost = Math.floor(300 * Math.pow(1.3,NbExploitRadi));      
    if(radis >= exploitRadiCost){                                            
        NbExploitRadi = NbExploitRadi + 1;                                   
        radis = radis - exploitRadiCost;                                    
        prodRadi = prodRadi + 4
        document.getElementById('exploitRadi').innerHTML = "Quantité : " + NbExploitRadi;  
        document.getElementById('radis').innerHTML = radis;                  
        exploit.innerHTML = exploit.innerHTML + "<img class='small' src='images/exploitation.png' />";          
        document.getElementById('prodRadi').innerHTML = prodRadi + "/sec";
        document.getElementById('check18').setAttribute("href", "#?w=500");
    }
    else
    {
        document.getElementById('check18').removeAttribute('href');
    }
    
    var nextCostExploitRadi = Math.floor(300 * Math.pow(1.3,NbExploitRadi));               
    document.getElementById('exploitRadiCost').innerHTML = "Coût : " + nextCostExploitRadi ;  
};


window.setInterval(function(){
  
  RadiClick(NbPotagerRadi);
  
}, 1000);

window.setInterval(function(){
  
  RadiClick(NbChampRadi);
  
}, 500);

window.setInterval(function(){
  
  RadiClick(NbExploitRadi);
  
}, 250);


function refreshTotal()
{
    total = pommes + carottes + mangues + choux + kiwis + radis;
    document.getElementById('total').innerHTML = "Total : " + total;
}

setInterval("refreshTotal()", 250);

