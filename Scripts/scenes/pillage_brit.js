var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var PILLAGE_BRIT = (function (_super) {
        __extends(PILLAGE_BRIT, _super);
        function PILLAGE_BRIT() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        PILLAGE_BRIT.prototype.start = function () {
            // Add objects to the scene
            console.log("PILLAGE_BRIT");
            this._bg = new createjs.Bitmap(assets.getResult("background"));
            this.addChild(this._bg);
            partsOfAmulet += 1;
            // Create and add level description
            this._levelDescription = new objects.Label("When you finally send every single of them and whole ship with \"leftovers\" to Helheimm " +
                "You picked up a mysterious piece of a rune, that looked familiar to you... Decided to grab it and leave thinking for alter  " +
                " you start cleaning you axe when your heard some singing coming from the rocks nearby.. ", "40px Consolar", "#000000", config.Screen.TX, config.Screen.TY);
            this.addChild(this._levelDescription);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp next-next scene
            this._leftButtin = new objects.Button("myrmaids", config.Screen.BACK_BUTTON_X - 20, config.Screen.BACK_BUTTON_Y + 405);
            this.addChild(this._leftButtin);
            this._leftButtin.on("click", this._onLeftButtonClick, this);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
            this._midButtin = new objects.Button("back", config.Screen.NEXT_BUTTON_X, config.Screen.NEXT_BUTTON_Y + 420);
            this.addChild(this._midButtin);
            this._midButtin.on("click", this._onMidButtonClick, this);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
            //this._rightButton = new objects.Button("ships", config.Screen.NEXT_BUTTON_X+180, config.Screen.NEXT_BUTTON_Y+410);
            //this.addChild(this._rightButton);
            //this._rightButton.on("runAway", this._onRightButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        PILLAGE_BRIT.prototype.update = function () {
            // Update objects
        };
        PILLAGE_BRIT.prototype._onLeftButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            console.log("Wanna see myrmaids");
            scene = config.Scene.MYRMAIDS;
            changeScene();
        };
        PILLAGE_BRIT.prototype._onMidButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.HOME_DESTROYED;
            changeScene();
        };
        return PILLAGE_BRIT;
    }(objects.Scene));
    scenes.PILLAGE_BRIT = PILLAGE_BRIT;
})(scenes || (scenes = {}));
//# sourceMappingURL=pillage_brit.js.map