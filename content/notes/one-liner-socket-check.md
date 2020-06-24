One liner linux/bash to check if a socket is open on 443
`(echo >/dev/tcp/127.0.0.1/443) &>/dev/null || echo "closed"`