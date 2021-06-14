input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -150) {
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    } else if (input.acceleration(Dimension.X) > 150) {
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    } else if (input.acceleration(Dimension.Y) < -150) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    } else if (input.acceleration(Dimension.Y) > 150) {
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
})
