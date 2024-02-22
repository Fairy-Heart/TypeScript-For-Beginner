var userInfo;
(function (userInfo) {
    userInfo["name"] = "mavis";
    userInfo["id"] = "#12234";
})(userInfo || (userInfo = {}));
var infomation = userInfo.name;
var infomation2 = userInfo.id;
console.log("".concat(infomation, ", ").concat(infomation2));
