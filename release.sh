#!/bin/bash

git pull origin master
npm run build
sudo forever restart server/prod-server.js
