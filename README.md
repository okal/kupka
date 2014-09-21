# Kupka: Purely client side, globally recognizable avatars

Kupka let's you generate uniquely identifiable images from arbitrary text,
useful for generating placeholder images without requiring multiple requests
to your server. It grew out of my work on an earlier project, 
[Getting Warmer](https://okal.github.io/getting-warmer), which I realized would
find wider use if repurposed.

## Documentation

Include kupka.min.js on your page

``` html
<script src='kupka.min.js'></script>
<script>
	document.onload = function() {
		Kupka.init();
	}
</script>
```

Kupka uses data attributes on a wrapper element, specifying the width, height,
and input string.

1. `data-kupka-string-identifier` is required, and can be any arbitrary text, such
as an email address.
2. `data-kupka-height` defaults to 128.
3. `data-kupka-width` defaults to 128.

Units are pixels.

```html
<div
	data-kupka-string-identifier=''
	data-kupka-height=''
	data-kupka-width=''/>
```

