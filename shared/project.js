/*
 * shared/project.js
 *
 * Global generation state.
 *
 * Geometry belongs to TILE_SPEC.
 * Generation state belongs here.
 */

export const PROJECT = {

    name: "WorldGenEditor",

    version: "0.2",

    seed: Math.floor(Math.random() * 1e9),

    settings: {

        biome: "plains",

        warLevel: 4

    }

};
