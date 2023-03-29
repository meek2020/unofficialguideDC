//Creates cookies
document.addEventListener("DOMContentLoaded", function () {
    const userCookieName = "returningVisitor";
    checkUserCookie(userCookieName);
});

//Checks if user has cookies
function checkUserCookie(userCookieName) {
    const cookieExists = document.cookie.match(userCookieName);
    if (cookieExists != null) {
      document.body.insertAdjacentHTML(
        "beforeend",
        '<div id="welcome">Welcome back friend! Check out our latest thing <a href="#">HERE</a></div>'
      );
    } else {
      createUserCookie(userCookieName);
    }
}

function createUserCookie(userCookieName) {
    const userCookieValue = "Yes";
    const userCookieDays = 7;
    let expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + userCookieDays);
    document.cookie = userCookieName +
      "=" + userCookieValue + "; expires=" + expiryDate.toGMTString() + "path=/";
}