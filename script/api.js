function callApi(url, method = 'GET', data = {}, header = {}) {
    return $.ajax({
        type: method,
        url: 'https://game.dev.newideas.com.tw/api' + url,
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
