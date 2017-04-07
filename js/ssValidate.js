/**
 * 表单验证工具类
 */

/**
 * 页面初始化后调用
 */
//$(document).ready(function(){
//$(function(){})

//}) 

// JavaScript Document

//提示信息
function fnInfo(oInfo,sInfo,time,callback){
	var t=time||1500
	$(oInfo).html(sInfo).addClass("active");
	setTimeout(function(){
		$(oInfo).removeClass("active");
		callback&&callback();
	},t);
}

//数据验证
var mValidate=function(){//定义对象构造方法  
	
} 

mValidate.prototype={  //封装方法  
	mobile:function(value,callback){//验证手机号
		//var mobile = /^1[3|4|5|7|8]\d{9}$/;	
		var mobile = /^1[1|2|3|4|5|7|8|9]\d{9}$/;	
		//return this.optional(element) || (mobile.test(value));
		var vm_ = mobile.test(value);
		if(!vm_) callback&&callback();
		return vm_;
	},
	email:function(value,callback){
		var email_ = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
		var vm_ = email_.test(value);
		if(!vm_) callback&&callback();
		return vm_;
	},
	recommendMobile:function(value,callback){//验证邀请码
		var mobile = /^\d{6}$/;	
		var vm_ = mobile.test(value);
		if(!vm_) callback&&callback();
		return vm_;
	},
	isLetter:function(val,callback){//验证纯字母
		var regExp = /^([a-zA-Z]+)$/;
		return regExp.test(val);
	},
	isNum:function(val){//验证纯数字
		var regExp = /^(\d+)$/;
		return regExp.test(val);
	},
	isSpace:function(val){//验证是否有空格
		var regExp = /\s/;
		return regExp.test(val);
	},
	isEmpty:function(val,callback){//是否为空
		var vm_ = (val=="");
		if(vm_) callback&&callback();
		return !vm_;
	},
	isImgCode:function(val){//验证图片验证码
		return (val.length==4)?true:false;
	},
	isSMCode:function(val){//验证短信验证码
		return (val.length==6)?true:false;
	},
	vLength:function(val){//验证是密码长度
		return (val.length<6||val.length>18)?false:true;
	},
	vLengths:function(val){//验证是密码长度
		return val.length<6?false:true;
	},
	vLengthb:function(val){//验证是密码长度
		return val.length>18?false:true;
	},
	vPwd:function(val,callback){//统一验证密码格式 非空 不包含空格 不能纯数字||纯字母 的6~18位字符串
		var regExp1 = /^([a-zA-Z]+)$/,
			regExp2 = /^(\d+)$/,
			regExp3 = /\s/;	
		var vm_ = (!regExp1.test(val))&&(!regExp2.test(val))&&(!regExp3.test(val))&&(!(val.length<6||val.length>18))&&(!val=="");
		if(!vm_) callback&&callback();
		return vm_;
	},
	vEqualTo:function(valO,valT,callback){
		var vm_ = (valO===valT)&&valO!=""&&valT!="";
		if(!vm_) callback&&callback();
		return vm_;
	},
	vLic:function(val,callback){//营业执照15位或18位数字  税务登记号也是
		var regExp1 = /^[a-zA-Z0-9]+$/;// /^\d{15}$/;//,
			//regExp2 = /^\d{18}$/
		var vm_ = (regExp1.test(val));//||(regExp2.test(val));
		if(!vm_) callback&&callback();
		return vm_;
	},
	vOrcode:function(val,callback){//组织机构  00000000-0 或 18位数字
		var regExp1 = /^[a-zA-Z0-9]{8}-[a-zA-Z0-9]$/;//,
			//regExp2 = /^\d{18}$/;
		var vm_ = regExp1.test(val);//||regExp2.test(val);
		if(!vm_) callback&&callback();
		return vm_;
	},
	vScredit:function(val,callback){//18位社会统一代码
		var regExp1 = /^[a-zA-Z0-9]+$/;
		var vm_ = regExp1.test(val);
		if(!vm_) callback&&callback();
		return vm_;
	},
	vTax:function(val,callback){//组织机构  --- 暂时未用socialCredit
		var regExp1 = /^[a-zA-Z0-9]+$/;// /^\d{11}$/;
		//var regExp2 = /^\d{18}$/;
		var vm_ = regExp1.test(val);
		if(!vm_) callback&&callback();
		return vm_;
	},
	vPermit:function(val,callback){//开户银行许可证 18位数字或字母
		var regExp1 = /^[a-zA-Z0-9]+$/;// /^\d{14}$/;
		var vm_ = regExp1.test(val);
		if(!vm_) callback&&callback();
		return vm_;
	},
	vBnum:function(val,callback){//企业账户 20位数字 :修改为 纯数字
		var regExp1 = /^(\d+)$/;
		var vm_ = regExp1.test(val);
		if(!vm_) callback&&callback();
		return vm_;
	},
	vNUid:function(val,callback){//新密码规则  字母或数字
		var regExp1 = /^[a-zA-Z0-9]+$/;
		var vm_ = regExp1.test(val);
		if(!vm_) callback&&callback();
		return vm_;
	},
	vCard:function(val,callback){//开户银行许可证 14位数字
		var regExp1 = /^(\d{16}|\d{19})$/;
		var vm_ = regExp1.test(val);
		if(!vm_) callback&&callback();
		return vm_;
	},
	vManAccou:function(val,callback){
		var regExp1 = /^([a-zA-Z]+)$/,
			regExp2 = /^(\d+)$/,
			regExp3 = /\s/;	
		var vm_ = (!regExp1.test(val))&&(!regExp2.test(val))&&(!regExp3.test(val))&&(!(val.length<5||val.length>25))&&(!val=="");
		if(!vm_) callback&&callback();
		return vm_;
	},
	vAccName:function(val,callback){//昵称文本框增加限制 4~20位字符
		var vm_ = (val.length>3&&val.length<20)?true:false;
		if(!vm_) callback&&callback();
		return vm_;
	},
	vAccNumExt:function(val,callback){//不能以'.-_'开头或结尾
		var regExp1 = /^(\.+)$/,
			regExp2 = /^(\-+)$/,
			regExp3 = /^(\_+)$/,
			regExp4 = /^\_|^\-|^\./;
			regExp5 = /\_$|\-$|\.$/;
		var vm_ = (!regExp1.test(val))&&(!regExp2.test(val))&&(!regExp3.test(val))&&(!regExp4.test(val))&&(!regExp5.test(val));
		if(!vm_) callback&&callback();
		return vm_;
	},
	vAccNum:function(val,callback){
		var regExp1 = /^[a-zA-Z0-9\.\_\-]{5,25}$/,
			regExp2 = /^(\d+)$/,
			regExp3 = /^(\.+)$/,
			regExp4 = /^(\-+)$/,
			regExp5 = /^(\_+)$/,
			regExp6 = /^\_|^\-|^\./;
			regExp7 = /\_$|\-$|\.$/;
		var vm_ = (regExp1.test(val))&&(!regExp3.test(val))&&(!regExp4.test(val))&&(!regExp5.test(val))&&(!regExp6.test(val))&&(!regExp7.test(val));
		if(!vm_) callback&&callback();
		return vm_;
	},
	vSecNum:function(val,callback){//11数字true 不符合 false 
		var regExp1 = /^(\d+){11}$/;
		var vm_ = !regExp1.test(val);
		if(!vm_) callback&&callback();
		return vm_;
	},
	vSecName:function(val,callback){//姓名验证 提示：姓名只能为汉字、英文和分隔号“·”且不能以“·”开头或结尾
		var regExp1 = /^([A-Za-z\·]|[\u4E00-\u9FA5])+$/;//汉字或英文加‘.’
		var regExp2 = /^\·|\·$/;//不能以‘·’开头或结尾
		var vm_ = regExp1.test(val)&&!regExp2.test(val);
		if(!vm_) callback&&callback();
		return vm_;
	},
	pMoney:function(el){
		$(el).on("input propertychange change",function(){
		   this._val||(this._val=0);
		    validateInv(+this.value,this,this._val,-1);
		    this._val=this.value; 
		});
		function validateInv(money,obj,_default,max){
		    if(!$.isNumeric(obj.value)){
		    	if(obj.value!=""){obj.value=_default;}
		    }
		    var re1=/^0+/g;
		    var re2=/^(0+\.|\.)/g;
		    var str="";
		    if(money==0){
		    	str=$.trim(obj.value).replace(re1,"0");
		    }else if(money<0){
		    	str=obj.value*(-1);
		    }else if(money<1){
			str=$.trim(obj.value).replace(re2,"0.");
		    }else if(money>=1){
		    	str=$.trim(obj.value).replace(re1,"");
		    }else{
		    	str=$.trim(obj.value);
		    }
		    if(max!=-1){if(str>max){str=""+max;}}
		    if(str.indexOf(".")>0){obj.value = str.substring(0,str.indexOf(".") + 3);}else{obj.value=str;}
		    if($.isNumeric(obj.value) && obj.value>0){return obj.value;}else{return false;}
		}
	},
	vInteger:function(obj){//非0整数
		var iVal=$(obj).val();
		var if_=(/\D/g).test(iVal)||(/^0+/).test(iVal);
		iVal=iVal.replace(/\D/g,'');
		if(isNaN(iVal)){
			$(obj).val("");
			return false;
		}
		if_?$(obj).val(iVal.replace(/^0+/, '')):"";
		return true;
	},
	v18Num:function(val,callback){//18位数字
		var regExp1 = /^\d{18}$/;
		var vm_ = regExp1.test(val);
		if(!vm_) callback&&callback();
		return vm_;
	},
	vDecimal:function(obj){//限制大于等于1的两位小数或整数以'.'结尾需在blur处理
		var iVal=$(obj).val();
		var if_=!(/^(([1-9]+)|([0-9]+\.[0-9]{1,2}))$/).test(iVal);
		iVal = iVal.replace(/[^0-9|\.]/g, '');
		var arr_ = iVal.split('.');
		if(arr_.length>1){
			arr_[0] = arr_[0]==""?"0.":arr_[0]+".";
			arr_[1] = arr_[1].length>2?arr_[1].match(/\d{2}/):arr_[1]
			iVal = arr_[0].concat(arr_[1]);
		}
		if_?$(obj).val(iVal):"";
		if(parseInt(iVal)==0){
			$(obj).val("");
		}
		var iFlag = ( $(obj).val()!=""&&$(obj).val()>0 ) ? true : false;
		return iFlag;
	},
	vInt:function(obj){//限制为大于0 小于限额的整数
		var iLimt = $(obj).data("limt");//限额
		var iVal = $(obj).val();
		if(!/^([0-9]+)$/.test(iVal)){
			iVal = iVal.replace(/[^0-9]/g,'');
			if(/^0+/.test(iVal)){
				iVal = iVal.replace(/0+/,'');
			}
			$(obj).val(iVal);
		}
		if(/^0+/.test(iVal)){
			iVal = iVal.replace(/0+/,'');
			$(obj).val(iVal);
		}
		if(parseInt(iVal)>parseInt(iLimt)) $(obj).val(iLimt);
	},
	vMaxString:function(num,str){//不大于num个字符
		var vm_=false;
		if(str.replace(/[\u4e00-\u9fa5]/g,"aa").length<=+num){
			vm_=true;
		}else{
			vm_=false;
		}
		return vm_;
	},
	weChat:function(val){//微信 数字英文下划线 5位以上 /^[a-zA-Z\d_]{5,}$/
		var reg=/^[a-zA-Z\d_]{5,}$/;  
		var vm_ = reg.test(val);
		return vm_;
	},
	qq:function(val){//qq号  5-11位数字
		var reg=/^[1-9][0-9]{4,}$/;   
		var vm_ = reg.test(val);
		return vm_;
	},
	
	vSina:function(val){
		var email_ = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
		var mobile = /^1[1|2|3|4|5|7|8|9]\d{9}$/;	
		var vm_=false;
		if(email_.test(val) || mobile.test(val)){
			vm_=true;
		}else{
			vm_=false;
		}
		return vm_;
	}
} 

