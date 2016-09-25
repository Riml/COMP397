module scenes {
    export class Home_Rain extends objects.Scene {

        // PRIVATE VARIABLES
        private _levelDescription : objects.Label;
        private _backButtin : objects.Button;
        private _nextButton : objects.Button;
      
        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Hunt scene started");



            // Create and add level description
            this._levelDescription = new objects.Label("Starts to Rain", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._levelDescription);

            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp next-next scene
            this._backButtin = new objects.Button("Back", config.Screen.BACK_BUTTON_X, config.Screen.BACK_BUTTON_Y);
            this.addChild(this._backButtin);
            this._backButtin.on("click", this._onBackButtonClick, this);

            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
            this._nextButton = new objects.Button("Back", config.Screen.NEXT_BUTTON_X, config.Screen.NEXT_BUTTON_Y);
            this.addChild(this._nextButton);
            this._nextButton.on("click", this._onNextButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onBackButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.HOME_THUNDER;
            changeScene();
        }
        private _onNextButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.FOREST_START;
            changeScene();
        }
    }
}