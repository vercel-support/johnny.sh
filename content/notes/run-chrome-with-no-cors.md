# Run chrome with CORS disabled for development purposes
Sometimes need to turn off cors in chrome for debugging purposes.
Exit chrome, then run this line:

```
$ open -a Google\ Chrome --args --disable-web-security --user-data-dir
```
Only for debugging purposes! Make sure to close chrome and restart after using this.