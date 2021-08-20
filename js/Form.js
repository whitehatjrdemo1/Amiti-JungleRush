class Form {
  constructor() {
    this.input = createInput("Name");
    //this.button = createButton('Play');
    this.greeting = createElement("h2");
    this.title = createElement("h2");
    this.reset = createButton("Reset");
    this.single = createButton("Single Player");
    this.multi = createButton("Multiplayer");
  }
  hide() {
    this.greeting.hide();
    this.single.hide();
    this.multi.hide();
    this.input.hide();
    this.title.hide();
    this.reset.hide();
  }

  display() {
    this.title.html("Car Racing Game");
    this.title.position(displayWidth / 2 - 50, 0);

    this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 80);
    this.single.position(displayWidth / 2 + 30, displayHeight / 2);
    this.multi.position(displayWidth / 2 + 150, displayHeight / 2);
    this.reset.position(displayWidth - 100, 20);

    this.multi.mousePressed(() => {
      game.maxCount = 2;
      this.input.hide();
      this.single.hide();
      this.multi.hide();
      player.name = this.input.value();
      console.log(playerCount)
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name);
      this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
    });
    this.single.mousePressed(() => {
      game.maxCount = 1;
      this.input.hide();
      this.single.hide();
      this.multi.hide();
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name);
      this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
    });

    this.reset.mousePressed(() => {
      player.updateCount(0);
      game.update(0);
      database.ref("players").remove();
    });
  }
}
