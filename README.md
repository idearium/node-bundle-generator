# node-bundle-generator

Node Bundle Generator is a super simple way to generate webpack bundles.

## Usage

To use this repo, update the following:

- `index.js` with your own bundle code.
- `webpack.config.js` with your preferred bundle key.

Run `yarn build` and a file will be generated for you in the `dist` directory.

You can now copy this file into your own project.

## Example

```javascript
// @index.js
export { format as formatDate } from 'date-fns';

// @dist/bundle.[hash].js
...

// Client side
formatDate(new Date(), 'hh:mm');
```
