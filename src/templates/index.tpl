<!doctype html>
<html lang="en" class="no-js">
    <head>
        <meta charset="utf-8">
        <title>{% block title %}{{ title }}{% endblock %}</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
        <link rel="stylesheet" href="./static/css/main.css">
    </head>
    <body>
        <header class="l-header g-gutter-top-2 g-gutter-bottom-2">
            <div class="l-inner">
                <div class="l-header__title">
                    <h1>{{ title }}</h1>
                </div>
            </div>
        </header>
        <main class="l-main">
            <div class="l-inner">
                <div class="l-main__head">
                    <div class="l-main__head__title">
                        <h2>Page Content</h2>
                    </div>
                </div>
                <div class="l-main__content g-spacing-top-2">
                    <pre class="html"><code>{% filter escape %}{% include "partials/main-nav.tpl" %}{% endfilter %}</code></pre>
                    {% include "partials/main-nav.tpl" %}
                </div>
            </div>
        </main>
        <footer class="l-footer g-gutter-top-2 g-gutter-bottom-2">
            <div class="l-inner">
                <p>
                    &copy; 2016 {{ author }}
                </p>
            </div>
        </footer>
        <script src="./static/js/app.js"></script>
    </body>
</html>
