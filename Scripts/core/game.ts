/// <reference path = "_reference.ts" />
/*--------------------------------------
Created by: Ilmir Tayhcinov
Created on: September 28, 2016
Last Modifie by: Ilmir Tayhcinov
Last Modified: October 4, 2016
Based on work of: Wallace Balaniuc
------------------------------------------
Scene  module to group all user-defined scenes  under the same "namespace aka module"
Game scene that contains all assets and functionality associated with the game itself
*/

// Global Variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;

var currentScene : objects.Scene;
var scene: number;

// Game scenes
//var menuScene : scenes.Menu;
//var gameScene : scenes.Game_Start;

// Player inventory
var partsOfAmulet:number=0;

// Preload Assets required
var assetData:objects.Asset[] = [
    {id: "attack", src:"../../Assets/images/attack.png"},
    {id: "attack2", src:"../../Assets/images/attack2.png"},
    {id: "back", src:"../../Assets/images/back.png"},
    {id: "villages", src:"../../Assets/images/villages.png"},
    {id: "elves", src:"../../Assets/images/elves.png"},
    {id: "boat", src:"../../Assets/images/boat.png"},
    {id: "cat", src:"../../Assets/images/cat.png"},
    {id: "cat2", src:"../../Assets/images/cat2.png"},
    {id: "dragon", src:"../../Assets/images/dragon.png"},
    {id: "dwarfs", src:"../../Assets/images/dwarfs.png"},
    {id: "exploreShore", src:"../../Assets/images/exploreShore.png"},
    {id: "forest", src:"../../Assets/images/forest.png"},
    {id: "goblins", src:"../../Assets/images/goblins.png"},
    {id: "goFishing", src:"../../Assets/images/goFishing.png"},
    {id: "hunt", src:"../../Assets/images/hunt.png"},
    {id: "kraken", src:"../../Assets/images/kraken.png"},
    {id: "myrmaids", src:"../../Assets/images/myrmaids.png"},
    {id: "runAway", src:"../../Assets/images/runAway.png"},
    {id: "shore", src:"../../Assets/images/shore.png"},
    {id: "ships", src:"../../Assets/images/ships.png"},
    {id: "start", src:"../../Assets/images/start.png"},
    {id: "stay", src:"../../Assets/images/stay.png"},
    {id: "amulet", src:"../../Assets/images/amulet.png"},
    {id: "MJOLNIR_B", src:"../../Assets/images/MJOLNIR_B.png"},
    { id: "bgMusic", src: "../../Assets/music/bgMusic.mp3" }, 
    {id: "background", src:"../../Assets/images/background.png"}
    
];

function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    //assets.installPlugin(createjs.Sound);
    

    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
   

    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);

    // Enable mouse events that are polled 20 times per tick
    stage.enableMouseOver(20);

    // Set FPS for game and register for "tick" callback function
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);

    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.GAME_START;
    createjs.Sound.play("bgMusic",{loop: 99});
    changeScene();
}

function gameLoop(event: createjs.Event): void {
    // Update whatever scene is currently active.
    console.log("gameLoop update");
    currentScene.update();
    stage.update();
}

function changeScene() : void {
    
    // Simple state machine pattern to define scene swapping.
    switch(scene)
    {
        case config.Scene.GAME_START :
            stage.removeAllChildren();
            currentScene = new scenes.GAME_START();
            console.log("Starting GAME_START scene");
            break;
        case config.Scene.SHORE :
            stage.removeAllChildren();
            currentScene = new scenes.SHORE();
            console.log("Starting SHORE scene");
            break;
        case config.Scene.FOREST :
            stage.removeAllChildren();
            currentScene = new scenes.FOREST();
            console.log("Starting FOREST scene");
            break;    
        case config.Scene.BOAT :
            stage.removeAllChildren();
            currentScene = new scenes.BOAT();
            console.log("Starting BOAT scene");
            break;
        case config.Scene.KRAKEN :
            stage.removeAllChildren();
            currentScene = new scenes.KRAKEN();
            console.log("Starting KRAKEN scene");
            break;    
        case config.Scene.BAD_FISHING :
            stage.removeAllChildren();
            currentScene = new scenes.BAD_FISIHNG();
            console.log("Starting BAD_FISHING scene");
            break;
        case config.Scene.HOME_FIRST :
            stage.removeAllChildren();
            currentScene = new scenes.HOME_FIRST();
            console.log("Starting HOME_FIRST scene");
            break;
        case config.Scene.HOME_DESTROYED :
            stage.removeAllChildren();
            currentScene = new scenes.HOME_DESTROYED();
            console.log("Starting HOME_DESTROYED scene");
            break;
        case config.Scene.HOME_DEATH :
            stage.removeAllChildren();
            currentScene = new scenes.HOME_DEATH();
            console.log("Starting HOME_DEATH scene");
            break;
        case config.Scene.BRITISH :
            stage.removeAllChildren();
            currentScene = new scenes.BRITISH();
            console.log("Starting BRITISH scene");
            break;
        case config.Scene.RUN_AWAY :
            stage.removeAllChildren();
            currentScene = new scenes.RUN_AWAY();
            console.log("Starting BRITISH2 scene");
            break;
        case config.Scene.MYRMAIDS :
            stage.removeAllChildren();
            currentScene = new scenes.MYRMAIDS();
            console.log("Starting MYRMAIDS scene");
            break;
        case config.Scene.PILLAGE_BRIT :
            stage.removeAllChildren();
            currentScene = new scenes.PILLAGE_BRIT();
            console.log("Starting PILLAGE_BRIT scene");
            break;
        case config.Scene.RUN_AWAY :
            stage.removeAllChildren();
            currentScene = new scenes.RUN_AWAY();
            console.log("Starting RUN_AWAY scene");
            break;
        case config.Scene.VILLAGES :
            stage.removeAllChildren();
            currentScene = new scenes.VILLAGES();
            console.log("Starting VILLAGES scene");
            break;
        case config.Scene.ELVES :
            stage.removeAllChildren();
            currentScene = new scenes.ELVES();
            console.log("Starting VILLAGES scene");
            break;
        case config.Scene.CAT :
            stage.removeAllChildren();
            currentScene = new scenes.CAT();
            console.log("Starting CAT scene");
            break;
        case config.Scene.DRAGON :
            stage.removeAllChildren();
            currentScene = new scenes.DRAGON();
            console.log("Starting DRAGON scene");
            break;
        case config.Scene.HUNT :
            stage.removeAllChildren();
            currentScene = new scenes.HUNT();
            console.log("Starting HUNT scene");
            break;
        case config.Scene.MJOLNIR :
            stage.removeAllChildren();
            currentScene = new scenes.MJOLNIR();
            console.log("Starting VILLAGES scene");
            break;                    



    }
    
}