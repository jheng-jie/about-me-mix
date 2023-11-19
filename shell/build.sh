#!/usr/bin bash

# import menu
source $(dirname "$0")/unit.sh

echo '------ build start ------\n'

# menu list
menu=(all nuxt3 svelte-kit4)

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
#if [ "$target" = "all" ] || [ "$target" = "react" ]; then
#  echo '--- react ---\n'
#  rm -rf ./$dist/react
#  yarn workspace @about-me-mix/react generate
#  mv ./packages/react/out ./$dist/react
#fi

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
if [ "$target" = "all" ] || [ "$target" = "svelte-kit4" ]; then
  echo '--- svelte ---\n'
  rm -rf ./$dist/svelte
  yarn workspace @about-me-mix/svelte-kit4 build
  mv ./projects/svelte-kit4/output ./$dist/svelte
fi
