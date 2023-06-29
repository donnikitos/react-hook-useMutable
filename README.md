# react-useMutable

A utility to simplify the use of the [@mutableJS/core](https://www.npmjs.com/package/@mutablejs/core) reactivity.

[![npm](https://img.shields.io/npm/dt/mjs-router?style=for-the-badge)](https://www.npmjs.com/package/mjs-router) ![GitHub Repo stars](https://img.shields.io/github/stars/mjs-router?label=GitHub%20Stars&style=for-the-badge) [![GitHub](https://img.shields.io/github/license/mjs-router?color=blue&style=for-the-badge)](https://github.com/mjs-router/blob/master/LICENSE)
![GitHub last commit](https://img.shields.io/github/last-commit/mjs-router?style=for-the-badge) [![Issues](https://img.shields.io/github/issues/mjs-router?style=for-the-badge)](https://github.com/mjs-router/issues)

## Installation

Install with **npm**:

```bash
    npm install @mutablejs/core react-usemutable
```

Install with **yarn**:

```bash
    yarn add @mutablejs/core react-usemutable
```

Keep in mind the repository depends on the `@mutablejs/core` package.

## Usage/Examples

**initialize inside of components**

```typescript
import { mutable } from '@mutablejs/core';
import useMutable from 'react-usemutable';

const magicValue = mutable(0);

// Demoing value change
setInterval(() => {
	magicValue.value++;
}, 500);

function ShowSomeMagic() {
	const value = useMutable(magicValue);

	return `Current value: ${value}`;
}
```

**As a state container / store**

```typescript
import { mutable } from '@mutablejs/core';
import { createUseMutable } from 'react-usemutable';

const magicValue = mutable(0);

const useMagicValue = createUseMutable(magicValue);

// Demoing value change
setInterval(() => {
	magicValue.value++;
}, 500);

function ShowSomeMagic() {
	const value = useMagicValue();

	return `Current value: ${value}`;
}
```

## Authors

-   [@donnikitos](https://www.github.com/donnikitos)

## Feedback

Any feedback? Join our [Discord server](https://discord.gg/gNdgy8uS3R) and reach out to us.\
We are open to suggestions, ideas and collaboration.
