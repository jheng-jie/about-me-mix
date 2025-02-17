#!/usr/bin bash

# import menu
source $(dirname "$0")/unit.sh

echo '------ build start ------\n'

# menu list
menu=(all nuxt3 svelte-kit2 next14 angular17)

# select
echo "Select one env using up/down keys and enter to confirm:"
select_option "${menu[@]}"
choice=$?
target=${menu[$choice]}
dist=./about-me-mix

# create dist folder
if [ ! -d "./$dist" ]; then
  mkdir $dist
fi

# copy static assets
rm -rf $dist/assets
cp -a ./projects/communal/static/ $dist/

# next react
if [ "$target" = "all" ] || [ "$target" = "next14" ]; then
  echo '--- next 14 ---\n'
  rm -rf ./$dist/react
  yarn workspace @about-me-mix/next14 generate
  mv ./projects/next14/out ./$dist/react
fi

# nuxt vue
if [ "$target" = "all" ] || [ "$target" = "nuxt3" ]; then
  echo '--- nuxt 3 ---\n'
  rm -rf ./$dist/vue
  yarn workspace @about-me-mix/nuxt3 generate
  mv ./projects/nuxt3/.output/public ./$dist/vue

  # remove dist
  rm -rf ./projects/nuxt3/dist
  rm -rf ./projects/nuxt3/.output
fi

# vite svelte
if [ "$target" = "all" ] || [ "$target" = "svelte-kit2" ]; then
  echo '--- svelte kit 2 ---\n'
  rm -rf ./$dist/svelte
  yarn workspace @about-me-mix/svelte-kit2 build
  mv ./projects/svelte-kit2/output ./$dist/svelte
  mkdir -p ./$dist/svelte/home/
  echo '<script>location.href="/about-me-mix/svelte/zh/home/";</script><meta http-equiv="refresh" content="0;url=/about-me-mix/svelte/zh/home/">' > ./$dist/svelte/home/index.html
fi

# angular
if [ "$target" = "all" ] || [ "$target" = "angular17" ]; then
  echo '--- angular 17 ---\n'
  rm -rf ./$dist/angular
  yarn workspace @about-me-mix/angular17 build
  mv ./projects/angular17/dist/angular17/browser ./$dist/angular
  mkdir -p ./$dist/angular/home/
  echo '<script>location.href="/about-me-mix/angular/zh/home/";</script><meta http-equiv="refresh" content="0;url=/about-me-mix/angular/zh/home/">' > ./$dist/angular/index.html
  echo '<script>location.href="/about-me-mix/angular/zh/home/";</script><meta http-equiv="refresh" content="0;url=/about-me-mix/angular/zh/home/">' > ./$dist/angular/home/index.html
fi
