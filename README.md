# prima-ai API

### Build Instructions

[Docker](https://www.docker.com/products/docker#/mac)

[NVM](https://github.com/creationix/nvm)


Install application pipeline requirements

```
npm i
```

### Create Docker Image

```
packer build packer/api.json
```

### Start Docker Containers for Integration Testing

```
docker-compose -f compose/test.yml up
```

### Mongo Development Instructions

The following steps will be required for authentication in order to run integration testing.

Do not just copy and paste. Learn what's happening and adjust accordingly before executing.

```
mkdir -p data
docker run --name mongo -d -v `pwd`/data:/data/db -p 27017 mongo
docker exec -it mongo mongo

db.createUser({ user: 'admin', pwd: 'password', roles: [ { role: "root", db: "admin" } ] });

db.auth('admin', 'password')

db.createUser({ user: "user", pwd: "password", "roles": [{"role": "readWrite", "db": "api-environment"}] })
```
