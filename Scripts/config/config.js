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
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        return Scene;
    }());
    Scene.GAME_START = 0;
    Scene.HOME_FIRST = 1;
    Scene.SHORE = 2;
    Scene.BRITISH = 3;
    Scene.BOAT = 4;
    Scene.KRAKEN = 5;
    Scene.BAD_FISHING = 6;
    Scene.FOREST = 7;
    Scene.HUNT = 8;
    Scene.CAT = 9;
    Scene.VILLAGES = 10;
    Scene.MYRMAIDS = 11;
    Scene.PILLAGE = 12; //not in use
    Scene.DRAGON = 13;
    Scene.DWARFS = 14;
    Scene.NEIGHBOURS = 15; //not in use
    Scene.HOME_DEATH = 16;
    Scene.HOME_DESTROYED = 17;
    Scene.RUN_AWAY = 18;
    Scene.PILLAGE_BRIT = 19;
    Scene.ELVES = 20;
    Scene.MJOLNIR = 21;
    config.Scene = Scene;
    var Screen = (function () {
        function Screen() {
        }
        return Screen;
    }());
    Screen.WIDTH = 800;
    Screen.HEIGHT = 600;
    Screen.TX = 10;
    Screen.TY = 20;
    //whyyy.. forget to change center
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