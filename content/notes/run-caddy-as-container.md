Caddy as a container
Directions here -> https://hub.docker.com/r/abiosoft/caddy/

in Docker compose:
1. Add this to compose
```
  app:
    image: keymetrics/pm2:8-alpine
		// whatever your node app is
  caddy: 
    image: abiosoft/caddy
    depends_on: 
      - app
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/Caddyfile
      - $HOME/.caddy:/root/.caddy
```

2. Add a `Caddyfile` in your project, use the container name of your app
```
slime.yu-mi.us {
        proxy / app:3000
}
```

3. Run `docker-compose up -d`
4. Your app is (hopefully) live :) 