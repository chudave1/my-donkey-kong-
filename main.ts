namespace SpriteKind {
    export const Princess = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        mySprite.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Princess, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
    game.gameOver(true)
})
let Projectile4: Sprite = null
let Projectile3: Sprite = null
let projectile2: Sprite = null
let Projectile5: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . e e e 5 5 f 5 . . . . . 
    . . . e 5 e 5 5 5 f 5 5 5 . . . 
    . . . e 5 e e 5 5 5 f 5 5 5 . . 
    . . . . e 5 5 5 5 f f f f . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . 2 2 8 2 2 8 2 2 . . . . 
    . . . 2 2 2 8 2 2 8 2 2 2 . . . 
    . . 2 2 2 2 8 8 8 8 2 2 2 2 . . 
    . . 5 5 2 8 5 8 8 5 8 2 5 5 . . 
    . . 5 5 5 8 8 8 8 8 8 5 5 5 . . 
    . . 5 5 8 8 8 8 8 8 8 8 5 5 . . 
    . . . . 8 8 8 . . 8 8 8 . . . . 
    . . . e e e . . . . e e e . . . 
    . . e e e e . . . . e e e e . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 0)
mySprite.ay = 300
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles10)
for (let value of tiles.getTilesByType(assets.tile`tile4`)) {
    mySprite2 = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Princess)
    tiles.placeOnTile(mySprite2, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.splash("Donkey Kong Replica.", "Press A to Start")
game.onUpdate(function () {
    mySprite.setImage(img`
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . e e e 5 5 f 5 . . . . . 
        . . . e 5 e 5 5 5 f 5 5 5 . . . 
        . . . e 5 e e 5 5 5 f 5 5 5 . . 
        . . . . e 5 5 5 5 f f f f . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . 2 2 8 2 2 8 2 2 . . . . 
        . . . 2 2 2 8 2 2 8 2 2 2 . . . 
        . . 2 2 2 2 8 8 8 8 2 2 2 2 . . 
        . . 5 5 2 8 5 8 8 5 8 2 5 5 . . 
        . . 5 5 5 8 8 8 8 8 8 5 5 5 . . 
        . . 5 5 8 8 8 8 8 8 8 8 5 5 . . 
        . . . . 8 8 8 . . 8 8 8 . . . . 
        . . . e e e . . . . e e e . . . 
        . . e e e e . . . . e e e e . . 
        `)
    if (mySprite.vy < 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . 5 5 5 . 
            . . . . 2 2 2 2 2 2 2 2 2 5 5 . 
            . . . . e e e 5 5 f 5 . 2 2 2 . 
            . . . e 5 e 5 5 5 f 5 5 5 2 2 . 
            . . . e 5 e e 5 5 5 f 5 5 5 2 . 
            . . . e e 5 5 5 5 f f f f 2 . . 
            . . . . . 5 5 5 5 5 5 5 2 2 . . 
            5 5 2 2 2 2 8 2 2 2 8 2 2 . . e 
            5 5 2 2 2 2 2 8 2 2 2 8 . . e e 
            . 5 5 2 2 2 2 8 8 8 8 5 8 8 e e 
            . . . . 8 8 8 8 5 8 8 8 8 8 e e 
            . . e e 8 8 8 8 8 8 8 8 8 8 e e 
            . e e e 8 8 8 8 8 8 . . . . . . 
            . e e . . . . . . . . . . . . . 
            `)
    } else if (mySprite.vy > 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . 5 5 5 . 
            . . . . 2 2 2 2 2 2 2 2 2 5 5 . 
            . . . . e e e 5 5 f 5 . 2 2 2 . 
            . . . e 5 e 5 5 5 f 5 5 5 2 2 . 
            . . . e 5 e e 5 5 5 f 5 5 5 2 . 
            . . . e e 5 5 5 5 f f f f 2 . . 
            . . . . . 5 5 5 5 5 5 5 2 2 . . 
            5 5 2 2 2 2 8 2 2 2 8 2 2 . . e 
            5 5 2 2 2 2 2 8 2 2 2 8 . . e e 
            . 5 5 2 2 2 2 8 8 8 8 5 8 8 e e 
            . . . . 8 8 8 8 5 8 8 8 8 8 e e 
            . . e e 8 8 8 8 8 8 8 8 8 8 e e 
            . e e e 8 8 8 8 8 8 . . . . . . 
            . e e . . . . . . . . . . . . . 
            `)
    } else if (mySprite.x % 2 == 0) {
        mySprite.setImage(img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . . e e e 5 5 f 5 . . . . . 
            . . . e 5 e 5 5 5 f 5 5 5 . . . 
            . . . e 5 e e 5 5 5 f 5 5 5 . . 
            . . . e e 5 5 5 5 f f f f . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . e e e e 8 8 e e . . . . . . 
            5 5 e e e e 8 8 8 e e e 5 5 5 . 
            5 5 5 . e e 8 5 8 8 8 e e 5 5 . 
            5 5 . . 8 8 8 8 8 8 8 . . . . . 
            . . . 8 8 8 8 8 8 8 8 . . e . . 
            . . 8 8 8 8 8 8 8 8 8 8 e e . . 
            . 8 8 8 8 8 8 8 8 8 8 8 e e . . 
            e e 8 8 8 . . . . 8 8 8 e e . . 
            e e e . . . . . . . . . . . . . 
            `)
    }
    if (mySprite.vx < 0) {
        mySprite.image.flipX()
    }
})
game.onUpdateInterval(2000, function () {
    Projectile5 = sprites.createProjectileFromSide(img`
        . . e f e e e e e e e e f e . . 
        . e e f e e e e e e e e f e e . 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        . e e f e e e e e e e e f e e . 
        . . e f e e e e e e e e f e . . 
        `, -75, 0)
    tiles.placeOnTile(Projectile5, tiles.getTileLocation(29, 18))
})
game.onUpdateInterval(2000, function () {
    projectile2 = sprites.createProjectileFromSide(img`
        . . e f e e e e e e e e f e . . 
        . e e f e e e e e e e e f e e . 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        . e e f e e e e e e e e f e e . 
        . . e f e e e e e e e e f e . . 
        `, 75, 0)
    tiles.placeOnTile(projectile2, tiles.getTileLocation(0, 13))
})
game.onUpdateInterval(2000, function () {
    Projectile5 = sprites.createProjectileFromSide(img`
        . . e f e e e e e e e e f e . . 
        . e e f e e e e e e e e f e e . 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        . e e f e e e e e e e e f e e . 
        . . e f e e e e e e e e f e . . 
        `, -75, 0)
    tiles.placeOnTile(Projectile5, tiles.getTileLocation(29, 27))
})
game.onUpdateInterval(2000, function () {
    Projectile3 = sprites.createProjectileFromSide(img`
        . . e f e e e e e e e e f e . . 
        . e e f e e e e e e e e f e e . 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        . e e f e e e e e e e e f e e . 
        . . e f e e e e e e e e f e . . 
        `, 75, 0)
    tiles.placeOnTile(Projectile3, tiles.getTileLocation(0, 23))
})
game.onUpdateInterval(2000, function () {
    Projectile5 = sprites.createProjectileFromSide(img`
        . . e f e e e e e e e e f e . . 
        . e e f e e e e e e e e f e e . 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        . e e f e e e e e e e e f e e . 
        . . e f e e e e e e e e f e . . 
        `, -75, 0)
    tiles.placeOnTile(Projectile5, tiles.getTileLocation(29, 8))
})
game.onUpdateInterval(2000, function () {
    Projectile4 = sprites.createProjectileFromSide(img`
        . . e f e e e e e e e e f e . . 
        . e e f e e e e e e e e f e e . 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        e e e f e e e e e e e e f e e e 
        . e e f e e e e e e e e f e e . 
        . . e f e e e e e e e e f e . . 
        `, 75, 0)
    tiles.placeOnTile(Projectile4, tiles.getTileLocation(0, 4))
})
