/*--------------------------------------
Created by: Ilmir Tayhcinov
Created on: September 28, 2016
Last Modifie by: Ilmir Tayhcinov
Last Modified: October 4, 2016
Based on work of: Wallace Balaniuc
------------------------------------------
Scene  module to group all user-defined scenes  under the same "namespace aka module"
Game scene that contains all assets and functionality associated with the game itself
*/
module scenes {
    export class SHORE extends objects.Scene {

        // PRIVATE VARIABLES
        private _levelDescription : objects.Label;
        private _leftButtin : objects.Button;
        private _midButtin : objects.Button;
        private _rightButton : objects.Button;
        private _bg: createjs.Bitmap;
      
        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("SHORE");

            this._bg = new createjs.Bitmap(assets.getResult("background"));
            this.addChild(this._bg);

            // Create and add level description
            this._levelDescription = new objects.Label("Off to the shore, you patrol. There are boats everywhere. One close by, and the other, "+
            " quite an odd shape for a boat, at a distance. You decide to...", 
            "40px Consolar", "#000000", config.Screen.TX, config.Screen.TY);
            this.addChild(this._levelDescription);

            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp next-next scene
            this._leftButtin = new objects.Button("boat", config.Screen.BACK_BUTTON_X-20, config.Screen.BACK_BUTTON_Y+405);
            this.addChild(this._leftButtin);
            this._leftButtin.on("click", this._onLeftButtonClick, this);

            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
            this._midButtin = new objects.Button("back", config.Screen.NEXT_BUTTON_X, config.Screen.NEXT_BUTTON_Y+420);
            this.addChild(this._midButtin);
            this._midButtin.on("click", this._onMidButtonClick, this);

            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
            this._rightButton = new objects.Button("ships", config.Screen.NEXT_BUTTON_X+180, config.Screen.NEXT_BUTTON_Y+410);
            this.addChild(this._rightButton);
            this._rightButton.on("click", this._onRightButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onLeftButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.BOAT;
            changeScene();
        }

        private _onMidButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.HOME_DESTROYED;
            changeScene();
        }
        private _onRightButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.BRITISH;
            changeScene();
        }
    }
}