function showErrorAlert(e){var r=$("#alert-error-div"),a=$("#alert-error-div > .alert.alert-danger");a.text(e),r.slideDown().addClass("is-visible")}function showPageLoader(){$pageLoaderModal.modal({backdrop:"static",keyboard:!1,show:!0}),$(".progress-bar").css("width","100%")}function authenticateUser(){request&&request.abort();var e={};e.role=sessionStorage.getItem("role"),e.username=sessionStorage.getItem("username"),e.uid=sessionStorage.getItem("uid"),"admin"==e.role,e.uid.indexOf("AD")>=0&&(request=$.ajax({url:"../php/adminValidator.php",type:"post",data:e}),request.done(accessValidSuccess),request.fail(accessValidError))}function checkAdminDetails(e){var r=0;return sessionStorage.getItem("username")!=e.user.username?r++:sessionStorage.getItem("role")!=e.user.role?r++:sessionStorage.getItem("uid")!=e.user.uid&&r++,0==r}function accessValidSuccess(e,r,a){return"object"!=typeof e?void console.log(e):e.error?void showErrorAlert(e.message):void(checkAdminDetails(e)&&setupCrmPage(e,function(){$pageLoaderModal.modal("hide")}))}function accessValidError(e,r,a){showErrorAlert("Please Check Your Internet Connection")}function setupCrmPage(e,r){var a=$("a#username"),o=$("a#uid"),s=$("a#role");a.text(e.user.username),o.text(e.user.uid),s.text(e.user.role),r()}function checkForUsage(){var e=$("#infoModal"),r=($("#formModal"),$("#search-btn")),a=$("#update-btn");r.click(function(){e.modal("show")}),a.click(function(){e.modal("show")})}var request,$pageLoaderModal=$("#pageLoaderModal");$(function(){showPageLoader(),checkForUsage(),authenticateUser()});