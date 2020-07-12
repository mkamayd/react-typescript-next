# Observations

I want to point out that in the real world there will not be an api for retrieving the full data set. If we only care about Mean, Median, Standard Deviation and Mode the api should provide front-end with that info only. By doing so we reduce from O(Linear) to constant the amount of data to send over the wire. Also worth mentioning that many of these algorithms have a "running" version that by keeping some pre-computes values on the back-end allows for more efficient re-calculations after adding a value to the series.
I'm assuming it is done this way to see how I handle state sharing between components (I am using redux).

Also wanted to mention that instead of implementing all stats by myself I used `stats-lite` from npm. This is to avoid reinventing the wheel.

Project is based on [Learn Next.js](https://nextjs.org/learn). Easy way to set up your project with typescript support out of the box and server side rendering, among many others cool features.

I'm using react hooks, as it's way more easy to understand and maintain. When you create components using a class it becomes more verbose and harder to reason about. All component are intended to be reusable and composable.


## To get the project up and running

```
npm i
npm run dev
```

## Improvements
- We should redesign the apis to make them more efficient as mentioned above.
- We should add unit test to the project.
- Fix warning about componentWillReceiveProps has been renamed introduced by rechart lib.
- We should improve the look and feel.
- We should work on better ARIA support.
- We should allow for multi language support.
- We could improve validations around adding more data.
- We should handle api errors

### Thanks
Thanks for your consideration, if you got any feedback please reach me at `kamayd@gmail.com`


