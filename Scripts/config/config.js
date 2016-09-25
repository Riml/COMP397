/*
    Module to store globally accessible values and states for the game.
*/
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        return Scene;
    }());
    Scene.MENU = 0;
    Scene.GAME_START = 1;
    Scene.HOME_FIRST = 2;
    Scene.HOME_METEOR = 3;
    Scene.FOREST_START = 4;
    Scene.HOME_DESTROYED = 5;
    Scene.HOME_THUNDER = 6;
    Scene.FOREST_HUNT = 7;
    Scene.FOREST_WIN = 8;
    Scene.FOREST_LOOSE = 9;
    Scene.HOME_RAIN = 10;
    Scene.HOME_PORTAL = 11;
    Scene.NEW_DIMENSION = 12;
    config.Scene = Scene;
    var Screen = (function () {
        function Screen() {
        }
        return Screen;
    }());
    Screen.WIDTH = 800;
    Screen.HEIGHT = 600;
    Screen.CENTER_X = 320;
    Screen.CENTER_Y = 240;
    Screen.BACK_BUTTON_X = 100;
    Screen.BACK_BUTTON_Y = 100;
    Screen.NEXT_BUTTON_X = 400;
    Screen.NEXT_BUTTON_Y = 100;
    config.Screen = Screen;
    var Game = (function () {
        function Game() {
        }
        return Game;
    }());
    Game.FPS = 60;
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map