---
title: I made a new website.
date: "2019-08-06T15:24:00.603Z"
visual: '../images/shadowsocks-cat-hehe-idk.jpg'
description: 'A brief intro to shadowsocks proxy'
---

# Getting Started with Shadowsocks

In case you didn't know, the best way to get around the Great Firewall is with an obfuscated proxy like [shadowsocks](https://github.com/shadowsocks), not a VPN. Shadowsocks is amazing, the client is free and open source. You just have to bring your own server. Here are some providers/options:

### Self hosted / VPS
Set up your own shadowsocks server on any VPS from a provider, preferably one with high bandwidth + fast network I/O.
* [Bandwagon](https://bandwagonhost.com/)
* [Vultr](https://www.vultr.com/)
* [Digital Ocean](https://www.digitalocean.com/)

Setting up your own is pretty simple (here's a [tutorial](https://www.tipsforchina.com/how-to-setup-a-fast-shadowsocks-server-on-vultr-vps-the-easy-way.html)), or if you use docker it's super simple, just run this command:

```bash
docker run -d --restart=always -p 1314:1314 ficapy/shadowsocks -s 0.0.0.0 -p 1314 -k YOUR_PASSWORD -m ENCRYPTION_METHOD
```

Replace `YOUR_PASSWORD` with the password you want, and `ENCRYPTION_METHOD` with the encryption method you want.

Also, you can replace `1314:1314` with whatever port you want to expose your proxy on. You might need to change this often, it's a cat and mouse game.

### Providers
Managing your own server is cool, but it's hard to get serious performance out of it. If you need a fast daily driver, get an account with any of these providers:

* [Monocloud](https://www.monocloud.me/)
* [shadowsocks.ch](https://home.shadowsocks.ch/)
* [caonima](https://caonima.io/)
