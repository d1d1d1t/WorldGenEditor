export const PROJECT = {
  name: "WorldGenEditor",
  version: "0.1-prototype",

  // global runtime state (hub-controlled only)
  seed: Math.floor(Math.random() * 1e9),

  settings: {
    biome: "plains",
    resolution: 1920
  }
};