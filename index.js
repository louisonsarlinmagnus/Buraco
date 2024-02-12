const doubleDeck = [
    {id:1, imagePath:"/cards/2C.png"},
    {id:2, imagePath:"/cards/3C.png"},
    {id:3, imagePath:"/cards/4C.png"},
    {id:4, imagePath:"/cards/5C.png"},
    {id:5, imagePath:"/cards/6C.png"},
    {id:6, imagePath:"/cards/7C.png"},
    {id:7, imagePath:"/cards/8C.png"},
    {id:8, imagePath:"/cards/9C.png"},
    {id:9, imagePath:"/cards/10C.png"},
    {id:10, imagePath:"/cards/JC.png"},
    {id:11, imagePath:"/cards/QC.png"},
    {id:12, imagePath:"/cards/KC.png"},
    {id:13, imagePath:"/cards/AC.png"},
    {id:14, imagePath:"/cards/2H.png"},
    {id:15, imagePath:"/cards/3H.png"},
    {id:16, imagePath:"/cards/4H.png"},
    {id:17, imagePath:"/cards/5H.png"},
    {id:18, imagePath:"/cards/6H.png"},
    {id:19, imagePath:"/cards/7H.png"},
    {id:20, imagePath:"/cards/8H.png"},
    {id:21, imagePath:"/cards/9H.png"},
    {id:22, imagePath:"/cards/10H.png"},
    {id:23, imagePath:"/cards/JH.png"},
    {id:24, imagePath:"/cards/QH.png"},
    {id:25, imagePath:"/cards/KH.png"},
    {id:26, imagePath:"/cards/AH.png"},
    {id:27, imagePath:"/cards/2D.png"},
    {id:28, imagePath:"/cards/3D.png"},
    {id:29, imagePath:"/cards/4D.png"},
    {id:30, imagePath:"/cards/5D.png"},
    {id:31, imagePath:"/cards/6D.png"},
    {id:32, imagePath:"/cards/7D.png"},
    {id:33, imagePath:"/cards/8D.png"},
    {id:34, imagePath:"/cards/9D.png"},
    {id:35, imagePath:"/cards/10D.png"},
    {id:36, imagePath:"/cards/JD.png"},
    {id:37, imagePath:"/cards/QD.png"},
    {id:38, imagePath:"/cards/KD.png"},
    {id:39, imagePath:"/cards/AD.png"},
    {id:40, imagePath:"/cards/2S.png"},
    {id:41, imagePath:"/cards/3S.png"},
    {id:42, imagePath:"/cards/4S.png"},
    {id:43, imagePath:"/cards/5S.png"},
    {id:44, imagePath:"/cards/6S.png"},
    {id:45, imagePath:"/cards/7S.png"},
    {id:46, imagePath:"/cards/8S.png"},
    {id:47, imagePath:"/cards/9S.png"},
    {id:48, imagePath:"/cards/10S.png"},
    {id:49, imagePath:"/cards/JS.png"},
    {id:50, imagePath:"/cards/QS.png"},
    {id:51, imagePath:"/cards/KS.png"},
    {id:52, imagePath:"/cards/AS.png"},
    {id:53, imagePath:"/cards/JR.png"},
    {id:54, imagePath:"/cards/JB.png"},
    {id:55, imagePath:"/cards/2C.png"},
    {id:56, imagePath:"/cards/3C.png"},
    {id:57, imagePath:"/cards/4C.png"},
    {id:58, imagePath:"/cards/5C.png"},
    {id:59, imagePath:"/cards/6C.png"},
    {id:60, imagePath:"/cards/7C.png"},
    {id:61, imagePath:"/cards/8C.png"},
    {id:62, imagePath:"/cards/9C.png"},
    {id:63, imagePath:"/cards/10C.png"},
    {id:64, imagePath:"/cards/JC.png"},
    {id:65, imagePath:"/cards/QC.png"},
    {id:66, imagePath:"/cards/KC.png"},
    {id:67, imagePath:"/cards/AC.png"},
    {id:68, imagePath:"/cards/2H.png"},
    {id:69, imagePath:"/cards/3H.png"},
    {id:70, imagePath:"/cards/4H.png"},
    {id:71, imagePath:"/cards/5H.png"},
    {id:72, imagePath:"/cards/6H.png"},
    {id:73, imagePath:"/cards/7H.png"},
    {id:74, imagePath:"/cards/8H.png"},
    {id:75, imagePath:"/cards/9H.png"},
    {id:76, imagePath:"/cards/10H.png"},
    {id:77, imagePath:"/cards/JH.png"},
    {id:78, imagePath:"/cards/QH.png"},
    {id:79, imagePath:"/cards/KH.png"},
    {id:80, imagePath:"/cards/AH.png"},
    {id:81, imagePath:"/cards/2D.png"},
    {id:82, imagePath:"/cards/3D.png"},
    {id:83, imagePath:"/cards/4D.png"},
    {id:84, imagePath:"/cards/5D.png"},
    {id:85, imagePath:"/cards/6D.png"},
    {id:86, imagePath:"/cards/7D.png"},
    {id:87, imagePath:"/cards/8D.png"},
    {id:88, imagePath:"/cards/9D.png"},
    {id:89, imagePath:"/cards/10D.png"},
    {id:90, imagePath:"/cards/JD.png"},
    {id:91, imagePath:"/cards/QD.png"},
    {id:92, imagePath:"/cards/KD.png"},
    {id:93, imagePath:"/cards/AD.png"},
    {id:94, imagePath:"/cards/2S.png"},
    {id:95, imagePath:"/cards/3S.png"},
    {id:96, imagePath:"/cards/4S.png"},
    {id:97, imagePath:"/cards/5S.png"},
    {id:98, imagePath:"/cards/6S.png"},
    {id:99, imagePath:"/cards/7S.png"},
    {id:100, imagePath:"/cards/8S.png"},
    {id:101, imagePath:"/cards/9S.png"},
    {id:102, imagePath:"/cards/10S.png"},
    {id:103, imagePath:"/cards/JS.png"},
    {id:104, imagePath:"/cards/QS.png"},
    {id:105, imagePath:"/cards/KS.png"},
    {id:106, imagePath:"/cards/AS.png"},
    {id:107, imagePath:"/cards/JR.png"},
    {id:108, imagePath:"/cards/JB.png"}
]

