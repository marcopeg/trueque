On a default background:

```js
<h1><Text tqRole="title1">I am a title 1</Text></h1>
<h2><Text tqRole="title2">I am a title 2</Text></h2>
<p><Text /></p>
```

On a dark background (contrast):

```js
const { BasicColorPrimary } = require('_variables')
;
<div style={{ backgroundColor: BasicColorPrimary }}>
    <h1><Text tqRole="title1">I am a title 1</Text></h1>
    <h2><Text tqRole="title2">I am a title 2</Text></h2>
    <p><Text /></p>
</div>
```