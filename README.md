# WorldGenEditor – Blender Integration Guide

This document explains how WorldGenEditor outputs are intended to be used inside Blender as procedural inputs for terrain deformation and scene construction.

---

## Overview

WorldGenEditor generates structured 2D data maps:

- Terrain heightmaps
- Road flow maps
- Feature density maps
- Overpass / structural overlay maps

These outputs are designed to be imported into Blender and used as:

- Displacement maps
- Masking layers
- Geometry distribution guides
- Modifier inputs (Geometry Nodes or displacement stacks)

---

## Core Concept

Blender is treated as the final deformation stage.

WorldGenEditor does not render or simulate 3D space.

Instead, it generates **2D procedural control surfaces** that define how geometry behaves in 3D.

---

## Data Types

### 1. Terrain Heightmap

**Resolution:**
- 1920 × 1920

**Format:**
- Grayscale image

**Usage in Blender:**
- Displacement modifier OR Geometry Nodes height input
- White = high elevation
- Black = low elevation

**Recommended setup:**
- Subdivided plane (or dense grid mesh)
- Displacement modifier using image texture
- Midlevel = 0.5

---

### 2. Road Map

**Resolution:**
- 192 × 1920

**Format:**
- Grayscale or mask image

**Meaning:**
- Dark values = road core / carved paths
- Light values = terrain unaffected

**Usage in Blender:**
- Mask for:
  - terrain carving
  - spline generation (curve conversion)
  - road surface extrusion

**Common workflow:**
- Convert image → curve via Geometry Nodes
- Or sample as boolean mask for carving terrain

---

### 3. Feature Density Map

**Resolution:**
- 384 × 288

**Format:**
- Grayscale density field

**Meaning:**
- High values = feature clusters
- Low values = empty space

**Usage in Blender:**
- Instance scattering (Geometry Nodes)
- Asset placement masks
- Density-driven object spawning

---

### 4. Overpass Map

**Resolution:**
- 192 × 384

**Format:**
- Grayscale structural layer

**Meaning:**
- Encodes vertical hierarchy
- Bridge / tunnel regions
- Spatial conflict resolution output

**Usage in Blender:**
- Secondary displacement layer
- Mask for elevated geometry
- Conditional geometry stacking (above/below terrain)

---

## Recommended Blender Setup

### Base Terrain Setup

1. Create a subdivided plane (or grid mesh)
2. Add **Displace Modifier**
3. Load terrain heightmap
4. Set:
   - Midlevel: 0.5
   - Strength: adjustable per scene scale

---

### Road Integration

Option A – Geometry Nodes:
- Sample road map texture
- Use as:
  - curve generation mask
  - or density field for spline instancing

Option B – Displacement carve:
- Invert road mask
- Subtract from terrain heightmap
- Create carved road valleys

---

### Feature System

Use feature density map as:
- instance weight map
- scatter probability field
- biome distribution mask

Typical Geometry Nodes setup:
- Image Texture → Color Ramp → Distribute Points on Faces

---

### Overpass System

Overpass maps represent **layered geometry intent**.

Use cases:
- elevate roads above terrain
- carve tunnels under terrain
- resolve intersections between systems

Typical workflow:
- Use as second displacement input
- Combine with terrain via:
  - Math (Add / Max / Subtract nodes)
- Apply conditional elevation rules

---

## Coordinate Consistency

All systems are aligned through shared tile logic:

- mTile = 64px (terrain unit)
- rTile = 48×32px (road unit)
- eTile = 16px (feature unit)

Blender scale is not fixed—only relative relationships matter.

---

## Export Expectations

WorldGenEditor outputs are expected to be:

- PNG grayscale images
- deterministic (seed-based)
- tile-aligned where applicable
- resolution-stable (no dynamic resizing)

---

## Workflow Summary

1. Generate terrain → heightmap
2. Generate roads → path mask
3. Generate features → density map
4. Generate overpass → structural overlay
5. Import all into Blender
6. Combine via displacement + geometry nodes

---

## Notes

- WorldGenEditor does not simulate 3D physics
- Blender is responsible for final spatial interpretation
- All outputs are deterministic and reusable across scenes