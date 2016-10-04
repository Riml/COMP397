/*
    Module to store globally accessible values and states for the game.
*/
module config {
    export class Scene {
       
        public static GAME_START : number = 0;
        public static HOME_FIRST : number = 1;
        public static SHORE : number = 2;
        public static BRITISH : number = 3;
        public static BOAT : number = 4;
        public static KRAKEN : number = 5;
        public static BAD_FISHING : number = 6;
        public static FOREST : number = 7;
        public static HUNT : number = 8;
        public static CAT : number = 9;
        public static VILLAGES : number = 10;
        public static MYRMAIDS : number = 11;
        public static PILLAGE : number = 12;
        public static DRAGON : number = 13;
        public static DWARFS : number = 14;
        public static NEIGHBOURS : number = 15;
        public static HOME_DEATH : number = 16;
        public static HOME_DESTROYED : number = 17;
        public static RUN_AWAY : number = 18;
        public static PILLAGE_BRIT : number = 19;
        public static ELVES : number = 20;
        //public static RUN_AWAY : number = 21;
        //public static RUN_AWAY : number = 22;
        
        
        
       
        
    }

    export class Screen {
        public static WIDTH : number = 800;
        public static HEIGHT : number = 600;
        public static TX : number = 10;
        public static TY : number = 20;
        
        
        
        //whyyy.. forget to change center
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