{% macro render(_active_no='') %}
    {% if _active_no == '' %}         
        {% set logo_href='#' %}
    {% else %}
        {% set logo_href='index.html' %}
    {% endif %}
		<header class="l-header">
            <div class="l-inner">
                <div class="l-header__title">
                    <h1>Exemplary heading</h1>
                </div>
                <nav class="l-header__nav" aria-label="main navigation">
                    <ul class="c-static-links-list row">
                        <li class="c-static-links-list__item gr-12 gr-24@tablet {% if _active_no == '1.1' %}is-active{% endif %}">
                            <a href="#">
                                <span class="c-label">Link 1</span>
                            </a>
                        </li>
                        <li class="c-static-links-list__item gr-12 gr-24@tablet {% if _active_no == '1.2' %}is-active{% endif %}">
                            <a href="#">
                                <span class="c-label">Link 2</span>
                            </a>
                        </li>
                        <li class="c-static-links-list__item gr-12 gr-24@tablet {% if _active_no == '1.3' %}is-active{% endif %}">
                            <a href="#">
                                <span class="c-label">Link 3</span>
                            </a>
                        </li>
                        <li class="c-static-links-list__item gr-12 gr-24@tablet {% if _active_no == '1.4' %}is-active{% endif %}">
                            <a href="#">
                                <span class="c-label">Link 4</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
{% endmacro %}