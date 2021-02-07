# The Twelve Factor App

The twelve-factor app is a methodology for building software-as-a-service (SaaS) apps. It's developed by some engineers at Heroku, who have obviously witnessed the creation and operation of thousands of successful SaaS apps.

It's a broad, conceptual guidebook -- theoretical by nature, but with concrete, practical, feasible guidelines for deploying real apps on real cloud native infrastructure.


### I. Codebase

Using git version control is important. Clear bias towards monolith architecture -- 1 codebase = 1 app; otherwise it's not a codebase, it's a distributed system.

A *deploy* is a running instance of the app. The codebase is the same across all deploys, although different versions may be active in each deploy. 

### II. Dependencies

Explicitly declare and isolate dependencies.

Dependencies installed through a package manager (e.g., npm) can be installed system-wide or scoped into the directory containing the app (known as “vendoring” or “bundling”).

Never use system-wide dependencies in your app. A twelve-factor app never relies on implicit existence of system-wide packages. It declares all dependencies, completely and exactly, via a dependency declaration manifest.

### III. Config

Obviously, never store configuration credentials, secrets, resource URLs, etc. into your version control. Not just for security, but for composability.

A litmus test for whether an app has all config correctly factored out of the code is whether the codebase could be made open source at any moment, without compromising any credentials.

A common workaround for this is to `.gitignore` a file, e.g., `database.yaml` or `secrets.js` which holds configuration values and secrets. This is bad, don't do this, it creates confusion and also dependence on some kind of implicit behavior in your build step.

Instead, use **environment variables**.

In a twelve-factor app, env vars are granular controls, each fully orthogonal to other env vars. They are never grouped together as “environments”, but instead are independently managed for each deploy. This is a model that scales up smoothly as the app naturally expands into more deploys over its lifetime.

### IV. Backing services

*Backing services* are any service that the app consumes over it's lifetime, kind of like **upstream** dependencies of the app. Like: database, messaging/queueing systems, SMTP system, caching systems.

The code for a twelve-factor app makes no distinction between local and third party services. To the app, both are attached resources, accessed via a URL or other locator/credentials stored in the config. 

You should be able to swap out any backing service at any time by simply changing the config. It's fully decoupled from your application code.

### V. Build, release, run

TODO: the rest