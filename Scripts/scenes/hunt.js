var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var HUNT = (function (_super) {
        __extends(HUNT, _super);
        function HUNT() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        HUNT.prototype.start = function () {
            // Add objects to the scene
            console.log("HUNT");
            this._bg = new createjs.Bitmap(assets.getResult("background"));
            this.addChild(this._bg);
            // Create and add level description
            this._levelDescription = new objects.Label("You entered the forest, and from here you can see a Dragon mountain and path to a place with a cat. It is hunt time! so you decide to hunt for...", "40px Consolar", "#000000", config.Screen.TX, config.Screen.TY);
            this.addChild(this._levelDescription);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp next-next scene
            this._leftButtin = new objects.Button("cat", config.Screen.BACK_BUTTON_X - 20, config.Screen.BACK_BUTTON_Y + 405);
            this.addChild(this._leftButtin);
            this._leftButtin.on("click", this._onLeftButtonClick, this);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
            this._midButtin = new objects.Button("back", config.Screen.NEXT_BUTTON_X, config.Screen.NEXT_BUTTON_Y + 420);
            this.addChild(this._midButtin);
            this._midButtin.on("click", this._onMidButtonClick, this);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
            this._rightButton = new objects.Button("dragon", config.Screen.NEXT_BUTTON_X + 180, config.Screen.NEXT_BUTTON_Y + 410);
            this.addChild(this._rightButton);
            this._rightButton.on("click", this._onRightButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        HUNT.prototype.update = function () {
            // Update objects
        };
        HUNT.prototype._onLeftButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.CAT;
            changeScene();
        };
        HUNT.prototype._onMidButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.HOME_DESTROYED;
            changeScene();
        };
        HUNT.prototype._onRightButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.DRAGON;
            changeScene();
        };
        return HUNT;
    }(objects.Scene));
    scenes.HUNT = HUNT;
})(scenes || (scenes = {}));
//# sourceMappingURL=hunt.js.map