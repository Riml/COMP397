var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Forest_Loose = (function (_super) {
        __extends(Forest_Loose, _super);
        function Forest_Loose() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Forest_Loose.prototype.start = function () {
            // Add objects to the scene
            console.log("Hunt scene started");
            // Create and add level description
            this._levelDescription = new objects.Label("Viking : Minotaur - 0:1", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._levelDescription);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp next-next scene
            this._backButtin = new objects.Button("Back", config.Screen.BACK_BUTTON_X, config.Screen.BACK_BUTTON_Y);
            this.addChild(this._backButtin);
            this._backButtin.on("click", this._onBackButtonClick, this);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
            //this._nextButton = new objects.Button("Back", config.Screen.NEXT_BUTTON_X, config.Screen.NEXT_BUTTON_Y);
            //this.addChild(this._nextButton);
            //this._nextButton.on("click", this._onNextButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Forest_Loose.prototype.update = function () {
            // Update objects
        };
        Forest_Loose.prototype._onBackButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.GAME_START;
            changeScene();
        };
        return Forest_Loose;
    }(objects.Scene));
    scenes.Forest_Loose = Forest_Loose;
})(scenes || (scenes = {}));
//# sourceMappingURL=forest_loose.js.map