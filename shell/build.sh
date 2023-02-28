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

# create docs folder
if [ ! -d "./docs" ]; then
  mkdir docs
fi

# next react
if [ "$target" = "all" ] || [ "$target" = "react" ]; then
  echo '--- react ---\n'
  rm -rf ./docs/react
  yarn workspace @about-me-mix/react generate
  mv ./packages/react/output ./docs/react
fi


# nuxt vue
if [ "$target" = "all" ] || [ "$target" = "vue" ]; then
  echo '--- vue ---\n'
  rm -rf ./docs/vue
  yarn workspace @about-me-mix/vue generate
  mv ./packages/vue/.output/public ./docs/vue

  # remove dist
  rm -f ./packages/vue/dist
  rm -f ./packages/vue/.output
fi

# vite svelte
if [ "$target" = "all" ] || [ "$target" = "svelte" ]; then
  echo '--- svelte ---\n'
  rm -rf ./docs/svelte
  yarn workspace @about-me-mix/svelte build
  mv ./packages/svelte/output ./docs/svelte
fi

