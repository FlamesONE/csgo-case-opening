// A $( document ).ready() block.
$( document ).ready(function() {

  $( ".start" ).click(function() {
    var card = $( ".slider ul li" );
    var cardSize = 250;
    var marginSize = 24;
    var winningCardNumber = 58;
    $( 'ul li:nth-child(' + winningCardNumber + ')' ).addClass('winning-card');
    var startOfWinningCard = -Math.abs(((cardSize / 2) + marginSize) + ((cardSize + marginSize) * (winningCardNumber - 4))) - (cardSize / 2);
    var centerOfWinningCard = startOfWinningCard - cardSize / 2;
    var numberRand = (Math.floor(Math.random() * 250) + 1);
    var totalTranslate = startOfWinningCard - numberRand;
    var animationTime = 10000;

    card.css('transition','all ' + animationTime + 'ms cubic-bezier(.09,.08,.1,.99');
    card.css('transform','translateX(' + totalTranslate + 'px) rotate3d(0,0,0, 0deg');
    
    setTimeout(() => { finishedSliding(centerOfWinningCard, card, winningCardNumber) }, animationTime + 500);
  });

  function finishedSliding(centerOfWinningCard, card, winningCardNumber) {
    card.css('transition','all 300ms');
    card.css('transform','translateX(' + centerOfWinningCard + 'px) scale(1) rotate3d(0,0,0, 0deg');
    setTimeout(() => { popUpItem(centerOfWinningCard, winningCardNumber) }, 1000);
  }

  function popUpItem(centerOfWinningCard, winningCardNumber){
    var winningCard = $( ".winning-card" )
    $( ".middle" ).css('display', 'none');
    winningCard.css('transition','all 300ms');
    winningCard.css('transform','translateX(' + centerOfWinningCard + 'px) scale(1.5) rotate3d(1,1,0, 360deg');
    $( "ul li:nth-child(" + (winningCardNumber - 2) + ")" ).css('opacity', '.3');
    $( "ul li:nth-child(" + (winningCardNumber - 1) + ")" ).css('opacity', '.3');
    $( "ul li:nth-child(" + (winningCardNumber + 1) + ")" ).css('opacity', '.3');
    $( "ul li:nth-child(" + (winningCardNumber + 2) + ")" ).css('opacity', '.3');
    // $( "ul li:not(.winning-card)" ).css('transition','all 300ms');
    // $( "li:not(.winning-card)" ).css('opacity', '.3');
  }

  var itemTypes = [
    {name: "Mil-Spec", chance: 79.92, class: "mil-spec"},
    {name: "Restricted", chance: 15.98, class: "restricted"},
    {name: "Classified", chance: 3.2, class: "classified"},
    {name: "Covert", chance: 0.64, class: "covert"},
    {name: "Exceedingly Rare", chance: 0.26, class: "exceedingly-rare"}
  ];

  var caseSpectrum2 = [
    {type: "Mil-Spec", items:[
      {item: "Glock-18", skin: "Off World", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_indigo_light_large.3786c7c3be7d03ee053050af2f7a8427782742e1.png'},
      {item: "AUG", skin: "Triqua", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_cu_aug_orange_triangle_light_large.793eb05ec841c2664b8482565e5d080c731d6ecd.png'},
      {item: "Tec-9", skin: "Cracked Opal", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_cracked_opal_light_large.d6e9cc1c31550faeac9c55341be170abf07245b7.png'},
      {item: "MAC-10", skin: "Oceanic", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_am_mac10_oceani_light_large.0c3e275f2964ea051d2481735fcdf6d174a22b1b.png'},
      {item: "G3SG1", skin: "Hunter", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_gs_g3sg1_cetme_redux_light_large.18ad1afdb32fca22879dcdd22e579c5afaef6ad8.png'},
      {item: "Sawed-Off", skin: "Morris", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_aq_sawed-off_flower_light_large.0d98b08ce8023d49dac2f76b10ef2f3cd7a33350.png'},
      {item: "SCAR-20", skin: "Jungle Slipstream", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_hy_scar20_jungle_slipstream_light_large.d49f99ac854c1a25fc46bde5dd32f438bdd587f1.png'}
    ]},
    {type: "Restricted", items:[
      {item: "CZ75-Auto", skin: "Tacticat", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_gs_cz75_tacticat_light_large.ed9ba2f6cb8fd5e2a2b6cfb1b9a0ba4c87c93ec3.png'},
      {item: "SG 553", skin: "Phantom", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_gs_sg553_phantom_light_large.51fc477c1024614f6f52080d3b7200408c9d2881.png'},
      {item: "UMP-45", skin: "Exposure", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump45_x-ray_machine_light_large.a4563e015fd33d1874cc220458db2754a15dd08a.png'},
      {item: "XM1014", skin: "Ziggy", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_aq_xm1014_ziggy_anarchy_light_large.7042642ba5043be6e1cb82d6bb9a05678402dea1.png'},
      {item: "MP9", skin: "Goo", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_goo_light_large.3cab8ecb356ee5f2549c1b148f5961fdf5d9cd76.png'}
    ]},
    {type: "Classified", items:[
      {item: "M4A1-S", skin: "Leaded Glass", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_gs_m4a1_shatter_light_large.f4d487cbf956eb13a505b8926c8f0f63cb3604b3.png'},
      {item: "R8 Revolver", skin: "Llama Cannon", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_r8_llamacannon_light_large.ae4ce84764b4892a2ea2d3f9f0afc57023f7bdc8.png'},
      {item: "PP-Bizon", skin: "High Roller", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_all_in_light_large.d31ae97fe448b550cfe06d617daa3575c77e8c2a.png'}
    ]},
    {type: "Covert", items:[
      {item: "Ak-74", skin: "The Empress", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_empress_light_large.f81d0b07dca381635c89f74bcdb6b64a6da6e81c.png'},
      {item: "P250", skin: "See Ya Later", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_cybercroc_light_large.396de1d53797f8875d242d1eb33d5b81dce2bb8e.png'}
    ]},
    {type: "Exceedingly Rare", items:[
      {item: "Shadow Daggers", skin: "Doppler", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_am_doppler_phase2_b_light_large.516d6cf5e16c964cd35b839a2b8b6f62ad564083.png'},
      {item: "Gut Knife", skin: "Lore", imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_cu_gut_lore_light_large.5cf5a77978675bd3d276a86017e6d1fcacd7bf00.png'}
    ]},  
  ];


  $( ".fill" ).click(function() {
    fillSlider(caseSpectrum2);
  });
  
  function resetSlider() {
    var card = $( ".slider ul li" );
    $(".middle").css('display', '');
    card.css('transition','none');
    card.css('transform','translateX(-125px)');
  }

  function fillSlider(caseData) {
    resetSlider();
    var cards = [];
    var startItem = 0;
    var totalCardsAmount = 60;
    fillCards(caseData, cards, totalCardsAmount, startItem);
    $( ".slider > ul" ).html( cards );
  }
  
  function fillCards(caseData, cards, totalCardsAmount, startItem) {
    if(startItem >= totalCardsAmount){
      return cards;
    }
    var randomNumber = parseFloat(Math.random() * 100).toFixed(2);
    var chosenItem;
    var itemType;
    var previousChance;
    // itemTypes.find(itemu => itemu.name == "Mil-Spec").chance

    for(k = 0; k < itemTypes.length; k++){
      if(k === 0){
        previousChance = 0;
        currentChance = itemTypes[k].chance;
      } else {
        previousChance = previousChance + itemTypes[k-1].chance;
        currentChance = itemTypes[k].chance + previousChance;
      }

      if(randomNumber <= currentChance && randomNumber > previousChance){

        var allItemsOfType = caseData.find(item => item.type == itemTypes[k].name).items
        
        chosenItem = allItemsOfType[Math.floor(Math.random() * allItemsOfType.length)];
        itemType = itemTypes[k].class;
        cards.push('<li class="'+ itemType + '"><img src="' + chosenItem.imageUrl + '"><span class="cover"><span class="centered">' + chosenItem.item + '</span><span class="centered2">' + chosenItem.skin + '</span></span></li>')
      }
    }
   
    startItem++;
    fillCards(caseData, cards, totalCardsAmount, startItem)  
  }

  fillSlider(caseSpectrum2);
  
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  
});


// 1   covert
// 2   covert
// 3   classified
// 4   classified
// 5   classified
// 6   restricted
// 7   restricted
// 8   restricted
// 9   restricted
// 10  restricted
// 11  mil-spec
// 12  mil-spec
// 13  mil-spec
// 14  mil-spec
// 15  mil-spec
// 16  mil-spec  
// 17  mil-spec



// 0,26/100*10000

  // $( ".start" ).click(function() {
  //   var numberRand = -8150 - (Math.floor(Math.random() * 250) + 1);
  //   $( ".slider" ).animate({
  //     step: function(numberRand) {
  //       $(this).css('transform','translateX(' + numberRand + 'px)'); 
  //     },
  //   }, 10000, "easeInOutQuint", function() {
  //     //test
  //   });
  // });