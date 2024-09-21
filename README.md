# Kepler Planet Habitability Analyzer

## Overview

The **Kepler Planet Habitability Analyzer** is a Node.js project designed to process and analyze data from the Kepler satellite, which was launched in 2009 to explore planets outside our solar system. This project utilizes publicly available data from NASA to identify potentially habitable planets based on criteria referenced from a 2015 research paper.

## Features

- Fetches free data from NASA's Kepler mission.
- Analyzes planet characteristics to determine habitability.
- Evaluates planets based on:
  - Earth radius comparison
  - Estimated habitability using Kepler's metrics
  - Sunlight received from its own the Sun like star

## Requirements

- Node.js (version 14 or higher)
- npm (Node package manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/R-sbs/Finding-Habitable-Planets.git
   cd kepler-planet-habitability-analyzer
