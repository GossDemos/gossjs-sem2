# diff2html

[diff2html-cli](https://github.com/rtfpessoa/diff2html-cli)

```bash
git diff --no-index 1.js 2.js | diff2html -d word -s line -i stdin
```

Or write to a file:
```bash
git diff --no-index 1.js 2.js | diff2html -d word -s line -i stdin -o stdout > diff.html
```

### [Demo output](http://nikitinskaya.me/gossjs-sem2/1602/part1/diff.html)

- compare commits: `git diff hash1 hash2 | diff2html...`
- compare branches: `git diff branch1 branch2 | diff2html...`

Essentially, just use whatever git diff you need, then pipe it to diff2html.
