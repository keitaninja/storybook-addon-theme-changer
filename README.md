<!-- README START -->

<div align="center">
  <h1>Storybook Addon Theme Changer</h1>
</div>

<div align="center">

<a href="https://github.com/kwatanwa17/storybook-addon-theme-changer">
<img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/kwatanwa17/storybook-addon-theme-changer/Release?label=Release&logo=github">
</a>
<a href="https://www.npmjs.com/package/storybook-addon-theme-changer">
<img alt="npm" src="https://img.shields.io/npm/v/storybook-addon-theme-changer?logo=npm">
</a>
<a href="https://www.npmjs.com/package/storybook-addon-theme-changer">
<img alt="NPM" src="https://img.shields.io/npm/l/storybook-addon-theme-changer">
</a>
<a href="https://github.com/intuit/auto">
<img alt="Auto Release" src="https://img.shields.io/badge/release-auto.svg?colorA=888888&colorB=9B065A&label=auto&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACzElEQVR4AYXBW2iVBQAA4O+/nLlLO9NM7JSXasko2ASZMaKyhRKEDH2ohxHVWy6EiIiiLOgiZG9CtdgG0VNQoJEXRogVgZYylI1skiKVITPTTtnv3M7+v8UvnG3M+r7APLIRxStn69qzqeBBrMYyBDiL4SD0VeFmRwtrkrI5IjP0F7rjzrSjvbTqwubiLZffySrhRrSghBJa8EBYY0NyLJt8bDBOtzbEY72TldQ1kRm6otana8JK3/kzN/3V/NBPU6HsNnNlZAz/ukOalb0RBJKeQnykd7LiX5Fp/YXuQlfUuhXbg8Di5GL9jbXFq/tLa86PpxPhAPrwCYaiorS8L/uuPJh1hZFbcR8mewrx0d7JShr3F7pNW4vX0GRakKWVk7taDq7uPvFWw8YkMcPVb+vfvfRZ1i7zqFwjtmFouL72y6C/0L0Ie3GvaQXRyYVB3YZNE32/+A/D9bVLcRB3yw3hkRCdaDUtFl6Ykr20aaLvKoqIXUdbMj6GFzAmdxfWx9iIRrkDr1f27cFONGMUo/gRI/jNbIMYxJOoR1cY0OGaVPb5z9mlKbyJP/EsdmIXvsFmM7Ql42nEblX3xI1BbYbTkXCqRnxUbgzPo4T7sQBNeBG7zbAiDI8nWfZDhQWYCG4PFr+HMBQ6l5VPJybeRyJXwsdYJ/cRnlJV0yB4ZlUYtFQIkMZnst8fRrPcKezHCblz2IInMIkPzbbyb9mW42nWInc2xmE0y61AJ06oGsXL5rcOK1UdCbEXiVwNXsEy/6+EbaiVG8eeEAfxvaoSBnCH61uOD7BS1Ul8ESHBKWxCrdyd6EYNKihgEVrwOAbQruoytuBYIFfAc3gVN6iawhjKyNCEpYhVJXgbOzARyaU4hCtYizq5EI1YgiUoIlT1B7ZjByqmRWYbwtdYjoWoN7+LOIQefIqKawLzK6ID69GGpQgwhhEcwGGUzfEPAiPqsCXadFsAAAAASUVORK5CYII=">
</a>

</div>

<div align="center">
  <p>A simple addon for changing theme on Storybook. Inspired by <a href="https://github.com/saadeghi/theme-change">theme-change</a></p>
</div>

![Animation](./docs/animation.gif)

This addon just controls themes (for example, **light** and **dark**), just adding **data-theme** attribute to the html tag.

It works nicely with UI libraries such as [daisyUI](https://github.com/saadeghi/daisyui).

Support Storybook 8

## Getting Started

Add this addon to the `.storybook/main.js (main.ts)` file.

```{javascript}
module.exports = {
  ...
 addons: [
     // your addons here
     "storybook-addon-theme-changer"
  ],
};
```

Add your themes to the `.storybook/preview.js (preview.ts)` file

```{javascript}
...
export const globalTypes = {
 themes: {
   defaultValue: [
     "light",
     "dark",
     ...
   ],
 },
```

or

```{javascript}
...
export const globals = {
    themes: [
     "light",
     "dark",
     ...
    ],
```
