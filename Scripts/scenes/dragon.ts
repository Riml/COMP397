/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/
module scenes {
    export class DRAGON extends objects.Scene {

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
            console.log("DRAGON");

            this._bg = new createjs.Bitmap(assets.getResult("background"));
            this.addChild(this._bg);
            partsOfAmulet+=1;

            // Create and add level description
            this._levelDescription = new objects.Label(
                "Dun! Dun! Dunnnnnn! Heading to the Drakon Mountain you go, where you meet with the Dragon"+
                " - your best friend actually. One of your favorite activities as best friends (since birth)"
                +" is to pillage villages. So you two just went and did that, bonding over the loots!"+
                "\n\n"+
                "Taking a break, you enjoy the food obtained by \"hard\" work. It turns out, and it's gift giving time;"+
                " as Dragon presents you a strange amulet! Thanking your best friend, you take it and continue munching on your food."+
                 "\n\n"+
                "Hm... full from the feast, you say goodbye to your friend and go... hunt by yourself or head home."
            , "30px Consolar", "#000000", config.Screen.TX, config.Screen.TY);
            this.addChild(this._levelDescription);

            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp next-next scene
            this._leftButtin = new objects.Button("cat", config.Screen.BACK_BUTTON_X-20, config.Screen.BACK_BUTTON_Y+405);
            this.addChild(this._leftButtin);
            this._leftButtin.on("click", this._onLeftButtonClick, this);

            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
            this._midButtin = new objects.Button("back", config.Screen.NEXT_BUTTON_X, config.Screen.NEXT_BUTTON_Y+420);
            this.addChild(this._midButtin);
            this._midButtin.on("click", this._onMidButtonClick, this);

            // Create button for scene and add to Game Scene container. Register for onclick event. Button will proceed tp previous-next scene
            //this._rightButton = new objects.Button("ships", config.Screen.NEXT_BUTTON_X+180, config.Screen.NEXT_BUTTON_Y+410);
            //this.addChild(this._rightButton);
            //this._rightButton.on("runAway", this._onRightButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onLeftButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            console.log("Wanna see myrmaids");
            scene = config.Scene.CAT;
            changeScene();
        }

        private _onMidButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.HOME_DESTROYED;
            changeScene();
        }

        

        
        
        
    }
}