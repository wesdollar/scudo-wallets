<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport"
        content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no"/>
  <meta name="description"
        content="{{ config("app.name") }} - built slim, light, and made to hold everything important in your life. A design perfected to fit into your life.">
  <title>{{ config("app.name") }}</title>
  <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet">
  <link href="{{ mix("css/app.css") }}" rel="stylesheet">
  <script src="https://kit.fontawesome.com/eb0374bc9f.js" crossorigin="anonymous"></script>
  <script defer src="{{ mix('js/ssr-client.js') }}"></script>
</head>
<body>

{!! ssr('js/ssr-server.js')->fallback('<div id="app"></div>')->render() !!}

@if(config('app.env') == 'local')
  <script src="http://localhost:35729/livereload.js"></script>
@endif
</body>
</html>
