/* rem布局设置函数 */
var apiPath = "https://app.jianguodai.com/";
var urlPath = location.origin + '/' + location.pathname.split('/')[1] + '/';
function remFn(num){
	var docWidth = document.documentElement.clientWidth>640 ? 640 : document.documentElement.clientWidth;
	window.document.documentElement.style.fontSize = docWidth/num+'px';
}
function spayErrorMsg(stimer,txt,time){
    if($(".spay-msg-box").length==0) $("body").append('<div class="spay-msg-box"></div>');
    time = time||1500;
	$(".spay-msg-box").html(txt).show();
	clearTimeout(stimer);
	stimer = setTimeout(function(){
		$(".spay-msg-box").slideUp();
	},time);
}

/*设置cookie*/
function setCookie(cname,cvalue,exdays){
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  var path_ = "path=/",domain_ = "domain=.jianguodai.com";
  document.cookie = cname + "=" + cvalue + "; " + domain_ + "; " + expires + "; " + path_;
}
/*读取Cookie*/
function getCookie(cname){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
/*删除cookie*/
//清除cookie
function clearCookie(name) {
    setCookie(name, "", -1);
}
/*function encrypNum(val){
	var newPhone = val.substr(0,3)+"****"+val.substr(7,11)
	return newPhone;
}*/
/**
* 查找url 参数值（name 变量名,url 地址（如果不指定，则是当前路径）） 
*/
function getURLQueryString(name,url){
	var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i");
	var r = "";
	if(url){
		var i = url.indexOf("?");
		var j = url.indexOf("&");
		if(i>-1){
			r = decodeURI(url.substring(i)).substr(1).match(reg);;
		}else if(j>0){
			r = decodeURI(url).substr(1).match(reg);
		}
	}else{
		r = decodeURI(document.location.search).substr(1).match(reg);
	}
	if(r){
	   return unescape(r[2]);
	}
	return null;
}
//加载中 loading   loader.init();//初始化放在顶部  loader.showL();显示  loader.hideL();隐藏  
var loader = {
    loaderHTML : '<div class="loader"><div class="ball-spin-fade-loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>',
    mebaHTML : '<div class="meba-transparent"></div>',
    init : function(){
        $("body").append(loader.loaderHTML+loader.mebaHTML);
    },
    showL : function(){
        $(".loader,.meba-transparent").show();
    },
    hideL : function(){
        $(".loader,.meba-transparent").hide();
    }
};

function escapeChannel(type){
    var sType = '';
    switch(type)
    {
        case 1:

            break;
        case 2:

            break;
        default:

    }
}
//短信错误信息转义
function getMsg(n){
    var msg_ = "";
    switch(n)
    {
        case 1:
            msg_ = "你还没有输入图片验证码";
            break;
        case 2:
            msg_ = "你输入的图片验证码错误 ";
            break;
        case 3:
            msg_ = "此手机号码还没有注册";
            break;
        case 4:
            msg_ = "此手机号码还没有注册";
            break;
        case 5:
            msg_ = "手机号已存在";
            break;
        case 6:
            msg_ = "请重新登录";
            break;
        case 7:
            msg_ = "发送失败，请重新尝试！";
            break;
        case 8:
            msg_ = "不是合法的请求";
            break;
        case 9:
            msg_ = "短信发送频繁";
            break;
        default:
            msg_ = "服务器错误";
    }
    return msg_;
}

//订单状态转义
function orderStatus(n){
    var msgObj = {msg:"",a:""};
    switch(n)
    {
        case 0:
            msgObj.msg = "未完成";
            msgObj.a = '<a href="#">填写信用资料</a>';
            break;
        case 1:
            msgObj.msg = "审核未通过";
            msgObj.a = '<a href="#">去松鼠贷APP补充资料</a>';
            break;
        case 2:
            msgObj.msg = "审核通过待签合同";
            msgObj.a = '<a href="#">去松鼠贷APP签合同</a>';
            break;
        case 3:
            msgObj.msg = "待还款";
            msgObj.a = '<a href="#">去松鼠贷APP还款</a>';
            break;
        default:
            msgObj.msg = "状态转义失败";
            msgObj.a = '<a href="javascript:;">状态转义失败</a>';
    }
    return msgObj;
}

//格式化货币
function formatMoney(s){
    if(s == "undefined" || s == null ) return "0.00";
    s = (s+"").replace(",","");
    if(/[^0-9\.]/.test(s)) return "格式错误";
    s=s.replace(/^(\d*)$/,"$1.");
    s=(s+"00").replace(/(\d*\.\d\d)\d*/,"$1");
    s=s.replace(".",",");
    var re=/(\d)(\d{3},)/;
    while(re.test(s))
        s=s.replace(re,"$1,$2");
    s=s.replace(/,(\d\d)$/,".$1");
    //return "￥" + s.replace(/^\./,"0.")
    return s.replace(/^\./,"0.")
}

/**
 * 时间格式化 如：formatDate("2010-04-30", "yyyy-MM-dd HH:mm:ss.fff")
 */
function formatDate(date, format) {
    if (!date) return "";
    if (!format) format = "yyyy-MM-dd HH:mm:ss";
    switch(typeof date) {
        case "string":
            date = new Date(date.replace(/-/g, "/"));
            break;
        case "number":
            date = new Date(date);
            break;
    }
    if (!date instanceof Date) return "";
    var dict = {
        "yyyy": date.getFullYear(),
        "M": date.getMonth() + 1,
        "d": date.getDate(),
        "H": date.getHours(),
        "m": date.getMinutes(),
        "s": date.getSeconds(),
        "MM": ("" + (date.getMonth() + 101)).substr(1),
        "dd": ("" + (date.getDate() + 100)).substr(1),
        "HH": ("" + (date.getHours() + 100)).substr(1),
        "mm": ("" + (date.getMinutes() + 100)).substr(1),
        "ss": ("" + (date.getSeconds() + 100)).substr(1),
        "fff": ("" + (date.getMilliseconds() + 1000)).substr(1)
    };
    return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?|fff?)/g, function() {
        return dict[arguments[0]];
    });
}

//弹框
var prompBox = {
    prompBox_: null,
    btns: null,
    meba : null,
    init: function (yes, no) {
        this.prompBox_ = $(".prompBox");
        this.btns = $(".btns > a");
        this.meba = $("#meba2");
        this.events(yes, no);
    },
    events: function (yes, no) {
        var __this = this;
        __this.btns.eq(0).on("click",function(){
            __this.hideL();
            no&&no();
        });
    },
    hideL : function(){
        this.prompBox_.hide();
        this.meba.removeClass("active");
    },
    showL : function(){
        this.meba.addClass("active");
        this.prompBox_.show();
    }

}

function isLocalStorage() {
    var testKey = 'test',
        storage = window.localStorage;
    try {
        storage.setItem(testKey, 'testValue');
        storage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
}
if(isLocalStorage()){
    localStorage.test = "yes";
}
var test;
if(window.localStorage){
    if(localStorage.test){
        test = localStorage.test;
    }
    else{
        test = "no";
    }
}
if(test=="no"){
    alert("您的浏览器不支持localStorage，请关闭无痕模式等");
}
function jiami(mobile){
    return mobile.substring(0,3) + "****" + mobile.substring(7, 11);

}