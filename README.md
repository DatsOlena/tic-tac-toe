# Tic-Tac-Toe Project

Simple React + Vite Tic-Tac-Toe game.

## Change Git Remote Origin

Use these commands from this project folder:

```bash
cd /Users/olenadats/Projects/tic-tac-toe-project
git remote -v
git remote set-url origin https://github.com/DatsOlena/tic-tac-toe.git
git remote -v
```

If `origin` does not exist yet:

```bash
git remote add origin https://github.com/DatsOlena/tic-tac-toe.git
```

Push current branch and set upstream:

```bash
git push -u origin $(git branch --show-current)
```
