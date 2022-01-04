import {emitAllClientsRaw, emitClientRaw, on, Player, PointBlip} from 'alt-server';

on('playerConnect', async (player: Player) => {
  const playerBlip = new PointBlip(0,0,0)
  playerBlip.alpha = 0
  createdBlips[player.id] = playerBlip
  await updatePlayerBlip(player, cfg.defaultBlip)
  emitAllClientsRaw('server::globalPlayerBlips::refresh::category')
  emitClientRaw(player, 'server::globalPlayerBlips::hide::blipFromPlayer', player)
})
