var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var BAD_FISIHNG = (function (_super) {
        __extends(BAD_FISIHNG, _super);
        function BAD_FISIHNG() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        BAD_FISIHNG.prototype.start = function () {
            // Add objects to the scene
            console.log("BAD_FISIHNG");
            this._bg = new createjs.Bitmap(assets.getResult("background"));
            this.addChild(this._bg);
            // Create and add level description
            this._levelDescription = new objects.Label("You forget that you are Viking and have no idea how to fish..."
                + " Just after first try you found yourself and you lovely axe deepdown in sea... Oh well, maybe next time you will decide to do something more Viking-ish", "40px Consolar", "#000000", config.Screen.TX, config.Screen.TY);
            this.addChild(this._levelDescription);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp next-next scene
            //this._leftButtin = new objects.Button("boat", config.Screen.BACK_BUTTON_X-20, config.Screen.BACK_BUTTON_Y+405);
            //this.addChild(this._leftButtin);
            // this._leftButtin.on("click", this._onLeftButtonClick, this);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
            this._midButtin = new objects.Button("back", config.Screen.NEXT_BUTTON_X, config.Screen.NEXT_BUTTON_Y + 420);
            this.addChild(this._midButtin);
            this._midButtin.on("click", this._onMidButtonClick, this);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
            //this._rightButton = new objects.Button("british", config.Screen.NEXT_BUTTON_X+180, config.Screen.NEXT_BUTTON_Y+410);
            //this.addChild(this._rightButton);
            //this._rightButton.on("click", this._onRightButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        BAD_FISIHNG.prototype.update = function () {
            // Update objects
        };
        BAD_FISIHNG.prototype._onLeftButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.KRAKEN;
            changeScene();
        };
        BAD_FISIHNG.prototype._onMidButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.HOME_FIRST;
            changeScene();
        };
        BAD_FISIHNG.prototype._onRightButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.BRITISH;
            changeScene();
        };
        return BAD_FISIHNG;
    }(objects.Scene));
    scenes.BAD_FISIHNG = BAD_FISIHNG;
})(scenes || (scenes = {}));
//# sourceMappingURL=bad_fishing.js.map