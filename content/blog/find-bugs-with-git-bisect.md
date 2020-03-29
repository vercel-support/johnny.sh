---
title: Hunting Bugs with Git Bisect
date: "2020-03-28T09:58:31.735Z"
visual: '../images/bug-in-git-history-artists-depiction.jpg'
description: 'Find the source of bugs with this underrated git command'
---

Consider the following fictional scenario...

My friends and I have been hacking hard on a [Dog Butler Service](/notes/git-commands-i-forget/) web app. The product owner is anxiously awaiting our upcoming release `v3.6.0`.

The Dog Butler Service already has these existing features:
* **Anti-Mailman Monitoring** - released in `v3.0.0`
* **Barking & Woofing Journal** - released in `v3.2.0`
* **Bespoke Dog Bones on Demand** - released in `v3.3.0`
* **Poop Scooping Waste Removal** - released in `v3.4.0`
* **Dog Walking Scheduler** - released in `v3.5.0`

In our current sprint for upcoming `v3.6.0`, we have added a new feature: **Anti-Cat Monitoring**, which we are developing on branch `feat/anti-cat`. 

We've been working on the anti-cat feature for a few weeks, the sprint is coming to an end. In preparation for release, we deploy our work for QA and testing. Everything seems to be going well, when suddenly, drama ensues...

## A Bug Appears

QA has found a bug! It seems something has gone wrong with the previously stable **Anti-Mailman Monitoring** feature. 

Whenever users try to access the **Anti-Mailman Monitoring** feature, the whole screen turns red.

What has happened? This feature was stable weeks ago! How could it just break, we didn't touch any of that code!

Furthermore, the codebase for the anti-mailman feature is massive, tens of thousands of lines of code. My friends and I agree: finding the bug that causes the screen to turn red would be like finding a **needle in a haystack**. Not only that, we don't know when this bug was introduced, it could have been in our new **Anti-Cat Monitoring**, or in any of the features developed since you finished in the weeks since **Anti-Mailman Monitoring** was shipped.

## Git Bisect to the Rescue

Instead of aimlessly poring through the anti-mailman feature codebase, we can rely on the git history to systematically find the specific piece of code that created this bug.

Instead of messy trial and error debugging, `git bisect` utilizes binary search to find the specific commit that introduced a bug.

The basic flow works like:
* Tell `git` where a bad version is
* Tell `git` where a good version is
* `git` will then go through the history, and checkout to different commit hashes from the history
* For each commit hash that is checked out, you need to manually check if the bug is reproducible, and tell `git` if it is `good` or `bad`

Let's use this awesome command to find out when and where the anti-mailman feature was broken.


#### 1. Start on the bad branch

To begin, we need to let `git` know we want to hunt a bug with `bisect`, starting on our **bad** branch, `feat/anti-cat`
```bash
$ git checkout feat/anti-cat
$ git bisect start
$ git bisect bad # <- we know current version has the bug
```

#### 2. Give a good version

Next, we need to give `git bisect` a version which definitely does **not** have the bug. We know at least when we released the feature on `v3.0.0` that the feature worked with no bugs, so let's use that version. 

Any branch, tag, or hash that we know is working without the bug can be used here.

```bash
$ git bisect good v3.0.0 # v3.0.0 is known to be good
```

We see the following in our terminal output:
```bash
Bisecting: 39 revisions left to test after this (roughly 5 steps)
[c13639d47be094bb521dde8bd8c2100646177230] scaffold bespoke dogbones on demand
```
Now `git` has a range that it can start searching for the bug in, somewhere between `v3.0.0` and `feat/anti-cat`.  `git bisect` will now check out various commits in that range, starting in the middle. 

#### 3. Test the commits `git bisect` gives you

As we can see in the terminal output from step 2., `git bisect` has already checked out to the commit `[c13639d47be094bb521dde8bd8c2100646177230] add bespoke dogbones on demand` in the middle of the range we gave. 

Now, we need to test this commit to see if the bug is present. Open the web app, and check if the screen turns red when accessing the anti-mailman feature.

We can see the anti-mailman feature works as expected, no red screen, so we go back to the terminal and tell `git` this is a good commit:
```bash
$ git bisect good
Bisecting: 19 revisions left to test after this (roughly 4 steps)
[b13f1d4dbd520d276febc348dfcb415a32447476] add anti-cat styles
```

At this point, we've now been checked out to the next commit that `git bisect` wants us to test. We repeat the same steps: check if the bug is reproducible. We test and can see that the screen does indeed turn red, the bug is reproducible while on this commit.

```bash
$ git bisect bad
Bisecting: 10 revisions left to test after this (roughly 3 steps)
[b13f1d4dbd520d276febc348dfcb415a32447476] add anti-cat styles
```

Keep doing this, `git bisect` will continue to narrow down the commits on our behalf, until eventually...

#### 4. The offending commit is identified

Finally, `git bisect` has found the commit where the bug was introduced!

```bash
$ git bisect bad
caa63906510d30b001bc047eb86b0cea23f857b4 is the first bad commit
commit caa63906510d30b001bc047eb86b0cea23f857b4
Author: John Roberts <johnny@johnny.sh>
Date:   Thu Mar 19 21:50:41 2020 +0800

    feat: add cat awareness to global security module
```

We've already identified the specific commit where the bug was introduced. It seems that by adding cat awareness to our security module, I inadvertantly broke compatibility for the mailman monitoring feature.

We can now look at the specific diff for this commit to see what code was changed. This is a lot more manageable, because this commit was probably no more than 200 lines of code changed.

Now that we've identified the offending commit, we need to reset our bisect:

```bash
$ git bisect reset
```

This will check us out to HEAD on `feat/anti-cat`, where we can implement a fix for the bug that was introduced in this feature branch.

## Wrap Up

By using `git bisect`, we were able to narrow down the bug to a single commit, in which we know for certain the bug was introduced. By doing so, we only have to look at the files changed in that commit, and debug from there. Instead of poking at the tens of thousands of lines that make up the **Anti-Mailman Monitoring** feature, we just have to look at the 200 or so lines from the `feat: add cat awareness to global security module` commit. 

This is much more effective than blind trial-and-error debugging. 

Also -- this is a great way to get at the root of the problem, rather than implementing duct tape on top of the bug from a surface level.

Happy bisecting!

_Key visual: Artist's depiction of a bug in git history_