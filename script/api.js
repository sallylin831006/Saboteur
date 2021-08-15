function callApi(url, method = 'GET', data = {}, header = {}) {
    const apiUrl = getApiUrl();
    console.log(apiUrl + url);
    return $.ajax({
        type: method,
        url: apiUrl + url,
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(data),
        headers: header,
        async: false,
        success: function (res, textStatus, xhr) {
            return res.data;
        },
        error: function (res, textStatus, errorThrown) {
            return JSON.parse(res.responseText);
        }
    });
}

function getDomain() {
    return 'http://localhost:8000/';
    return 'https://game.dev.newideas.com.tw/';
}

function getApiUrl() {
    return getDomain() + 'api';
}

function getSocketUrl() {
    return 'http://localhost:8000/';
    return '/';
}
