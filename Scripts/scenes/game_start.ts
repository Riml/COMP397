/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/

module scenes {
    export class GAME_START extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameLabel : objects.Label;
        private _gameButton : objects.Button;
        private _bg: createjs.Bitmap;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Game scene started");
            partsOfAmulet=0;

            this._bg = new createjs.Bitmap(assets.getResult("background"));
            this.addChild(this._bg);

            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("The Daily Toil of a Viking!", "40px Consolar", "#000000", config.Screen.TX, config.Screen.TY);
            this.addChild(this._gameLabel);

            // Create button for scene and add to Game Scene container. Register for onclick event
            this._gameButton = new objects.Button("start", config.Screen.NEXT_BUTTON_X, config.Screen.NEXT_BUTTON_Y+420);
            this.addChild(this._gameButton);
            this._gameButton.on("click", this._onBackButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onBackButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.HOME_FIRST;
            changeScene();
        }
    }
}