const cardBackImgPath = '/cards/back.png'

let shuffledDeck = []

let userDeck = []
let userSideDeck = []
let userSupplDeck = []

let botDeck = []
let botSideDeck = []
let botSupplDeck = []

let dicsardPile = []

const playGameButtonElem = document.getElementById('playGame')


loadGame()

function loadGame(){
    playGameButtonElem.addEventListener('click', ()=>startGame())
}

function startGame(){
    playGameButtonElem.style.display = 'none';
    shuffledDeck = shuffleDeck(doubleDeck)
    document.getElementById("game-status").style.display='initial';

    distributeCards(shuffledDeck)

    document.getElementById("bot-hand-img-0").src = botDeck.at(0).imagePath
    document.getElementById("bot-hand-img-1").src = botDeck.at(1).imagePath
    document.getElementById("bot-hand-img-2").src = botDeck.at(2).imagePath
    document.getElementById("bot-hand-img-3").src = botDeck.at(3).imagePath
    document.getElementById("bot-hand-img-4").src = botDeck.at(4).imagePath
    document.getElementById("bot-hand-img-5").src = botDeck.at(5).imagePath
    document.getElementById("bot-hand-img-6").src = botDeck.at(6).imagePath
    document.getElementById("bot-hand-img-7").src = botDeck.at(7).imagePath
    document.getElementById("bot-hand-img-8").src = botDeck.at(8).imagePath
    document.getElementById("bot-hand-img-9").src = botDeck.at(9).imagePath
    document.getElementById("bot-hand-img-10").src = botDeck.at(10).imagePath

}

function shuffleDeck(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function distributeCards(shuffledDeck) {
    for (let i = 0; shuffledDeck.length > 42;) {
        userDeck.push(shuffledDeck.at(i));
        shuffledDeck.shift();

        userSideDeck.push(shuffledDeck.at(i));
        shuffledDeck.shift();

        userSupplDeck.push(shuffledDeck.at(i));
        shuffledDeck.shift();
        
        botDeck.push(shuffledDeck.at(i));
        shuffledDeck.shift();

        botSideDeck.push(shuffledDeck.at(i));
        shuffledDeck.shift();
        
        botSupplDeck.push(shuffledDeck.at(i));
        shuffledDeck.shift();
    }
    validateDistribution()

    document.getElementById("user-table")
}

function validateDistribution(){
    const deck = userDeck.concat(userSideDeck.concat(userSupplDeck.concat(botDeck.concat(botSideDeck.concat(botSupplDeck.concat(shuffledDeck.concat(dicsardPile)))))))
    if (deck.length!=108) {
        console.log("Something went wrong during the distribution of the cards");
        alert("The dealer has dropped a card !");
        location.reload();
    }
}