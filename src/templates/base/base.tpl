<html lang="en" class="no-js">
    <head>
        <meta charset="utf-8">
        <title>{% block title %} {{ title }} {% endblock %}</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
        {% include "base/head-links.tpl" %}
    </head>
    <body class="{% block bodyClass %}{% endblock %}">
        {% block header %}
            {% import "layout/header.tpl" as l_header with context %}
            {{ l_header.render() }}
        {% endblock %}
        <main class="l-main">
            {% block content %}
                <div class="l-inner">
                    <h1>This is default content</h1>
                </div>
            {% endblock %}
        </main>
        {% block footer %}
            {% import "layout/footer.tpl" as l_footer with context %}
            {{ l_footer.render() }}
        {% endblock %}
        <script src="./static/js/app.js"></script>
    </body>
</html>
