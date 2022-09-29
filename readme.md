# Day Planner

This is the daily version of https://github.com/TomasHubelbauer/week-planner.

## To-Do

- [ ] Add `-` buttons to the activity types

  At the moment, activity types are loaded and a new one with a name but no
  color can be created, but the overlap with Week Planner is not 100%.

- [ ] Change to a schema reusable by both Day Planner and Week Planner

  Store the slot information in the local storage by the actual corresponding
  date of the slot.
  That way the entries will be reusable across these two planner apps.
  Types are already reusable but the UI isn't brought up to par on here.

- [ ] Consider reusing some of the logic / UI bits

  It might be worth extracting the activity components and the local storage
  handling to their own ESM modules, but I don't know if those should live in
  their own repository and I don't like the idea of one of these planners
  pulling those in from the other.
  An alternative would be to merge these two applications into one, which I
  might end up doing.

- [ ] Remove the number from `icon.png` and draw it programmatically

  Make it the current day number not the hardcoded `10`.

- [ ] Add a chart showing the ratios between the various activities in the day

  This will help see how the day breakdown comprises of each activities' slots.

- [ ] Consider adding a UI for defining daily/weekly minima for each activity

  This will help ensure that no activity for which I have a temporal budget in
  mind in underserved in the plan.
