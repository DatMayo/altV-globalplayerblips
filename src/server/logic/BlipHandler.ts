import { Player, PointBlip } from "alt-server";

export class BlipHandler {
  private static createdBlips: PointBlip[] = [];

  static clearAllBlips() {
    PointBlip.all.forEach((blip) => blip.destroy());
  }

  static updatePlayerBlip(player: Player, data: any, sprite?: number) {
    const blip = BlipHandler.createdBlips[player.id];
    blip.sprite = sprite ? sprite : data.sprite;
    blip.color = data.color;
    blip.alpha = data.alpha;
    blip.name = player.name;
    BlipHandler.createdBlips[player.id] = blip;
  }
}
