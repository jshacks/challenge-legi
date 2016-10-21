# Releasing

This document describes the process for releasing a new version of the project.

## Compile release notes

The current process is to maintain a local file, keeping track of notable changes as pull requests are merged. For examples of how to format the notes, see previous releases on [the releases page].

## Create a temporary branch

Create a new branch from `master` named `release`.

```sh
git checkout master
git pull
git checkout -b release
```

This branch is created as a precaution to prevent any merged PRs from sneaking into a release between the time the temporary release branch is created and the CI builds are complete.

## Bump the version

Run the `bump-version` script, passing `major`, `minor`, or `patch` as an argument:

```sh
npm run bump-version -- patch
git push origin HEAD
```

This will bump the version number in several files.

Most releases will be `patch` level.

## Edit the release draft

1. Visit [the releases page] and you'll see a new draft release with placeholder release notes.
1. Edit the release and add release notes.
1. Click 'Save draft'. **Do not click 'Publish release'!**
1. Wait for all the builds to pass. :hourglass_flowing_sand:

## Merge temporary branch

Merge the temporary back into master, without creating a merge commit:

```sh
git merge release master --no-commit
git push origin master
```

If this fails, rebase with master and rebuild:

```sh
git pull
git checkout release
git rebase master
git push origin HEAD
```

## Run local debug build

Run local debug build to verify that you are actually building the version you want. Sometimes you thought you were doing a release for a new version, but you're actually not.

```sh
npm run build
npm start
```

Verify the console is displaying the current updated version.

## Publish the release

```sh
npm run release
```

## Delete the temporary branch

```sh
git checkout master
git branch -D release # delete local branch
git push origin :release # delete remote branch
```

[the releases page]: https://github.com/jshacks/boilerplate/releases
