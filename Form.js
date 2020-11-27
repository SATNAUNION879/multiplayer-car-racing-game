class Form  {
    constructor ()  {
       this.input =createInput("name");
       this.button =createButton("play");
       this.greeting =createElement("h2");
    }
    hide()   {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display()  {
        var title =createElement('h2');
        title.html("CAR RACING GAME");
        title.position(430,100);

        

         this.input.position(430,160);
       this. button.position (450,200);

         this.button.mousePressed(() => {
           this. input.hide();
           this. button.hide();

           player.name =this.input.value();
            playerCount+=1;
            player.index= playerCount;
            player.update();
            player.updateCount(playerCount);


            
           this. greeting.html("Hello"+player.name);
           this. greeting.position(430,160);
            

        

        })
        
    }
}