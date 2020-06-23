# USEFUL DOCKER REFERENCE FOR CHINA

1. [Install Docker - Quick Start| Alibaba Cloud Documentation Center](https://www.alibabacloud.com/help/doc-detail/60742.htm)
2. how to set up docker on an ubuntu in china

docker compose in china:
1. https://get.daocloud.io/#install-compose
2. http://www.widuu.com/docker/compose/install.html
FOUND: best way to install is by pip
ref: [Install Docker Compose | Docker Documentation](https://docs.docker.com/compose/install/#install-compose)

*Installing docker compose*
1. install pip `sudo apt install python-pip`
2. use pip to install docker `sudo pip install docker-compose`

*Set Docker Registry*
1. Create a file in `/etc/docker/daemon.json` if doesn’t exist yet
2. Add this line to the JSON
```{
  "registry-mirrors": ["https://registry.docker-cn.com"]
}
```
3. Run `service docker restart`
