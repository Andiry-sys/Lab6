let rect = { x: 10, y: 10 }

let _y = parseInt(prompt(`Enter point Y`))

function SetY(rect, y) {
    return rect.y += y
}

console.log(SetY(rect, _y));