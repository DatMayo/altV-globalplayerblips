import { emitClient, on, Player } from "alt-server";

on("playerEnteredVehicle", (player: Player) => {
  emitClient(player, "client::globalPlayerBlips::get::vehicleClass");
});
