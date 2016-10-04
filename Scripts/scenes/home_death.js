var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var scenes;
(function (scenes) {
    var HOME_DEATH = (function (_super) {
        __extends(HOME_DEATH, _super);
        function HOME_DEATH() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        HOME_DEATH.prototype.start = function () {
            // Add objects to the scene
            console.log("HOME_DEATH");
            this._bg = new createjs.Bitmap(assets.getResult("background"));
            this.addChild(this._bg);
            partsOfAmulet += 1;
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("SMASH! A meteor appeared out of nowhere, smashing into you! Your hot diggity damn ax was not able to stop it, and you smolder and perish.", "40px Consolar", "#000000", config.Screen.TX, config.Screen.TY);
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._gameButton = new objects.Button("start", config.Screen.CENTER_X + 50, config.Screen.CENTER_Y + 260);
            this.addChild(this._gameButton);
            this._gameButton.on("click", this._onBackButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        HOME_DEATH.prototype.update = function () {
            // Update objects
        };
        HOME_DEATH.prototype._onBackButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.HOME_FIRST;
            changeScene();
        };
        return HOME_DEATH;
    }(objects.Scene));
    scenes.HOME_DEATH = HOME_DEATH;
})(scenes || (scenes = {}));
//# sourceMappingURL=home_death.js.map