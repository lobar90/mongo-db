#!/bin/bash

if [ -f ".env" ]; then
    source .env
fi

docker ps -aq --filter="name=l2_mongodb_container" | while read -r container; do docker container stop "$container" && docker container rm "$container"; done
docker images -aq 'l2_mongodb_*' | while read -r image; do docker rmi -f "$image"; done
docker build -t l2_mongodb_image .
docker run --name l2_mongodb_container -d \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME="$MONGO_INITDB_ROOT_USERNAME" \
  -e MONGO_INITDB_ROOT_PASSWORD="$MONGO_INITDB_ROOT_PASSWORD" \
  --network l2_network \
  l2_mongodb_image

npm run build && npm run start
