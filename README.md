### Eslint config for Backendless developers

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
