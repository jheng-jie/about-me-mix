#!/usr/bin bash

# import menu
source $(dirname "$0")/unit.sh

# menu list
menu=(nuxt3 svelte-kit4)

# select
echo "Select one env using up/down keys and enter to confirm:"
select_option "${menu[@]}"
choice=$?

# run dev
yarn ${menu[$choice]}
