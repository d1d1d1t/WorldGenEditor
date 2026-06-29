import { TILE_SPEC } from "../data/tile-spec.js";

/**
 * Basic domain guard (prototype version)
 */
export function validateDomain(domain, tileType) {
  const rules = TILE_SPEC.rules?.binding;

  if (!rules || !rules[domain]) {
    console.warn(`[WGE] Unknown domain: ${domain}`);
    return false;
  }

  if (!rules[domain].includes(tileType)) {
    console.error(`[WGE] INVALID: ${tileType} not allowed in ${domain}`);
    return false;
  }

  return true;
}