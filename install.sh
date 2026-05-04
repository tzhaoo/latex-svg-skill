#!/bin/bash

SKILL_DIR=$HOME/.claude/skills/latexgo

git clone https://github.com/tzhaoo/latexgo-skill.git "$SKILL_DIR"
cd "$SKILL_DIR" && npm install
