function showPageLoader(){var o=$("#pageLoaderModal");o.modal({backdrop:"static",keyboard:!1,show:!0}),$(".progress-bar").css("width","100%"),setTimeout(function(){o.modal("hide")},4e3)}$(function(){showPageLoader()});