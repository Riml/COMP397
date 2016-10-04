var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var KRAKEN = (function (_super) {
        __extends(KRAKEN, _super);
        function KRAKEN() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        KRAKEN.prototype.start = function () {
            // Add objects to the scene
            console.log("KRAKEN");
            this._bg = new createjs.Bitmap(assets.getResult("background"));
            this.addChild(this._bg);
            // Create and add level description
            this._levelDescription = new objects.Label("K-Kraken!!! That dark spot you've seen below your ship, sadly turned out to be the Kraken.Smash! The Kraken's scaly tentacles smashes into your boat and there's no way out but to sink to depths." +
                "\n\n" +
                "While you're happy with the Kraken taking you to Valhalla, Valkyrie ain't that happy about it." +
                "\n\n" +
                "YOU HAVE BEEN RESURRECTED!", "40px Consolar", "#000000", config.Screen.TX, config.Screen.TY);
            this.addChild(this._levelDescription);
            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp next-next scene
            //this._leftButtin = new objects.Button("boat", config.Screen.BACK_BUTTON_X-20, config.Screen.BACK_BUTTON_Y+405);
            //this.addChild(this._leftButtin);
            //this._leftButtin.on("click", this._onLeftButtonClick, this);
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
        KRAKEN.prototype.update = function () {
            // Update objects
        };
        KRAKEN.prototype._onLeftButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.KRAKEN;
            changeScene();
        };
        KRAKEN.prototype._onMidButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.HOME_FIRST;
            changeScene();
        };
        KRAKEN.prototype._onRightButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.BRITISH;
            changeScene();
        };
        return KRAKEN;
    }(objects.Scene));
    scenes.KRAKEN = KRAKEN;
})(scenes || (scenes = {}));
//# sourceMappingURL=kraken.js.map