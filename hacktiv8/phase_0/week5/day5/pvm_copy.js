var button = document.getElementById('start-game')

button.addEventListener('click', function(e) {
    if (input[0].value === '') {
        alert('Please Pick a Character');
        // e.preventDefault();
        // e.prevent.Default();
        preventDefault();
    }
    main.innerHTML = '';
    main.className = '';

    startGame();

    // var header = document.getElementsByTagName('header')[0];
    // var createButton2 = document.createElement('button');
    // header.appendChild(createButton2);
    //
    // var button2 = document.getElementsByTagName('button')[0];
    //
    // button2.addEventListener('click', function() {
    //     alert('^_^');
    // })
})

function startGame() {
    main.className = 'background-arena';
    var createHeader = document.createElement('header');
    main.appendChild(createHeader);

    var header = document.getElementsByTagName('header')[0];
    var createPlayerStatus = document.createElement('div');
    createPlayerStatus.setAttribute('class', 'player-status');
    header.appendChild(createPlayerStatus);

    var createMonsterStatus = document.createElement('div');
    createMonsterStatus.setAttribute('class', 'monster-status');
    header.appendChild(createMonsterStatus);


    // SET the Player Class to be dinamic!!
    var playerStatus = document.getElementsByClassName('player-status')[0];
    var createParagraph1 = document.createElement('p');
    createParagraph1.setAttribute('id', 'class-name');
    var createParagraph1Text = document.createTextNode('Player Class')
    playerStatus.appendChild(createParagraph1);
    createParagraph1.appendChild(createParagraph1Text);


    // SET the Player Health Progress Bar to be dinamic!!
    var createProgress = document.createElement('progress');
    createProgress.setAttribute('value', '80');
    createProgress.setAttribute('max', '100');
    createProgress.setAttribute('id', 'player-health-bar');
    playerStatus.appendChild(createProgress);


    // SET the Player Health Bar Info to be dinamic!!
    var createHealthStatus = document.createElement('p');
    createHealthStatus.setAttribute('id', 'player-health-status');
    var createHealthStatusText = document.createTextNode('1300 / 1500')
    playerStatus.appendChild(createHealthStatus);
    createHealthStatus.appendChild(createHealthStatusText);



    // SET the Monster Name
    var monsterStatus = document.getElementsByClassName('monster-status')[0];
    var createParagraph2 = document.createElement('p');
    createParagraph2.setAttribute('id', 'class-name');
    var createParagraph1Text = document.createTextNode('Centaur')
    monsterStatus.appendChild(createParagraph2);
    createParagraph2.appendChild(createParagraph1Text);


    // SET the Monster Health Progress Bar to be dinamic!!
    createProgress = document.createElement('progress');
    createProgress.setAttribute('value', '60');
    createProgress.setAttribute('max', '100');
    createProgress.setAttribute('id', 'monster-health-bar');
    monsterStatus.appendChild(createProgress);


    // SET the Player Health Bar Info to be dinamic!!
    createHealthStatus = document.createElement('p');
    createHealthStatus.setAttribute('id', 'monster-health-status');
    createHealthStatusText = document.createTextNode('1200 / 2000')
    monsterStatus.appendChild(createHealthStatus);
    createHealthStatus.appendChild(createHealthStatusText);

    var createPlayerAvatar = document.createElement('div');
    createPlayerAvatar.setAttribute('class', 'player-avatar');
    main.appendChild(createPlayerAvatar);

    var playerAvatar = document.getElementsByClassName('player-avatar')[0];
    // Set the Avatar image to be the same with the user input
    if (playerClass == 'warrior') {
        playerAvatar.innerHTML = "Hallo";
        // createPlayerAvatar.setAttribute('class', 'warrior-avatar');
    } else if (playerClass == 'assassin') {
        playerAvatar.innerHTML = "test";
        // createPlayerAvatar.setAttribute('class', 'assassin-avatar');
    }
}

// e.preventDefault() salah penulisannya
// Conditional tidak terpanggil dalam function Start Game
