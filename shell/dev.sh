#!/usr/bin bash

# import menu
source $(dirname "$0")/unit.sh

# menu list
menu=(vue react svelte)

# select
echo "Select one env using up/down keys and enter to confirm:"
select_option "${menu[@]}"
choice=$?

# run dev
yarn ${menu[$choice]}
