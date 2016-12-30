<!doctype html>
<html lang="en" class="no-js">
    <head>
        <meta charset="utf-8">
        <title>{% block title %}{{ title }}{% endblock %}</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
        {% include "head/head-links.tpl" %}
    </head>
    <body>
        {% import "partials/layouts/header.tpl" as l_header %}

        {{ l_header.render() }}
        <main class="l-main">
            <div class="l-inner">
                <div class="l-main__head">
                    <div class="l-main__head__title">
                        <h2>Page Content</h2>
                    </div>
                </div>
                <div class="l-main__content" spacing="top5 tablet(top3) phone(top1)" offset="tablet(top3) left2 desktop-small(left1)">
                    <pre class="html"><code>{% filter escape %}{% include "partials/main-nav.tpl" %}{% endfilter %}</code></pre>
                    {% include "partials/main-nav.tpl" %}
                </div>
            </div>
        </main>
        <footer class="l-footer" spacing="top2 tablet(top1) left5 tablet(left3)">
            <div class="l-inner">
                <p>
                    &copy; 2016 {{ author }}
                </p>
            </div>
        </footer>
        <script src="./static/js/app.js"></script>
    </body>
</html>
