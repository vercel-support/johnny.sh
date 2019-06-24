## How to monitor iOS network activity with charles

First, this is the reference: [link](https://www.raywenderlich.com/1827524-charles-proxy-tutorial-for-ios)

### How to do it

1. Make sure phone and mac are on the same network
2. Turn off proxying on mac os (you just want to proxy the iOS device)
> _in charles_
> Proxy (drop-down menu) ▸ macOS Proxy to uncheck it

3. Check default proxy port on charles, should be 8888
> _in charles_
> Proxy ▸ Proxy Settings, click the Proxies tab and make note of the port number, which by default should be 8888.

4. Get your computer's local IP address
> _in charles_
> Help ▸ Local IP Address and make note of your computer’s IP address. If there is more than one IP Address, pick en0.

5. Allow your iOS device to proxy
> _in iOS_
> tap on the ⓘ button next to your Wi-Fi network. Scroll down to the HTTP Proxy section, select Configure Proxy and then tap Manual.
> Enter your Mac’s IP address for Server and the Charles HTTP Proxy port number for Port. Tap Save.

6. Allow charles to accept iOS proxy connection
> You should get a pop-up warning from Charles on your Mac asking to allow your iOS device to connect. Click Allow. If you don’t see this immediately, that’s okay. It may take a minute or two for it to show up.

7. You should start seeing traffics