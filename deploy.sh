#!/usr/bin/env sh

set -e

npm run build

cd dist 

git init
git add -A
git commit -m "Editing Error 404 Route Path"
git push -f https://github.com/Salem-Tarek/ElBlogs.git master:gh-pages

cd -