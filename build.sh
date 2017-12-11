#!/bin/bash

npm run dist
cd dist
npm version patch
npm publish
