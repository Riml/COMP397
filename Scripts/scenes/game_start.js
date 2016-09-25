/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Game_Start = (function (_super) {
        __extends(Game_Start, _super);
        function Game_Start() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Game_Start.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            partsOfAmulet = 0;
            l;
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("One day you just wake up and...", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._gameButton = new objects.Button("Back", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._gameButton);
            this._gameButton.on("click", this._onBackButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Game_Start.prototype.update = function () {
            // Update objects
        };
        Game_Start.prototype._onBackButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.HOME_FIRST;
            changeScene();
        };
        return Game_Start;
    }(objects.Scene));
    scenes.Game_Start = Game_Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=game_start.js.map