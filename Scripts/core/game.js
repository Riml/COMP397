/// <reference path = "_reference.ts" />
// Global Variables
var assets;
var canvas;
var stage;
var currentScene;
var scene;
// Game scenes
var menuScene;
var gameScene;
// Player inventory
var partsOfAmulet = 0;
// Preload Assets required
var assetData = [
    { id: "Start", src: "../../Assets/images/Start.png" },
    { id: "Bg", src: "../../Assets/images/bg.png" },
    { id: "Gameover", src: "../../Assets/images/gameover.png" },
    { id: "marioBtn", src: "../../Assets/images/mario.png" },
    { id: "Back", src: "../../Assets/images/Back.png" }
];
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);
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
    scene = config.Scene.MENU;
    changeScene();
}
function gameLoop(event) {
    // Update whatever scene is currently active.
    console.log("gameLoop update");
    currentScene.update();
    stage.update();
}
function changeScene() {
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            menuScene = new scenes.Menu();
            currentScene = menuScene;
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME_START:
            stage.removeAllChildren();
            currentScene = new scenes.Game_Start();
            console.log("Starting GAME_START scene");
            break;
        case config.Scene.HOME_FIRST:
            stage.removeAllChildren();
            currentScene = new scenes.Home_First();
            console.log("Starting HOME_FIRST scene");
            break;
        case config.Scene.HOME_DESTROYED:
            stage.removeAllChildren();
            currentScene = new scenes.Home_Destroyed();
            console.log("Starting HOME_DESTROYED scene");
            break;
        case config.Scene.HOME_METEOR:
            stage.removeAllChildren();
            currentScene = new scenes.Home_Meteor();
            console.log("Starting HOME_METEOR scene");
            break;
        case config.Scene.HOME_PORTAL:
            stage.removeAllChildren();
            currentScene = new scenes.Home_Portal();
            console.log("Starting HOME_PORTAL scene");
            break;
        case config.Scene.HOME_THUNDER:
            stage.removeAllChildren();
            currentScene = new scenes.Home_Thunder;
            console.log("Starting HOME_THUNDER scene");
            break;
        case config.Scene.HOME_RAIN:
            stage.removeAllChildren();
            currentScene = new scenes.Home_Rain;
            console.log("Starting HOME_RAIN scene");
            break;
        case config.Scene.FOREST_START:
            stage.removeAllChildren();
            currentScene = new scenes.Forest_Start;
            console.log("Starting FOREST_START scene");
            break;
        case config.Scene.FOREST_HUNT:
            stage.removeAllChildren();
            currentScene = new scenes.Forest_Hunt;
            console.log("Starting FOREST_HUNT scene");
            break;
        case config.Scene.FOREST_LOOSE:
            stage.removeAllChildren();
            currentScene = new scenes.Forest_Loose;
            console.log("Starting FOREST_LOOSE scene");
            break;
        case config.Scene.FOREST_WIN:
            stage.removeAllChildren();
            currentScene = new scenes.Forest_Win;
            console.log("Starting FOREST_WIN scene");
            break;
        case config.Scene.NEW_DIMENSION:
            stage.removeAllChildren();
            currentScene = new scenes.New_Dimension;
            console.log("Starting FOREST_WIN scene");
            break;
    }
}
//# sourceMappingURL=game.js.map