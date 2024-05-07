# withastro language-tools issue 584 repro repo

A repro repo for [withastro/language-tools #584](https://github.com/withastro/language-tools/issues/584).

*The issue has been closed. Like in this case, the unexpected behavior is or was due to a missconfiguration, not an actual bug.*

## How to fix

Make sure your astro files are included in your `tsconfig.json`:

```json
{
  "include": ["src/**/*.ts", "src/**/*.astro"],
}
```

## Steps to reproduce the original bug

1. Install the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
2. Clone this repo.
3. Install dependencies: `npm i`.
4. Observe the error in VS Code.
5. Run `npx astro check` to see it produces no errors or warnings.
6. Run to see it builds without errors:

```sh
npx astro build && npx astro preview
```

## Screenshot

![screenshot of the bug](screenshot-of-bug.png)
