$(function(){
  var scortO = 0;
  var scortU = 0;
  $('button').click(function(){
  var shifumi = ['Pierre','Feuille','Ciseaux'];
  var alea = (Math.floor((Math.random())*3));
  console.log(shifumi[alea]);  //A virer aprés coup.
  var shifumiVal = shifumi[alea];
  var input = $('input').val();
  if(input == shifumiVal){
    alert('Joueur: '+input +'| Ordinateur: '+ shifumiVal +'| égalié !');
  }else if (input == 'Pierre' && shifumiVal == 'Ciseaux'){
    alert('Joueur: '+input +'| Ordinateur: '+ shifumiVal +'| Joueur marque un point !');
    scortU++;
  }else if (input == 'Feuille' && shifumiVal == 'Ciseaux'){
    alert ('Joueur: '+input +'| Ordinateur: '+ shifumiVal +'| Ordinateur marque un point !');
    scortO++;
  }else if (input == 'Ciseaux' && shifumiVal == 'Feuille'){
    alert('Joueur: '+input +'| Ordinateur: '+ shifumiVal +'| Joueur marque un point !');
    scortU++;
  }else if (input == 'Pierre' && shifumiVal == 'Feuille'){
    alert('Joueur: '+input +'| Ordinateur: '+ shifumiVal +'| Ordinateur marque un point !');
    scortO++;
  }else if (input == 'Feuille' && shifumiVal == 'Pierre'){
    alert('Joueur: '+input +'| Ordinateur: '+ shifumiVal +'| Joueur marque un point !');
    scortU++;
  }else if (input == 'Ciseaux' && shifumiVal == 'Pierre'){
    alert('Joueur: '+input +'| Ordinateur: '+ shifumiVal +'| Ordinateur marque un point !');
    scortO++;
  }
    alert('Joueur: '+scortU+'| Ordinateur: '+scortO);
    alert(Math.round((scortU/(scortU+scortO))*100)+'% de victoire pour le Joueur !');
});
});
