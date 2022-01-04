import { on } from "alt-server";
import { BlipHandler } from "../../logic";

on("resourceStart", (errored: boolean) => {
  if (errored) return;

  BlipHandler.clearAllBlips();
});
