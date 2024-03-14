### Eslint config for Backendless developers

Repo: [link](https://github.com/Backendless/eslint-config.git)

```npm i eslint-config-backendless```

#### Usage:


`.eslintrc`

```
{
  "extends": "eslint-config-backendless"
}
```

Might be needed to install package `peerDependencies`

#### Extending:

```
{
  "extends": "eslint-config-backendless",
  
  "rules": {
    "no-console": 1
  }
}
```
