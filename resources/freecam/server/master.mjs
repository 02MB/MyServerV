import alt, { Player, Vector3 } from 'alt';

alt.onClient('freecam:setPosition', function(player, x, y, z) {
    alt.log('Moved location');

    var health = player.health;
    player.maxHealth = 999999999;
    player.health = 999999999;

    player.pos = new Vector3(x, y, z);

    alt.setTimeout(function() {
        player.maxHealth = 200;
        player.health = health;
    }, 10000);
});
