import {
  emitAllClientsRaw,
  emitClientRaw,
  on,
  onClient,
  Player,
  PointBlip,
} from "alt-server";
import { BlipHandler } from "./logic";

const cfg = {
  defaultBlip: {
    sprite: 1,
    scale: 1.0,
    alpha: 225,
    color: 0,
  },
  vehicleBlip: {
    sprite: 326, // Config in vehicleSprite
    scale: 1.0,
    alpha: 225,
    color: 0,
  },
};
const vehicleSprite = [
  326, // Compacts
  724, // Sedan
  821, // SUV
  326, // Coupes
  824, // Muscle
  756, // Sport Classic
  523, // Sport
  825, // Super Sport
  348, // Motorcycle
  757, // Off-Road
  318, // Industrial
  85, // Utility
  67, // Van
  348, // Bike / Cycle
  410, // Boat
  422, // Helicopter
  423, // Planes
  513, // Service
  56, // Emergency
  421, // Military
  477, // Commercial
  795, // Train
];

onClient(
  "client::globalPlayerBlips::set::vehicleClass",
  (src: Player, vClass: number) => {
    BlipHandler.updatePlayerBlip(src, cfg.vehicleBlip, vehicleSprite[vClass]);
  }
);

setInterval(() => {
  Player.all.forEach((player) => {
    if (createdBlips[player.id] == null) return;
    createdBlips[player.id].pos = player.pos;
  });
}, 50);
