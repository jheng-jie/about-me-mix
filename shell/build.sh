#!/usr/bin bash

# import menu
source $(dirname "$0")/unit.sh

echo '------ build start ------\n'

# menu list
menu=(all vue react svelte)

# select
echo "Select one env using up/down keys and enter to confirm:"
select_option "${menu[@]}"
choice=$?
target=${menu[$choice]}
dist=./release

# create dist folder
if [ ! -d "./$dist" ]; then
  mkdir $dist
fi

# copy static assets
rm -rf $dist/assets
cp -a ./packages/common/assets $dist/assets

# next react
if [ "$target" = "all" ] || [ "$target" = "react" ]; then
  echo '--- react ---\n'
  rm -rf ./$dist/react
  yarn workspace @about-me-mix/react generate
  mv ./packages/react/output ./$dist/react
fi


# nuxt vue
if [ "$target" = "all" ] || [ "$target" = "vue" ]; then
  echo '--- vue ---\n'
  rm -rf ./$dist/vue
  yarn workspace @about-me-mix/vue generate
  mv ./packages/vue/.output/public ./$dist/vue

  # remove dist
  rm -f ./packages/vue/dist
  rm -f ./packages/vue/.output
fi

# vite svelte
if [ "$target" = "all" ] || [ "$target" = "svelte" ]; then
  echo '--- svelte ---\n'
  rm -rf ./$dist/svelte
  yarn workspace @about-me-mix/svelte build
  mv ./packages/svelte/output ./$dist/svelte
fi

