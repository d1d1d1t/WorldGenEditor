import { TILE_SPEC } from "../data/tile-spec.js";

export const CONSTANTS = {
  // micro tiles
  mTile: TILE_SPEC.micro.mTile,
  rTile: TILE_SPEC.micro.rTile,
  eTile: TILE_SPEC.micro.eTile,

  // macro tiles
  tTile: TILE_SPEC.macro.terrain.size,
  pTile: TILE_SPEC.macro.road.size,
  fTile: TILE_SPEC.macro.feature.size,

  // canvas bounds
  canvas: {
    terrain: TILE_SPEC.widgets.terrain,
    road: TILE_SPEC.widgets.road,
    feature: TILE_SPEC.widgets.feature
  }
};