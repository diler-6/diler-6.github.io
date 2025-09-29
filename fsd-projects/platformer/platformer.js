$(function () {
   // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid() 


    // TODO 2 - Create Platforms
     createPlatform(400, 550, 200, 40, "red");
     createPlatform(900, 400, 300, 40, "red");
     createPlatform(200, 400, 300, 40, "red");
     createPlatform(200, 650, 100, 30, "red");
     createPlatform(700, 500, 100, 40, "red");


    // TODO 3 - Create Collectables
     createCollectable("max", 800, 300);
     createCollectable("database", 200, 300 );
     createCollectable("grace", 1100, 600);


    
    // TODO 4 - Create Cannons
     createCannon("bottom", 700, 500);
     createCannon("right", 400, 500);
     createCannon("top", 400, 500);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
