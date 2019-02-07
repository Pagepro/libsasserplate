<!doctype html>
<html lang="en" class="no-js">
    <head>
        <meta charset="utf-8">
        <title>{% block title %} {{ title }} {% endblock %}</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
        {% include "head-links.tpl" %}
    </head>
    <body>
        {% import "layout/header.tpl" as l_header %}
        {{ l_header.render() }}

        <main class="l-main">
            <div class="l-inner">
                <div class="l-main__head">
                    <div class="l-main__head__title">
                        <h2>Page Content</h2>
                    </div>
                </div>
                <div class="l-main__content">
                    {% include "components/main-nav.tpl" %}
                </div>
            </div>
            <div class="l-inner">
                <form action="" class="ui-form c-form">
                    <fieldset>
                        <div class="c-form__section">
                            <select name="select" id="select1">
                                <option value="Foo">FooBar</option>
                            </select>
                            <input type="text" name="name" id="name1" />
                        </div>
                        <div class="c-form__section">
                            <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
                        </div>
                    </fieldset>
                </form>
            </div>
        </main>
        <footer class="l-footer">
            <div class="l-inner">
                <p>
                    &copy; {{ year }} <a class="ui-link" href="{{ webisteUrl }}">{{ author }}</a>
                </p>
            </div>
        </footer>
        <script src="./static/js/app.js"></script>
    </body>
</html>
