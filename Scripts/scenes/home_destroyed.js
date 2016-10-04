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
    var HOME_DESTROYED = (function (_super) {
        __extends(HOME_DESTROYED, _super);
        function HOME_DESTROYED() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        HOME_DESTROYED.prototype.start = function () {
            // Add objects to the scene
            console.log("HOME_DESTROYED");
            this._bg = new createjs.Bitmap(assets.getResult("background"));
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("By returning home you find it in ruins. It apparently was smashed by a meteor..." +
                "Small still hot rock is peacfuly lying in the center of the house. You notice a small keyhole like place in it...  "
                + "But leaving thinking for later you decide to...", "40px Consolar", "#000000", config.Screen.TX, config.Screen.TY);
            this.addChild(this._gameLabel);
            if (partsOfAmulet >= 2) {
                // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp next-next scene
                this._leftButtin = new objects.Button("amulet", config.Screen.BACK_BUTTON_X - 20, config.Screen.BACK_BUTTON_Y + 405);
                this.addChild(this._leftButtin);
                this._leftButtin.on("click", this._onMJButtonClick, this);
            }
            else {
                // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp next-next scene
                this._leftButtin = new objects.Button("shore", config.Screen.BACK_BUTTON_X - 20, config.Screen.BACK_BUTTON_Y + 405);
                this.addChild(this._leftButtin);
                this._leftButtin.on("click", this._onLeftButtonClick, this);
                // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
                //this._midButtin = new objects.Button("stay", config.Screen.NEXT_BUTTON_X, config.Screen.NEXT_BUTTON_Y+420);
                //this.addChild(this._midButtin);
                //this._midButtin.on("click", this._onMidButtonClick, this);
                // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
                this._rightButton = new objects.Button("forest", config.Screen.NEXT_BUTTON_X + 180, config.Screen.NEXT_BUTTON_Y + 410);
                this.addChild(this._rightButton);
                this._rightButton.on("click", this._onRightButtonClick, this);
            }
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        HOME_DESTROYED.prototype.update = function () {
            // Update objects
        };
        HOME_DESTROYED.prototype._onLeftButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SHORE;
            changeScene();
        };
        HOME_DESTROYED.prototype._onMidButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.HOME_DEATH;
            changeScene();
        };
        HOME_DESTROYED.prototype._onMJButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MJOLNIR;
            changeScene();
        };
        HOME_DESTROYED.prototype._onRightButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.FOREST;
            changeScene();
        };
        return HOME_DESTROYED;
    }(objects.Scene));
    scenes.HOME_DESTROYED = HOME_DESTROYED;
})(scenes || (scenes = {}));
//# sourceMappingURL=home_destroyed.js.map