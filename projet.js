var prompt = require("prompt")
var beep = require('beepbeep')

var grid = [
    ["N", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
}

function turnLeft(robot) {

    switch (robot.direction) {
        case "N":
            robot.direction = "W";
            break;

        case "W":
            robot.direction = "S";
            break;

        case "S":
            robot.direction = "E";
            break;

        case "E":
            robot.direction = "N";
            break;
    }

    grid[robot.y][robot.x] = robot.direction

    // console.log("The rover has turned left, its new direction is:", robot.direction);
}

// turnLeft(rover)

function turnRight(robot) {

    switch (robot.direction) {
        case "N":
            robot.direction = "E";
            break;

        case "E":
            robot.direction = "S";
            break;

        case "S":
            robot.direction = "W";
            break;

        case "W":
            robot.direction = "N";
            break;
    }

    grid[robot.y][robot.x] = robot.direction

    // console.log("The rover has turned right, its new direction is:", robot.direction);
}

// turnRight(rover);

function moveForward(robot) {
    var err = "";

    robot.travelLog.push({
        x: robot.x,
        y: robot.y
    })

    switch (robot.direction) {
        case "N":
            if (robot.y === 0) {
                err = "The rover can't go northern. The rover stays at the same position";
            } else {
                robot.y--;
                // robot.y = robot.y - 1; // pareil que la ligne au dessus
            }

            break;

        case "S":
            if (robot.y === 9) {
                err = "The rover can't go southern. The rover stays at the same position";
            } else {
                robot.y++;
            }

            break;

        case "E":
            if (robot.x === 9) {
                err = "The rover can't go eastern. The rover stays at the same position";
            } else {
                robot.x++;
            }

            break;

        case "W":
            if (robot.x === 0) {
                err = "The rover can't go western. The rover stays at the same position";
            } else {
                robot.x--;
            }

            break;
    }

    if (err) {
        beep(3, 300)
        console.error(err);
    } else {
        var lastPosition = robot.travelLog[robot.travelLog.length - 1]
        console.log(lastPosition);

        grid[lastPosition.y][lastPosition.x] = " ";

        grid[robot.y][robot.x] = robot.direction;

        // console.log(`The rover has moved forward. The new position of the rover is x: ${robot.x} and y: ${robot.y}`);
    }

}

function moveBackward(robot) {
    var err = "";

    robot.travelLog.push({
        x: robot.x,
        y: robot.y
    })

    switch (robot.direction) {
        case "S":
            if (robot.y === 0) {
                err = "The rover can't go northern. The rover stays at the same position";
            } else {
                robot.y--;
            }

            break;

        case "N":
            if (robot.y === 9) {
                err = "The rover can't go southern. The rover stays at the same position";
            } else {
                robot.y++;
            }

            break;

        case "W":
            if (robot.x === 9) {
                err = "The rover can't go eastern. The rover stays at the same position";
            } else {
                robot.x++;
            }

            break;

        case "E":
            if (robot.x === 0) {
                err = "The rover can't go western. The rover stays at the same position";
            } else {
                robot.x--;
            }

            break;
    }

    if (err) {
        beep(3, 300)
        console.error(err);
    } else {
        var lastPosition = robot.travelLog[robot.travelLog.length - 1]
        console.log(lastPosition);

        grid[lastPosition.y][lastPosition.x] = " ";

        grid[robot.y][robot.x] = robot.direction;

        // console.log(`The rover has moved backwards. The new position of the rover is x: ${robot.x} and y: ${robot.y}`);
    }

}

// moveForward(rover);

function pilotRover(strInstructions) {

    for (var i = 0; i < strInstructions.length; i++) {

        // console.log(strInstructions.charAt(i));

        switch (strInstructions.charAt(i)) {
            case "l":
                turnLeft(rover);
                break;

            case "r":
                turnRight(rover);
                break;

            case "f":
                moveForward(rover);
                break;

            case "b":
                moveBackward(rover);
                break;
        }
    }

    console.table(grid)
}


// pilotRover("rrffflff")


// console.table(grid);

function askInstructions() {

    prompt.get(

        ["instructions"],

        function (err, res) {
            if (err) {
                console.log(err);
                return;
            }

            // console.log(res);

            if (res.instructions === "exit") {
                console.log("The travel log of the rover is:\n", rover.travelLog);
                return;
            } else {

                if (res.instructions.search(/^[lfrb]*$/g) === -1) {
                    console.log("Please enter a valid command: (l)eft, (r)ight, (f)orward, (b)ackward");
                    beep()
                } else {
                    pilotRover(res.instructions)

                }
                askInstructions()
            }
        }
    )
}

console.table(grid);
askInstructions()