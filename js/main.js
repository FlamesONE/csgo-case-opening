// A $( document ).ready() block.
$( document ).ready(function() {

  $( ".start" ).click(function() {
    var card = $( ".slider ul li" );
    var cardSize = 250;
    var marginSize = 24;
    var winningCardNumber = 58;
    $( 'ul li:nth-child(' + winningCardNumber + ')' ).addClass('winning-card');
    $( "ul li:nth-child(" + (winningCardNumber - 2) + ")" ).addClass('surrounding-winning-card');
    $( "ul li:nth-child(" + (winningCardNumber - 1) + ")" ).addClass('surrounding-winning-card');
    $( "ul li:nth-child(" + (winningCardNumber + 1) + ")" ).addClass('surrounding-winning-card');
    $( "ul li:nth-child(" + (winningCardNumber + 2) + ")" ).addClass('surrounding-winning-card');
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
    setTimeout(() => { popUpItem(centerOfWinningCard) }, 1000);
  }

  function popUpItem(centerOfWinningCard){
    var winningCard = $( ".winning-card" )
    $( ".middle" ).css('display', 'none');
    winningCard.css('transition','all 300ms');
    winningCard.css('transform','translateX(' + centerOfWinningCard + 'px) scale(1.5) rotate3d(1,1,0, 360deg');
    $( ".winning-card span.wear" ).css('display','flex');
    $( ".surrounding-winning-card" ).css('opacity', '.3');
  }

  var itemTypes = [
    {name: "Mil-Spec", chance: 79.92, class: "mil-spec"},
    {name: "Restricted", chance: 15.98, class: "restricted"},
    {name: "Classified", chance: 3.2, class: "classified"},
    {name: "Covert", chance: 0.64, class: "covert"},
    {name: "Exceedingly Rare", chance: 0.26, class: "exceedingly-rare"}
  ];

  var spectrum2 = [
    {type: "Mil-Spec", items:[
      {item: "Glock-18", skin: "Off World", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_indigo_light_large.3786c7c3be7d03ee053050af2f7a8427782742e1.png'},
      {item: "AUG", skin: "Triqua", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_cu_aug_orange_triangle_light_large.793eb05ec841c2664b8482565e5d080c731d6ecd.png'},
      {item: "Tec-9", skin: "Cracked Opal", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_cracked_opal_light_large.d6e9cc1c31550faeac9c55341be170abf07245b7.png'},
      {item: "MAC-10", skin: "Oceanic", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_am_mac10_oceani_light_large.0c3e275f2964ea051d2481735fcdf6d174a22b1b.png'},
      {item: "G3SG1", skin: "Hunter", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_gs_g3sg1_cetme_redux_light_large.18ad1afdb32fca22879dcdd22e579c5afaef6ad8.png'},
      {item: "Sawed-Off", skin: "Morris", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_aq_sawed-off_flower_light_large.0d98b08ce8023d49dac2f76b10ef2f3cd7a33350.png'},
      {item: "SCAR-20", skin: "Jungle Slipstream", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_hy_scar20_jungle_slipstream_light_large.d49f99ac854c1a25fc46bde5dd32f438bdd587f1.png'}
    ]},
    {type: "Restricted", items:[
      {item: "CZ75-Auto", skin: "Tacticat", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_gs_cz75_tacticat_light_large.ed9ba2f6cb8fd5e2a2b6cfb1b9a0ba4c87c93ec3.png'},
      {item: "SG 553", skin: "Phantom", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_gs_sg553_phantom_light_large.51fc477c1024614f6f52080d3b7200408c9d2881.png'},
      {item: "UMP-45", skin: "Exposure", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump45_x-ray_machine_light_large.a4563e015fd33d1874cc220458db2754a15dd08a.png'},
      {item: "XM1014", skin: "Ziggy", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_aq_xm1014_ziggy_anarchy_light_large.7042642ba5043be6e1cb82d6bb9a05678402dea1.png'},
      {item: "MP9", skin: "Goo", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_goo_light_large.3cab8ecb356ee5f2549c1b148f5961fdf5d9cd76.png'}
    ]},
    {type: "Classified", items:[
      {item: "M4A1-S", skin: "Leaded Glass", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_gs_m4a1_shatter_light_large.f4d487cbf956eb13a505b8926c8f0f63cb3604b3.png'},
      {item: "R8 Revolver", skin: "Llama Cannon", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_r8_llamacannon_light_large.ae4ce84764b4892a2ea2d3f9f0afc57023f7bdc8.png'},
      {item: "PP-Bizon", skin: "High Roller", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_all_in_light_large.d31ae97fe448b550cfe06d617daa3575c77e8c2a.png'}
    ]},
    {type: "Covert", items:[
      {item: "Ak-74", skin: "The Empress", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_empress_light_large.f81d0b07dca381635c89f74bcdb6b64a6da6e81c.png'},
      {item: "P250", skin: "See Ya Later", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_cybercroc_light_large.396de1d53797f8875d242d1eb33d5b81dce2bb8e.png'}
    ]},
    {type: "Exceedingly Rare", items:[
      {item: "Shadow Daggers", skin: "Doppler", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_am_doppler_phase2_b_light_large.516d6cf5e16c964cd35b839a2b8b6f62ad564083.png'},
      {item: "Gut Knife", skin: "Lore", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_cu_gut_lore_light_large.5cf5a77978675bd3d276a86017e6d1fcacd7bf00.png'}
    ]},  
  ];

  var dangerZone = [
    {type: "Mil-Spec", items:[
      {item: "M4A4", skin: "Magnesium", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_gs_m4a4_chopper_ghost_light_large.374913da49233223de4ca1ff09a20cc2a7a94288.png'},
      {item: "Glock-18", skin: "Oxide Blaze", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock18_corroden_light_large.68906a0523399b599555746b51db2ffac29c5db5.png'},
      {item: "Tec-9", skin: "Fubar", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_gs_tec9_fubar_light_large.00f64007983561f57c808b23e9260ebea6437bc7.png'},
      {item: "SG 553", skin: "Danger Close", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_gs_sg553_over_heated_light_large.aba3188360b2a87b8687d73af6c2e3034290402c.png'},
      {item: "MP9", skin: "Modest Threat", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_gs_mp9_colony01_light_large.f8d9792131b786025a960ddeda2eeb77f97c55e3.png'},
      {item: "Sawed-Off", skin: "Black Sand", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_black_sand_light_large.7ed9ce5083489c0fdf92814f0ebf6945ec6f29d4.png'},
      {item: "Nova", skin: "Wood Fired", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_gs_nova_hunter_brute_light_large.8e2520f25098056ccd03b679859458fdc006c0a7.png'}
    ]},
    {type: "Restricted", items:[
      {item: "USP-S", skin: "Flashback", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_flashback_light_large.47e10129af33303bac557560400c33e4fe555680.png'},
      {item: "P250", skin: "Nevermore", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_aa_p250_gravediggers_light_large.df680e4648f5e08ec6e92ed36a5b9c05ae8bc5f4.png'},
      {item: "MAC-10", skin: "Pipe Down", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_gs_mac10_exo_pipes_light_large.e8327716d271e1e5f14f5af06547d5ac9714da49.png'},
      {item: "Galil AR", skin: "Signal", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_hy_galil_signal_red_light_large.d7c26f54fd72ec451094ea7791e921346e013197.png'},
      {item: "G3SG1", skin: "Scavenger", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_gs_g3sg1_savage_light_large.e452574f580f51b1da6312c0f80a0dc07e073d8b.png'}
    ]},
    {type: "Classified", items:[
      {item: "Desert Eagle", skin: "Mecha Industries", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_gs_deagle_mecha_light_large.e08c1fd8709f6b368956c41c68b17c15ff635635.png'},
      {item: "MP5-SD", skin: "Phosphor", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_gs_mp5_festival_drip_light_large.c71af0a784e5ecd6e5d5f2f71961be155e283cde.png'},
      {item: "UMP-45", skin: "Momentum", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump_arrows_light_large.20b01890495d097b375de72054a535c15d768970.png'}
    ]},
    {type: "Covert", items:[
      {item: "Ak-74", skin: "Asiimov", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_asiimov_light_large.665fc3b83c8046398787a57d2ef7a9d938244820.png'},
      {item: "AWP", skin: "Neo-Noir", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_neonoir_light_large.c5dd57f8555d13c41f08024f27a9314074b698af.png'}
    ]},
    {type: "Exceedingly Rare", items:[
      {item: "Shadow Daggers", skin: "Doppler", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_am_doppler_phase2_b_light_large.516d6cf5e16c964cd35b839a2b8b6f62ad564083.png'},
      {item: "Gut Knife", skin: "Lore", statTrak: true, imageUrl: 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_cu_gut_lore_light_large.5cf5a77978675bd3d276a86017e6d1fcacd7bf00.png'}
    ]},  
  ];


  $( ".fill" ).click(function() {
    fillSlider(dangerZone);
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
    var cardFound = false;
    var wearArray = ["Factory New", "Minimal Wear", "Field Tested", "Well-Worn", "Battle-Scarred"];
    var randomWear = Math.floor(Math.random() * wearArray.length);
    var wear = wearArray[randomWear];

    for(k = 0; k < itemTypes.length; k++){
      if(k === 0){
        previousChance = 0;
        currentChance = itemTypes[k].chance;
      } else {
        previousChance = previousChance + itemTypes[k-1].chance;
        currentChance = itemTypes[k].chance + previousChance;
      }

      if(randomNumber <= currentChance && randomNumber > previousChance){

        var allItemsOfType = caseData.find(item => item.type == itemTypes[k].name)

        if (allItemsOfType != null) {
          allItemsOfType = allItemsOfType.items
          chosenItem = allItemsOfType[Math.floor(Math.random() * allItemsOfType.length)];
          itemType = itemTypes[k].class;
          var statTrakClass = "no-stattrak";
          if(chosenItem.statTrak === true && (Math.random() * 10) <= 1){
            statTrakClass = "stattrak"
          }

          cards.push(`
          <li class="`+ itemType + `">
            <div class="absolute">
              <div class="item-details">
                <span class="item-detail ` + statTrakClass + `">StatTrak</span>
                <span class="item-detail wear">` + wear + `</span>
              </div>
            </div>
            <img src="` + chosenItem.imageUrl + `">
            <span class="cover">
              <span class="centered">` + chosenItem.item + `</span>
              <span class="centered2">` + chosenItem.skin + `</span>
            </span>
          </li>`);
          k = itemTypes.length;
        } else {
          //No match found, creating dummy object.
          cards.push(`
          <li class="no-weapon">
            <img src="">
            <span class="cover">
              <span class="centered">No Weapon</span>
                <span class="centered2">None</span>
            </span>
          </li>`);
        }
      }
    }
   
    startItem++;
    fillCards(caseData, cards, totalCardsAmount, startItem)  
  }

  fillSlider(dangerZone);
  
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