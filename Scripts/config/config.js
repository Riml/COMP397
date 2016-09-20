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
    Scene.GAME = 1;
    Scene.GAMEOVER = 2;
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