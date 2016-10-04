var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var FOREST = (function (_super) {
        __extends(FOREST, _super);
        function FOREST() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        FOREST.prototype.start = function () {
            // Add objects to the scene
            console.log("FOREST");
            this._bg = new createjs.Bitmap(assets.getResult("background"));
            this.addChild(this._bg);
            // Create and add level description
            this._levelDescription = new objects.Label("You was just about to enter the forest, as suddenly you rembered that there are few new villages that you wanted to \"visit\". "
                + "You are looking at the Valkyria flying thru the skies, but decision have to be made so you are going to ...", "40px Consolar", "#000000", config.Screen.TX, config.Screen.TY);
            this.addChild(this._levelDescription);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp next-next scene
            this._leftButtin = new objects.Button("villages", config.Screen.BACK_BUTTON_X - 20, config.Screen.BACK_BUTTON_Y + 405);
            this.addChild(this._leftButtin);
            this._leftButtin.on("click", this._onLeftButtonClick, this);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
            this._midButtin = new objects.Button("back", config.Screen.NEXT_BUTTON_X, config.Screen.NEXT_BUTTON_Y + 420);
            this.addChild(this._midButtin);
            this._midButtin.on("click", this._onMidButtonClick, this);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
            this._rightButton = new objects.Button("hunt", config.Screen.NEXT_BUTTON_X + 180, config.Screen.NEXT_BUTTON_Y + 410);
            this.addChild(this._rightButton);
            this._rightButton.on("click", this._onRightButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        FOREST.prototype.update = function () {
            // Update objects
        };
        FOREST.prototype._onLeftButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.VILLAGES;
            changeScene();
        };
        FOREST.prototype._onMidButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.HOME_DESTROYED;
            changeScene();
        };
        FOREST.prototype._onRightButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.HUNT;
            changeScene();
        };
        return FOREST;
    }(objects.Scene));
    scenes.FOREST = FOREST;
})(scenes || (scenes = {}));
//# sourceMappingURL=forest.js.map