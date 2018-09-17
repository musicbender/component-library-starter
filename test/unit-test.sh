#!/bin/bash
export NODE_ENV=test;
mocha \
  --compilers js:babel-core/register \
  $(find src test -name '*.test.js'  -not -path 'node_modules/*')
