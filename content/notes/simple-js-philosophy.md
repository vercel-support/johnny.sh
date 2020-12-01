# Ultra Simple JS & TS Development Philosophy

This is a note now, but may be expanded into a full blog post when I feel it is appropriate.

This is a collection of concepts for writing readable, maintainable, frindly Node JS-based projects. This includes frontend JS projects, TypeScript projects, Node JS backend projects, anything with a `package.json`. 

JavaScript is a very wide domain, the possibilities of coding styles and tooling are quite vast. There is no "Rails of JS", and therefore the ecosystem is quite literally lacking "rails" -- a guiding set of constraints that make things predictable and master-able.

In electronic music production, I've observed a similar problem: a new tool comes out, be it a new USB controller, a new plugin synth, a new sample pack, a new DAW; and some people (especially beginners) never master their previous tools before picking up the new tools. Yet, at the same time, the people making the most advanced electronic music usually have a limited/constrained set of tools that they know how to use fully, in full mastery of the tool. You have to have full mastery in order to get creative or to have an entire understanding of the system.

The goal here is to outline some philosophy that applies across these types of projects.

The overall philosophy: use constrains to make things predictable, avoid shiny things, keep things as simple as possible.

#### 1. simple scripts.

In your `package.json`, just use simple predictable values in the `scripts` section.

Use `npm start` and `npm build`. That's enough. 

No `npm run dev` or `npm run start-dev` `npm generate && npm build-dev`. 


#### 2. use NODE_ENV

There's no need for a `dev:true` flag on your library. Use `process.env.NODE_ENV = 'development'`.

There's no need for `process.env.NODE_ENV` to be anything besides `development` or `production`.

#### 3. don't use weird language features

TBD

#### 4. Typescript = JavaScript with types

TBD
