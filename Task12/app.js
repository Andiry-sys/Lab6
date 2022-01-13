let rect = { X: 20, Y: 10 }

let _x = parseInt(prompt(`Enter X`))
let _y = parseInt(prompt(`Enter Y`))

function Check(rect, x, y) {
    if (rect.X > x && rect.Y > y && x < rect.X && y < rect.Y) {
        console.log("Ok");
    }
    else {
        console.log("No");
    }
    return rect
}

console.log(Check(rect, _x, _y))