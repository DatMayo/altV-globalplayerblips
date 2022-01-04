import { on, Player } from "alt-server";
import { BlipHandler } from "../../logic";

on("playerLeftVehicle", (player: Player) => {
  BlipHandler.updatePlayerBlip(player, cfg.defaultBlip);
});
