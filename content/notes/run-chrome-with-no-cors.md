# Run chrome with CORS disabled for development purposes
Sometimes need to turn off cors in chrome for debugging purposes.
Exit chrome, then run this line:

```
$ open -a Google\ Chrome --args --disable-web-security --user-data-dir={your chrome user data folder}
```

It was a bit difficult to find the chrome user data folder. Here is a list of [default locations](https://chromium.googlesource.com/chromium/src.git/+/62.0.3202.58/docs/user_data_dir.md#Mac-OS-X).

Mine was at `/Users/john/Library/Application Support/Google/Chrome `

Only for debugging purposes! Make sure to close chrome and restart after using this.