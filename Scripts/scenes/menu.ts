/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _menuButton : objects.Button;
        private _menuLabel : objects.Label;
        private _gameoverButton : objects.Button;

        // Menu Class Contructor
        constructor()
        {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");

            this._menuLabel= new objects.Label("Welcomenn!","60px Verdana","#acfade",config.Screen.CENTER_X, config.Screen.CENTER_Y)
            this.addChild(this._menuLabel);
            // Add button to scene. Register for click callback function
            this._menuButton = new objects.Button("Start", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._startButtonClick, this);

            //Add gameover button with respective callback
           // this._gameoverButton = new objects.Button("Gameover", config.Screen.CENTER_X, config.Screen.CENTER_Y + 250);
            //this.addChild(this._gameoverButton);
            //this._gameoverButton.on("click", this._overButtonClick, this);

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {

        }

        // Fucntion for when button is pressed
        private _startButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME_START;
            changeScene();
        }

          
    }
}