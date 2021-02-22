# Pre-test react app

## Eslint

**Packages:**

```
"@typescript-eslint/eslint-plugin": "^4.15.1",
"@typescript-eslint/parser": "^4.15.1",
```

Add _.eslintrc.js_

## Prettier

**Packages:**

```
"eslint-config-prettier": "^7.2.0",
"eslint-plugin-prettier": "^3.3.1",
"prettier": "^2.2.1",
```

Add _.prettierrc.js_

## Husky

**Packages:**

```
"husky": "^5.0.9",
"pretty-quick": "^3.1.0",
"@commitlint/cli": "^11.0.0",
"@commitlint/config-conventional": "^11.0.0",
```

Add script _"postinstall": "husky install"_

Call commands _npx husky add .husky/commit-msg "npx commitlint -E HUSKY_GIT_PARAMS"_

Call commands _npx husky add .husky/pre-commit "npx pretty-quick --staged && npm run lint"_

## Next:

-   add redux
-   add redux-saga
-   add hook useInView
-   add tests
