var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var BRITISH = (function (_super) {
        __extends(BRITISH, _super);
        function BRITISH() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        BRITISH.prototype.start = function () {
            // Add objects to the scene
            console.log("BRITISH");
            this._bg = new createjs.Bitmap(assets.getResult("background"));
            this.addChild(this._bg);
            // Create and add level description
            this._levelDescription = new objects.Label("Closer you go to the ships, but at the snap of a lightning you've found yourself surrounded by dozens of armed Conquistadors. ", "40px Consolar", "#000000", config.Screen.TX, config.Screen.TY);
            this.addChild(this._levelDescription);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp next-next scene
            this._leftButtin = new objects.Button("attack2", config.Screen.BACK_BUTTON_X - 20, config.Screen.BACK_BUTTON_Y + 405);
            this.addChild(this._leftButtin);
            this._leftButtin.on("click", this._onLeftButtonClick, this);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
            //this._midButtin = new objects.Button("back", config.Screen.NEXT_BUTTON_X, config.Screen.NEXT_BUTTON_Y+420);
            //this.addChild(this._midButtin);
            //this._midButtin.on("click", this._onMidButtonClick, this);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
            this._rightButton = new objects.Button("runAway", config.Screen.NEXT_BUTTON_X + 180, config.Screen.NEXT_BUTTON_Y + 410);
            this.addChild(this._rightButton);
            this._rightButton.on("click", this._onRightButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        BRITISH.prototype.update = function () {
            // Update objects
        };
        BRITISH.prototype._onLeftButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.PILLAGE_BRIT;
            changeScene();
        };
        BRITISH.prototype._onMidButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.HOME_DESTROYED;
            changeScene();
        };
        BRITISH.prototype._onRightButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.RUN_AWAY;
            changeScene();
        };
        return BRITISH;
    }(objects.Scene));
    scenes.BRITISH = BRITISH;
})(scenes || (scenes = {}));
//# sourceMappingURL=british.js.map