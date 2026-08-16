/*
 * shared/validate.js
 *
 * WorldGenEditor domain validation.
 */

import { TILE_SPEC } from "../data/tile-spec.js";


export function validateDomain(
    domain,
    tileType
) {

    const domains = {

        terrain: [
            TILE_SPEC.terrain.micro.name,
            TILE_SPEC.terrain.macro.name
        ],

        road: [
            TILE_SPEC.road.micro.name,
            TILE_SPEC.road.macro.name
        ],

        feature: [
            TILE_SPEC.feature.micro.name,
            TILE_SPEC.feature.macro.name
        ]

    };

    const allowed =
        domains[domain];

    if (!allowed) {

        console.warn(
            `[WGE] Unknown domain: ${domain}`
        );

        return false;

    }

    if (!allowed.includes(tileType)) {

        console.error(
            `[WGE] INVALID: ${tileType} not allowed in ${domain}`
        );

        return false;

    }

    return true;

}
