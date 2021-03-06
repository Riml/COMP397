var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var ELVES = (function (_super) {
        __extends(ELVES, _super);
        function ELVES() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        ELVES.prototype.start = function () {
            // Add objects to the scene
            console.log("ELVES");
            this._bg = new createjs.Bitmap(assets.getResult("background"));
            this.addChild(this._bg);
            // Create and add level description
            this._levelDescription = new objects.Label("As you approach the Elven Village, you hear screaming all" +
                " around you as you sliced the guards after they preemptively attack you. Continuing into the village, as the villagers avoid you." +
                "\n\n" +
                "You come across a beautiful elven woman. Her face twists into a vicious snarl, spitting at you as you approach." +
                " PTUI! Her spit sounded as it landed right on your face. You smile, recognizing and approving of her feral disposition." +
                " You are about to say something when she faints dramatically pitching forward, luckily you catch her." +
                "\n\n" +
                "Back at your home, she finally wakes. To your euphoria, she grudgingly agrees to live with you, once you promise to stop pillaging their village." +
                " You live with her for days, seeing her blossom and you thought she truly loved you." +
                "\n\n" +
                "Nay, you are the Viking and she is the Elf. She poisons you and herself, dying in each other's arms.", "30px Consolar", "#000000", config.Screen.TX, config.Screen.TY);
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
        ELVES.prototype.update = function () {
            // Update objects
        };
        ELVES.prototype._onLeftButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.KRAKEN;
            changeScene();
        };
        ELVES.prototype._onMidButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.HOME_FIRST;
            changeScene();
        };
        ELVES.prototype._onRightButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.BRITISH;
            changeScene();
        };
        return ELVES;
    }(objects.Scene));
    scenes.ELVES = ELVES;
})(scenes || (scenes = {}));
//# sourceMappingURL=elves.js.map