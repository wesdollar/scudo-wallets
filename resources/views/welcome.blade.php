<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport"
        content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no"/>
  <meta name="description"
        content="Scudo Wallets - built slim, light, and made to hold everything important in your life. A design perfected to fit into your life.">
  <title>Scudo Wallets</title>
  <link rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet">
  <link href="{{ mix("css/app.css") }}" rel="stylesheet">
  <script src="https://kit.fontawesome.com/eb0374bc9f.js" crossorigin="anonymous"></script>
  <script defer src="{{ mix('js/ssr-client.js') }}"></script>
</head>
<body>
<div id="cover-container">
  <img src="{{ asset("img/logo-transparent.png") }}" alt="SCUDO Wallets Logo" id="cover-logo">
  <div id="intro-text-container">
    <span class="xl-text">
      {{ config("app.name") }}
    </span>
    <span class="lg-text">
      Your best wallet yet.
    </span>
    <span id="coming-message">
      // Coming Black Friday 2019
    </span>
  </div>
  <img id="cover-focus" src="{{ asset("img/landing/skull-cutout-large.png") }}" alt="SCUDO Wallets">
</div>
<div class="callout-section" id="email-signup">
  <h2>Get yours first.</h2>
  <h3>Add your email to be the first to know.</h3>
  <form method="POST" action="/join" id="sub">
    @csrf
    <i class="far fa-envelope"></i>
    <input type="text" name="email" placeholder="email address">
    <div class="btn btn-lg btn-primary gutter-left"
         role="button"
         tabindex="0"
         onclick="document.getElementById('sub').submit()">
      JOIN
    </div>
  </form>
</div>
<div class="split-image-section">
  <div class="split-image" id="split-one">
    &nbsp;
  </div>
  <div class="split-content">
    <h1>The Perfect Wallet</h1>
    <p>
      Lightweight, holds everything you need, durable, and truly unique. You won't find a better wallet.
    </p>
    <div class="bordered-callout">
      Coming Black Friday 2019
    </div>
  </div>
</div>
<div class="split-image-section reverse background-primary">
  <div class="split-image" id="split-four">
    &nbsp;
  </div>
  <div class="split-content">
    <h1>Unique in Every Way</h1>
    <p>
      This wallet is designed for those that want something more. Don't settle for the status quo. Get the
      wallet that's made for you.
    </p>
    <div class="bordered-callout">
      Coming Black Friday 2019
    </div>
  </div>
</div>
<div class="split-image-section">
  <div class="split-image" id="split-three">
    &nbsp;
  </div>
  <div class="split-content">
    <h1>Hold Your Life</h1>
    <p>
      Designed to hold exactly what your life needs. Fits in your pocket, handles nicely in your hand. Packs
      cards, cash, and those personal touches in an easy-to-open, convenient to find, yet completely secure
      package.
    </p>
    <div class="bordered-callout">
      Coming Black Friday 2019
    </div>
  </div>
</div>
<div class="split-image-section reverse background-primary">
  <div class="split-image" id="split-two">
    &nbsp;
  </div>
  <div class="split-content">
    <h1>Details Matter</h1>
    <p>
      From the laser etching to the overall design, we've ensured every detail is perfect. This is the wallet
      you've been waiting for. This is your wallet. Designed by SCUDO, made for you.
    </p>
    <div class="bordered-callout">
      Coming Black Friday 2019
    </div>
  </div>
</div>

{!! ssr('js/ssr-server.js')->fallback('<div id="app"></div>')->render() !!}

@if(config('app.env') == 'local')
  <script src="http://localhost:35729/livereload.js"></script>
@endif
</body>
</html>
