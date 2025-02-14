function Map(Game) {
    this.Game = Game;
}

Map.prototype.create = function() {
  // this.walls = this.Game.add.tilemap('tilemapWalls', 20, 20);
  // this.walls.addTilesetImage('tilemapWalls', 'tilemap', 20, 20);
  // this.wallsLayer =  this.walls.createLayer(0);
  this.topWalls = this.Game.add.tileSprite(0, 0, this.Game.camera.width, this.Game.camera.height, 'topWalls');
  this.topWalls.fixedToCamera = true;
  this.bottomWalls = this.Game.add.tileSprite(0, 1360, this.Game.world.width, 4000 - 1360, 'bottomWalls');

  this.other = this.Game.add.tilemap('tilemapOther', 20, 20);
  this.other.addTilesetImage('tilemapOther', 'tilemap', 20, 20);
  this.otherLayer =  this.other.createLayer(0);

  this.tilemap = this.Game.add.tilemap('tilemap', 20, 20);
  this.tilemap.addTilesetImage('tilemap', 'tilemap', 20, 20);
  this.tilemap.setCollisionByExclusion([28, 31, 44, 57, 104, 105, 106, 107, 108, 109, 110, 111, 91, 98]);

  this.mapLayer =  this.tilemap.createLayer(0);
  this.Game.physics.enable(this.mapLayer, Phaser.Physics.ARCADE);
  this.mapLayer.body.immovable = true;
  this.mapLayer.body.allowGravity = false;
}

module.exports = Map;
