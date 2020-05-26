---
title: You Might Not Need Gatsby
date: "2020-05-17T15:24:00.603Z"
visual: '../images/not-react-related.jpg'
description: 'A simpler static stack'
---

First of all, disclaimer: I love [Gatbsy](https://www.gatsbyjs.org/). This framework has completely changed the way I think about both Static Site Generators(SSG) and React. It has sent shockwaves through the frontend community, and showed us the true potential of the so-called "JAMstack". This website is even built with Gatsby!

Okay, done with disclaimer, time to complain. There are some serious issues with Gatsby, the new popular kid in React, Frontend, and SSG worlds.

## What could possibly be wrong with Gatsby?
In short bullet point format:

* Why do I have to write a GraphQL query to render an image?
* Loss of some SPA/History API features, such as embedded routes. Gatsby is closer in design to traditional SSG, and kind of locked to 1 component <-> 1 URL route.
* [Sharp](https://github.com/lovell/sharp) dependency is huge and always breaks
* Opinionated plugin ecosystem -- unnecessary wrapper/obfuscation of existing APIs. For example, I can't just use `styled-components`, I have to use `gatsby-plugin-styled-components`.
* Architecture, code splitting, etc. for the most part have to be done "the Gatsby way".

**Note**: As a reminder, the goal in using a SSG like Gatsby is to create fast, static, SEO-friendly pages. That's a gross oversimplification, yes. But basically: we want to send meaningful HTML content over the line when users visit our site, rather than just sending the `<div id="app"></div>`.

## If not Gatsby...then how?

So -- are the above headaches a price worth paying for creating static pages with React? 

For small projects, Gatsby is probably not worth the headaches. Can't I just write Plain Old React without having to conform to "the Gatsby way"? And get a static site out of it? How?

### Static Generation

The answer is prerendering.

So, once again, I went down the [prerendering](https://prerender.johnny.sh/) rabbit hole, my old nemesis. I think of prerendering as a life hack -- turn your client rendered app into a static site, for free. Again, gross oversimplification.

This time, I came back from the rabbit hole with [react-snap](https://github.com/stereobooster/react-snap). In my experience, this library works a lot better than the popular [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin). It also doesn't rely on Webpack, and supports inline critical css! 

### Offline Support

Do you really need `gatsby-plugin-offline` to make your site work offline? Instead of learning it "the Gatsby way", you can instead spend that cognitive investment in vanilla Service Worker API, and get something more configurable. You also get universally applicable knowledge this way, not Gatsby specific knowledge.

The configuration and usage is equally complex as setting up offline support for Gatsby, in my experience. Check the [MDN Docs on Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API).

## Show me code

If you want to try this vanilla-static-react setup, you can try my scaffolding tool directly.

```sh
$ npx sssrpbp --name=some-project
```

Also, this all works for Preact just the same.

```sh
$ npx sssrpbp --name=some-micro-project --template=preact
```

This will create a react app set up to use react-snap and parcel, with my personal picks for prettier and eslint setup. It's probably more of a personal preference tool here, not a "framework". Regardless, the key ingredients are there and could be a starting point. 

Some more code links where I'm using this alternative to Gatsby:
* [`sssrpbp`](https://github.com/johncalvinroberts/sssrpbp) -- the above mentioned scaffolding tool/boilerplate.
* [pprmnt](https://github.com/johncalvinroberts/pprmnt) -- an app built using this setup, including offline support.
* [damachabeats](https://github.com/johncalvinroberts/damacha) -- another app using this setup.

### Conclusion

These are just my personal ramblings on the topic of static React, and I found what I like the best and what I'm most productive with. There's also [react-static](https://github.com/react-static/react-static), which might be worth looking into.

No other comments on this topic.

_Key visual: a photo I took the other night on my bike. Not react related, at all._
