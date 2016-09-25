var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Home_Portal = (function (_super) {
        __extends(Home_Portal, _super);
        function Home_Portal() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Home_Portal.prototype.start = function () {
            // Add objects to the scene
            console.log("Hunt scene started");
            // Create and add level description
            this._levelDescription = new objects.Label("Amulet start to shine! Look it is a portal, where meteor was", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
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
        Home_Portal.prototype.update = function () {
            // Update objects
        };
        Home_Portal.prototype._onBackButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.HOME_THUNDER;
            changeScene();
        };
        Home_Portal.prototype._onNextButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.NEW_DIMENSION;
            changeScene();
        };
        return Home_Portal;
    }(objects.Scene));
    scenes.Home_Portal = Home_Portal;
})(scenes || (scenes = {}));
//# sourceMappingURL=home_portal.js.map