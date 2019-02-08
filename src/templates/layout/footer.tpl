{% macro render() %}
<footer class="l-footer">
    <div class="l-inner">
        <p>
            &copy; {{ year }} <a target="_blank" class="ui-link" href="{{ webisteUrl }}">{{ author }}</a>
        </p>
    </div>
</footer>
{% endmacro %}
