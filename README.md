# HTML-FORM-CONFIRM

This works with `html-form` and allows for confirmation before completing the
submission of a form.

## Installation

```
npm i html-form-confirm
```

```
import 'html-form-confirm.js'
```

OR

Copy the file `public/html-form-confirm.js` into your code base.

```
<script src="html-form-confirm.js"></script>
```

## Usage

```js
<form action="/do-not-do-it" hf hf-confirm="Are you sure you would like to do this?">
    <button>Start dangerous action</button>
</form>
```