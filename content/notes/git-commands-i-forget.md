# GIT COMMANDS I FORGET

I honestly always forget these guys...

## Cherry Pick

One of the best git commands ever.
```
$ git cherry-pick <commit hash>
```

Be prepared for merge conflicts. Usually easy to sort out though. When done sorting out conflicts, run `git add .` and `git commit`. 
You will create a commit with the same commit name as the commit you are cherry-picking. You can also cherry-pick a range of commits.
```
$ git cherry-pick <initial_commit_hash>..<terminal_commit_hash>
```

## Cherry Picking from different repos
This is a bit more advanced. Consider the case where you have two different repos, maybe originally one was a fork of the other or something, you made changes and want to backport the changes to the other repo. Here's an example

Say you have repo `dog-catering-service`, and you eventually forked that and built a bigger dog business with more services than just catering. This repo is `dog-butler-service` and includes all the code from `dog-catering-service`. You make changes in the `dog-butler-service` to the catering code, and you want to backport these changes to `dog-catering-service`.

This is how we do it.

First, check out to `dog-catering-service` and add a new remote, the `dog-butler-service`

```
$ cd dog-catering-service
$ git remote add butler git@gitservice.com/dog-butler-service.git
$ git fetch butler
$ git remote -v
> origin git@gitservice.com/dog-catering-service
> butler git@gitservice.com/dog-butler-service
```

Now you have two remotes, `origin` and `butler`. Fun fact, `origin` has no special syntactic meaning in git, it's just the default name for a remote.
Anyways, you have two remotes now, and can cherry-pick from the other remote called `butler` like this.
```
$ git checkout butler/master
$ git log
``` 
You're now on the butler repo basically, and should see all your commits from your full-blown dog butler service. Locate the changes you want to backport onto your original `dog-catering-service` repo and get the hash. Now we're going to do the cherry-picking magic!

```
$ git checkout master
$ git cherry-pick<commit hash you just copied over>
```
Yea! That's it. You should be rolling now.

## Fucked up your tags?
Remove all local tags and fetch remote tags:

```
$ git tag -l | xargs git tag -d
$ git fetch --tags
```
Need to delete a remote tag too?
```
$ git push --delete origin tagName
$ git tag -d tagName
```
## Fucked up your remote tags?
Careful. This sucks.

1. Remove all remote tags(!!! WARNING !!!)
```
$ git tag -l | xargs -n 1 git push --delete origin
```
2. Make remote tags match your local
```
$ git push <remote> --tags
```

 
## Match Local Branches to Remote Branches

Have a messy repo? First step towards cleaning up is to match all your local branches to the remote repo.

First, fetch and prune

```
$ git fetch -p
```

Next, this thing:
```
$ git branch -vv | grep ' gone]' | awk '{print $1}' | xargs git branch -d
```

Will delete any local branches you have that are not on origin.

## RESET A BRANCH TO ORIGIN
Always forget this one smh.
```
$ git reset --hard origin/mybranch
```


## DELETE A BRANCH
Somehow I always forget this one. 
Delete remote branch (careful buddy):
```
$ git push <remote_name> --delete <branch_name>
```

Delete a local branch:
```
$ git branch -d branch_name
$ git branch -D branch_name
```
The `-D` one is _with force_
          

## Save headaches down the road

If you're working on mac and deploying on linux, sometimes your git history doesn't actually match your file system. Run this:
```
$ git config core.ignorecase false   
```

## Remove a file from history
Sensitive file in your history? 
```
$ git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch path_to_file" HEAD
```

Warning: will delete the file from your local FS.

## Look at your commits during a given time range
The perfect alibi in a court of law.

```
$ git log --after="2020-02-02 00:00" --before="2020-02-08 23:59"
```

## Prioritize a branch during a merge

**Problem**: You have git conflicts that seem totally unecessary, like it's not even a conflict. Yet git sees like 70 conflicts when merging. You just want to say, "Hi git, please merge this branch and prioritize my commits when resolving the conflicts. Thx git."

You can do this using [merge strategies](https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging)

**Example 1**: mmerge branch `sick-hotfix` into `master`, and choose the changes from `sick-hotfix` if any conflicts are encountered...
```
$ git checkout master
$ git merge -Xtheirs sick-hotfix
```

**Example 2**: rebase changes from `dev` onto `cool-feature`, and choose the changes from `cool-feature` if any conflicts are encountered...
```
$ git checkout cool-feature
$ git rebase -Xtheirs dev
```

**NOTE**: `Xtheirs` and `Xours` are "opposite" when merging vs. rebasing.