class Rover {
  // Class Rover
  constructor(x, y, direction) {
    this.current_x = x;
    this.current_y = y;
    this.current_direction = direction;
  }

  executeCommands(commandString) {
    for (let i = 0; i < commandString.length; i++) {
      const command = commandString.charAt(i);
      switch (command) {
        case "F":
          // Case Of Moving Forward
          this.moveForward();
          break;
        case "B":
          // Case Of Moving Backward
          this.moveBackward();
          break;
        case "L":
          // Case Of Rotating Left
          this.rotateLeft();
          break;
        case "R":
          // Case Of Rotating Right
          this.rotateRight();
          break;
        default:
          // In Case The Command Wasn't One Of The Four Cases
          console.log("Invalid command");
      }
    }
    // The OutPut Of The Current Coordinates And Direction
    console.log(
      `(${this.current_x}, ${this.current_y}) ${this.current_direction}`
    );
  }

  moveForward() {
    // North And South Are In Y Axis
    // East And West Are in X Axis
    // North Y++ South Y--
    // East X++ West X--
    switch (this.current_direction) {
      case "NORTH":
        this.current_y++;
        break;
      case "EAST":
        this.current_x++;
        break;
      case "SOUTH":
        this.current_y--;
        break;
      case "WEST":
        this.current_x--;
        break;
    }
  }

  moveBackward() {
    // North And South Are In Y Axis
    // East And West Are in X Axis
    // North Y-- South Y++
    // East X-- West X++
    switch (this.current_direction) {
      case "NORTH":
        this.current_y--;
        break;
      case "EAST":
        this.current_x--;
        break;
      case "SOUTH":
        this.current_y++;
        break;
      case "WEST":
        this.current_x++;
        break;
    }
  }

  rotateLeft() {
    //North + Left = West
    //East + Left = North
    //South + Left = East
    //West + Left = South
    switch (this.current_direction) {
      case "NORTH":
        this.current_direction = "WEST";
        break;
      case "EAST":
        this.current_direction = "NORTH";
        break;
      case "SOUTH":
        this.current_direction = "EAST";
        break;
      case "WEST":
        this.current_direction = "SOUTH";
        break;
    }
  }

  rotateRight() {
    //North + Right = East
    //East + Right = South
    //South + Right = West
    //West + Right = North
    switch (this.current_direction) {
      case "NORTH":
        this.current_direction = "EAST";
        break;
      case "EAST":
        this.current_direction = "SOUTH";
        break;
      case "SOUTH":
        this.current_direction = "WEST";
        break;
      case "WEST":
        this.current_direction = "NORTH";
        break;
    }
  }
}

const rover = new Rover(4, 2, "EAST");

// 4 Is The Starting Position At X Axis
// 2 Is The Starting Position At Y Axis
// East Is The Starting Direction

rover.executeCommands("FLFFFRFLB");
