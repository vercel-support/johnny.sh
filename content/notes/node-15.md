# Node JS v15.0.0


Node js just (at the time of writing this) released `v15.0.0`. Release notes [here](https://nodejs.org/en/blog/release/v15.0.0/).

One big thing: a feature to throw on unhandled rejections, see nodejs[#33021](https://github.com/nodejs/node/pull/33021).

Welp. That's cool. Reminded me, though, that on versions before v15, you need to manually implement this behavior, to prevent hanging broken server from unhandled rejection.

This is the snippet:

```
process.on('unhandledRejection', (err) => {
  console.error(err.stack);
  process.exit(1);
});
```

Okay, done. Keep using this snippet until v15+ is the equivalent of what is v10 right now.