/**
 * 验证二代身份证
 */
function _idcardno(g,callback) {
    var f = 0;
    var a = g;
    var e = {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙",21:"辽宁",22:"吉林",23:"黑龙",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};
    //if (!/^\d{17}(\d|x)$/i.test(a)) {//不区分大小写x
    if (!/^\d{17}(\d|X)$/.test(a)) {//只能为大写x
    	callback&&callback(); //alert(tip);
        return false
    }
    //a = a.replace(/x$/i, "a");
    a = a.replace(/X$/, "a");
    if (e[parseInt(a.substr(0, 2))] == null) {
    	callback&&callback(); //alert(tip);
        return false
    }
    var c = a.substr(6, 4) + "-" + Number(a.substr(10, 2)) + "-" + Number(a.substr(12, 2));
    var h = new Date(c.replace(/-/g, "/"));
    if (c != (h.getFullYear() + "-" + (h.getMonth() + 1) + "-" + h.getDate())) {
    	callback&&callback(); //alert(tip);
        return false
    }
    for (var b = 17; b >= 0; b--) {
        f += (Math.pow(2, b) % 11) * parseInt(a.charAt(17 - b), 11)
    }
    if (f % 11 != 1) {
    	callback&&callback(); //alert(tip);
        return false
    }
    return true
}

//打开登录框
function openLoginBox(){
	var oLoginBox = document.getElementById("loginBox");
	$(".meba").show();
	oLoginBox.style.WebkitTransform="scale(1)";
	oLoginBox.style.opacity=1;
	$(".login-wrap")[0].style.zIndex="99999999";	
}
//关闭登录框
function closeLoginBox(){
	var oLoginBox = document.getElementById("loginBox");
	$(".close-login").click(function(){
		$(".meba").hide();
		oLoginBox.style.WebkitTransform="scale(0)";
		oLoginBox.style.opacity=0;
		$(".login-wrap")[0].style.zIndex="-1";
	})	
}

/* rem布局设置函数 */
function remFn(num){
	var docWidth = document.documentElement.clientWidth>640 ? 640 : document.documentElement.clientWidth;
	window.document.documentElement.style.fontSize = docWidth/num+'px';
}