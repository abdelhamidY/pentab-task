class Rover {
  constructor(
    x,
    y,
    direction,
    obstacles = [
      [1, 4],
      [3, 5],
      [7, 4],
    ]
  ) {
    this.current_x = x;
    this.current_y = y;
    this.current_direction = direction;
    this.obstacles = obstacles;
  }

  isObstacle(x, y) {
    // Loop On Every Obstacle and Compare obstacle_X,obstacle_Y  with x,y in the props of functions
    // In case obstacle_X === x , obstacle_Y === y  Return True
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle_x = this.obstacles[i][0];
      const obstacle_y = this.obstacles[i][1];
      if (obstacle_x === x && obstacle_y === y) {
        return true;
      }
    }
    return false;
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
          // Case Of Moving Left
          this.rotateLeft();
          break;
        case "R":
          // Case Of Moving Right
          this.rotateRight();
          break;
        default:
          console.log("Invalid command");
      }
    }
    // The OutPut Of The Current Coordinates And Direction
    console.log(
      `(${this.current_x}, ${this.current_y}) ${this.current_direction}`
    );
  }

  moveForward() {
    // If Moving Forward In East direction x++  where x++ is the next point in x
    // If Moving Forward In West direction x--  where x-- is the next point in x
    const next_x =
      this.current_x +
      (this.current_direction === "EAST"
        ? 1
        : this.current_direction === "WEST"
        ? -1
        : 0);
    // If Moving Forward In North direction y++  where y++ is the next point in y
    // If Moving Forward In South direction y--   where y-- is the next point in y
    const next_y =
      this.current_y +
      (this.current_direction === "NORTH"
        ? 1
        : this.current_direction === "SOUTH"
        ? -1
        : 0);
    if (this.isObstacle(next_x, next_y)) {
      // If Next_x and Next_y  are the same like and of the obstacles we stopped at the current_ , current_y
      console.log(
        `(${this.current_x}, ${this.current_y}) ${this.current_direction} STOPPED due to collision`
      );
    } else {
      this.current_x = next_x;
      this.current_y = next_y;
    }
  }

  moveBackward() {
    // If Moving Backward In East direction x--  where x-- is the next point in x
    // If Moving Backward In West direction x++  where x++ is the next point in x
    const next_x =
      this.current_x -
      (this.current_direction === "EAST"
        ? 1
        : this.current_direction === "WEST"
        ? -1
        : 0);
    // If Moving Backward In North direction y--  where y-- is the next point in y
    // If Moving Backward In South direction y++   where y++ is the next point in y
    const next_y =
      this.current_y -
      (this.current_direction === "NORTH"
        ? 1
        : this.current_direction === "SOUTH"
        ? -1
        : 0);
    if (this.isObstacle(next_x, next_y)) {
      // If Next_x and Next_y  are the same like and of the obstacles we stopped at the current_ , current_y
      console.log(
        `(${this.current_x}, ${this.current_y}) ${this.current_direction} STOPPED due to collision`
      );
    } else {
      this.current_x = next_x;
      this.current_y = next_y;
    }
  }

  rotateLeft() {
    switch (this.current_direction) {
      //North + Left = West
      //East + Left = North
      //South + Left = East
      //West + Left = South
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

rover.executeCommands("BLFFF");
