# Publish canary versions of packages on CI/CD

This is a super-quick synopsis of how to automate the publishing of packages in a [lerna]() monorepo.

### The Problem

So you chose Lerna to solve some problem, and now you're using a monorepo architecture and publishing packages to NPM as your model for sharing code. Congrats. Now you have a new problem: how to get dev versions of that latest code ASAP.

It's **super fucking annoying** to publish packages from your local setup everytime you make a change that you need in a downstream repo or application.

The problem: how to automate the publishing of packages.

### The Solution



Run this command from the root of your lerna monorepo on your CI/CD environment. There are two variables you need to add. In this example, I'm using environment variables, but you could use anything to ferry these valuables around.
* `$NPM_TOKEN` - your personal NPM [access token](https://docs.npmjs.com/about-access-tokens/)
* `$BRANCH` - the name of the branch being pushed (could be `$TRAVIS_BRANCH` for example, if using travis)


```
$ echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc # put NPM token into HOME
$ lerna publish prerelease --canary --exact --yes --dist-tag=$BRANCH --preid=$BRANCH
```

This will push a [canary/prelease](https://blog.npmjs.org/post/115305091285/introducing-the-npm-semantic-version-calculator) version of any of your packages which have changes.

The package is then available under a [dist tag](https://docs.npmjs.com/cli/dist-tag) of the `$BRANCH` name. aka, if the `$BRANCH` is `v3-feat-120`, you will publish the package with version `v1.1.0-v3-feat-120.1`. 

It's **super fucking annoying** to have to always update the downstream package.json everytime that CI/CD runs, so that's what the dist tag is for. With the `dist-tag` as `v3-feat-120`, you can use that in your package.json like so:


```
{
 "dependencies": {
   "@my-monorepo/cool-package": "v3-feat-120"
  }
}
```

Therefore, if you push on this branch again, CI/CD will publish `v1.1.0-v3-feat-120.2`, but and dist tag `v3-feat-120` will then change its resolution from `v1.1.0-v3-feat-120.1` to `v1.1.0-v3-feat-120.2`.


Get it? Got it? Good.
