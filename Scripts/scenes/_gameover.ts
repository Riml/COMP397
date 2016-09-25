module scenes {
    export class Gameover extends objects.Scene {
        
        // PRIVATE VARIABLES
        private _bg : createjs.Bitmap;
        private _backButton : objects.Button;

        constructor() {
            super();
        }

        //self-explanatory method
        public start() : void {


            // Add objects to the scene
            console.log("Gameover scene started");

            this._bg= new createjs.Bitmap(assets.getResult("Bg"));
            this.addChild(this._bg);

            this._backButton = new objects.Button("marioBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 50);
            this.addChild(this._backButton);
            this._backButton.on("click", this._onBackButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        //run on every  tick
        public update() : void {
            // Update objects
        }
        private _onBackButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}