var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Forest_Hunt = (function (_super) {
        __extends(Forest_Hunt, _super);
        function Forest_Hunt() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Forest_Hunt.prototype.start = function () {
            // Add objects to the scene
            console.log("Hunt scene started");
            this._enemyType = Math.round(Math.random() * 3);
            // Create and add level description
            this._levelDescription = new objects.Label("Battle! with enemy " + this._enemyType, "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._levelDescription);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp next-next scene
            this._backButtin = new objects.Button("Back", config.Screen.BACK_BUTTON_X, config.Screen.BACK_BUTTON_Y);
            this.addChild(this._backButtin);
            this._backButtin.on("click", this._onBackButtonClick, this);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
            this._nextButton = new objects.Button("Back", config.Screen.NEXT_BUTTON_X, config.Screen.NEXT_BUTTON_Y);
            this.addChild(this._nextButton);
            this._nextButton.on("click", this._onNextButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Forest_Hunt.prototype.update = function () {
            // Update objects
        };
        Forest_Hunt.prototype._onBackButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.FOREST_START;
            changeScene();
        };
        Forest_Hunt.prototype._onNextButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            if (this._enemyType == 1) {
                scene = config.Scene.FOREST_LOOSE;
            }
            else {
                scene = config.Scene.FOREST_WIN;
            }
            changeScene();
        };
        return Forest_Hunt;
    }(objects.Scene));
    scenes.Forest_Hunt = Forest_Hunt;
})(scenes || (scenes = {}));
//# sourceMappingURL=forest_hunt.js.map