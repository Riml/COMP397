/*
    Module to store globally accessible values and states for the game.
*/
module config {
    export class Scene {
        public static MENU : number = 0;
        public static GAME_START : number = 1;
        public static HOME_FIRST : number = 2;
        public static HOME_METEOR : number = 3;
        public static FOREST_START : number = 4;
        public static HOME_DESTROYED : number = 5;
        public static HOME_THUNDER : number = 6;
        public static FOREST_HUNT : number = 7;
        public static FOREST_WIN : number = 8;
        public static FOREST_LOOSE : number = 9;
        public static HOME_RAIN : number = 10;
        public static HOME_PORTAL : number = 11;
        public static NEW_DIMENSION : number = 12;
       
        
        //public static GAMEOVER : number = 2;
    }

    export class Screen {
        public static WIDTH : number = 800;
        public static HEIGHT : number = 600;
        public static CENTER_X : number = 320;
        public static CENTER_Y : number = 240;
        
        public static BACK_BUTTON_X:number=100;
        public static BACK_BUTTON_Y:number=100;
        public static NEXT_BUTTON_X:number=400;
        public static NEXT_BUTTON_Y:number=100;
    }
    
    export class Game {
        public static FPS : number = 60;
    }
}