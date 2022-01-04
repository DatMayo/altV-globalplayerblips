import { on, Player } from "alt-server";

on("playerDisconnect", (player: Player) => {
  if (!createdBlips[player.id]) return;
  createdBlips[player.id].display = 0;
  createdBlips[player.id].destroy();
});
