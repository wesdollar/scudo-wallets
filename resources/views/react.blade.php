<?php
  $ssrArray = ssr('js/ssr-server.js')->fallback('<div id="app"></div>')->render();
  $headData = $ssrArray["headData"];

  $title = $headData["title"];
  $description = $headData["description"];

  $defaultTitle = config('app.name');
  $defaultDescription = config('app.name') ." - built slim, light, and made to hold everything important. A unique design perfected to fit into your life."
?>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport"
        content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no"/>
  <meta name="description"
        content="{{ $description ?? $defaultDescription }}">
  <title>{{ $title ?? $defaultTitle }}</title>
  <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet">
  <link href="{{ mix("css/app.css") }}" rel="stylesheet">
  <script defer src="{{ mix('js/ssr-client.js') }}"></script>

  <meta property="og:title" content="Scudo Wallets" />
  <meta property="og:description" content="Built slim, light, and made to hold everything important. A unique design perfected to fit into your life." />
  <meta property="og:image" content="{{ config("app.url") }}/img/fb-og-scudo.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
</head>
<body>

{!! $ssrArray['html'] !!}

@if(config('app.env') == 'local')
  <script src="http://localhost:35729/livereload.js"></script>
@endif
</body>
</html>
