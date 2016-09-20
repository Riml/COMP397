var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Gameover = (function (_super) {
        __extends(Gameover, _super);
        function Gameover() {
            _super.call(this);
        }
        //self-explanatory method
        Gameover.prototype.start = function () {
            // Add objects to the scene
            console.log("Gameover scene started");
            this._bg = new createjs.Bitmap(assets.getResult("Bg"));
            this.addChild(this._bg);
            this._backButton = new objects.Button("marioBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 50);
            this.addChild(this._backButton);
            this._backButton.on("click", this._onBackButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        //run on every  tick
        Gameover.prototype.update = function () {
            // Update objects
        };
        Gameover.prototype._onBackButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Gameover;
    }(objects.Scene));
    scenes.Gameover = Gameover;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map