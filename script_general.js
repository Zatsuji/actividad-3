(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer","this.Image_5137A75F_4B75_7A77_41B7_947C8F909E2A","this.veilPopupPanorama","this.zoomImagePopupPanorama","this.closeButtonPopupPanorama"],"scrollBarColor":"#000000","backgroundColorRatios":[0],"hash": "9dbd52aec4e42a86c797f8e4d2d55d7c3968d59e2423e9a1508790f57b6a2e44", "definitions": [{"id":"mainPlayList","items":[{"camera":"this.panorama_459F59CE_4B36_F656_41D2_B9181CEE792A_camera","media":"this.panorama_459F59CE_4B36_F656_41D2_B9181CEE792A","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"media":"this.video_5CB9C38F_4B77_7AD6_41B5_2E3FB8D5B519","end":"this.trigger('tourEnded')","player":"this.MainViewerVideoPlayer","class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 0)","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)"}],"class":"PlayList"},{"enterPointingToHorizon":true,"id":"panorama_459F59CE_4B36_F656_41D2_B9181CEE792A_camera","class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"id":"ImageResource_5B2BFEE4_4B73_965B_41D1_03F447AAD7D5","class":"ImageResource","levels":["this.imlevel_5B5FDD07_4B73_9BE5_41C8_7DEE3FC9949B","this.imlevel_5B5FED07_4B73_9BE5_41C3_B7AA1CEE931E","this.imlevel_5B5FFD07_4B73_9BE5_41C4_371CB6318D82"]},{"click":"this.set('fullscreenEnabled', !this.get('fullscreenEnabled'))","horizontalAlign":"center","id":"Image_5137A75F_4B75_7A77_41B7_947C8F909E2A","class":"Image","data":{"name":"Image"},"backgroundOpacity":0,"right":"2%","url":trans('Image_5137A75F_4B75_7A77_41B7_947C8F909E2A.url'),"verticalAlign":"middle","minHeight":1,"propagateClick":false,"minWidth":1,"bottom":"3%","height":65,"width":65,"scaleMode":"fit_inside"},{"hfov":360,"id":"panorama_459F59CE_4B36_F656_41D2_B9181CEE792A","vfov":180,"overlays":["this.overlay_5A33F776_4B37_1A49_41D0_B79C4898C45D","this.overlay_5D72083E_4B53_1639_41CA_B817EF0B3458","this.overlay_5C908C67_4B75_0E57_41C2_1D34934BF53F","this.popup_5CB83EB6_4B75_0AC9_41A1_49BE6392685F","this.popup_44DC07D3_4B6C_767D_41D0_F228F15564C6","this.overlay_587C416A_4B7C_8A2E_41B1_B34672327E35"],"data":{"label":"Trueno 360"},"class":"Panorama","hfovMax":130,"thumbnailUrl":"media/panorama_459F59CE_4B36_F656_41D2_B9181CEE792A_t.webp","label":trans('panorama_459F59CE_4B36_F656_41D2_B9181CEE792A.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":13,"height":6656,"url":"media/panorama_459F59CE_4B36_F656_41D2_B9181CEE792A_0/{face}/0/{row}_{column}.webp","colCount":78,"class":"TiledImageResourceLevel","tags":"ondemand","width":39936},{"rowCount":7,"height":3584,"url":"media/panorama_459F59CE_4B36_F656_41D2_B9181CEE792A_0/{face}/1/{row}_{column}.webp","colCount":42,"class":"TiledImageResourceLevel","tags":"ondemand","width":21504},{"rowCount":4,"height":2048,"url":"media/panorama_459F59CE_4B36_F656_41D2_B9181CEE792A_0/{face}/2/{row}_{column}.webp","colCount":24,"class":"TiledImageResourceLevel","tags":"ondemand","width":12288},{"rowCount":2,"height":1024,"url":"media/panorama_459F59CE_4B36_F656_41D2_B9181CEE792A_0/{face}/3/{row}_{column}.webp","colCount":12,"class":"TiledImageResourceLevel","tags":"ondemand","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_459F59CE_4B36_F656_41D2_B9181CEE792A_0/{face}/4/{row}_{column}.webp","colCount":6,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_459F59CE_4B36_F656_41D2_B9181CEE792A_t.webp"}]},{"viewerArea":"this.MainViewer","displayPlaybackBar":true,"clickAction":"play_pause","id":"MainViewerVideoPlayer","class":"VideoPlayer","displayPlayOverlay":true},{"pitch":33.48,"yaw":-106.1,"hideEasing":"cubic_out","showDuration":500,"popupMaxWidth":"95%","autoplay":true,"popupDistance":100,"showEasing":"cubic_in","hfov":10.5,"popupMaxHeight":"95%","id":"popup_5CB83EB6_4B75_0AC9_41A1_49BE6392685F","class":"PopupPanoramaOverlay","hideDuration":500,"video":"this.videores_5DA6F65A_4B72_FA7E_41C1_606417AA2AAC"},{"id":"playList_5B3FFE3C_4B73_962B_41D1_CFCEAE7D4191","items":[{"media":"this.video_5CB9C38F_4B77_7AD6_41B5_2E3FB8D5B519","start":"this.viewer_uid5E73BE97_4B6D_B6E6_41CF_5DA889F97EDDVideoPlayer.set('displayPlaybackBar', true); this.viewer_uid5E73BE97_4B6D_B6E6_41CF_5DA889F97EDDVideoPlayer.set('displayPlayOverlay', true); this.viewer_uid5E73BE97_4B6D_B6E6_41CF_5DA889F97EDDVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_5B3FFE3C_4B73_962B_41D1_CFCEAE7D4191, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_5B3FFE3C_4B73_962B_41D1_CFCEAE7D4191, 0)","class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.viewer_uid5E73BE97_4B6D_B6E6_41CF_5DA889F97EDDVideoPlayer)","player":"this.viewer_uid5E73BE97_4B6D_B6E6_41CF_5DA889F97EDDVideoPlayer"}],"class":"PlayList"},{"headerPaddingLeft":10,"closeButtonRollOverBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonRollOverBackgroundColorDirection":"vertical","closeButtonRollOverBackgroundOpacity":0,"veilOpacity":0.4,"titleFontSize":"1.29vmin","closeButtonRollOverIconLineWidth":2,"closeButtonPressedIconLineWidth":2,"class":"Window","closeButtonPressedBackgroundOpacity":0,"closeButtonBackgroundColorDirection":"vertical","headerBackgroundColorRatios":[0,0.09803921568627451,1],"overflow":"scroll","closeButtonPaddingLeft":5,"veilColor":["#000000","#000000"],"bodyBackgroundColorRatios":[0,0.5019607843137255,1],"bodyBackgroundOpacity":0,"footerBackgroundColorRatios":[0,0.8980392156862745,1],"footerHeight":5,"closeButtonIconHeight":0,"data":{"name":"Window628"},"closeButtonPressedBackgroundColorDirection":"vertical","modal":true,"titlePaddingRight":5,"closeButtonPaddingBottom":5,"closeButtonPaddingTop":5,"gap":10,"titleHorizontalAlign":"left","scrollBarMargin":2,"propagateClick":false,"verticalAlign":"middle","closeButtonBackgroundOpacity":0,"footerBackgroundOpacity":0,"closeButtonRollOverBorderColor":"#000000","headerBackgroundColorDirection":"vertical","shadow":true,"shadowVerticalLength":0,"closeButtonBorderColor":"#000000","titlePaddingBottom":5,"veilHideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"closeButtonRollOverIconColor":"#666666","scrollBarColor":"#000000","children":["this.viewer_uid5E73BE97_4B6D_B6E6_41CF_5DA889F97EDD"],"closeButtonIconColor":"#000000","hideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"bodyPaddingLeft":0,"titleFontFamily":"Arial","headerVerticalAlign":"middle","showEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"headerPaddingTop":10,"closeButtonBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"backgroundColorRatios":[],"horizontalAlign":"center","headerPaddingBottom":5,"closeButtonBackgroundColorRatios":[0,0.09803921568627451,1],"closeButtonPaddingRight":5,"id":"window_41BF86E5_4B6C_F625_41D2_859A563830DF","closeButtonIconWidth":0,"shadowSpread":1,"bodyPaddingTop":0,"backgroundColor":[],"footerBackgroundColorDirection":"vertical","bodyBackgroundColorDirection":"vertical","layout":"vertical","closeButtonPressedBorderColor":"#000000","closeButtonIconLineWidth":2,"veilColorRatios":[0,1],"borderRadius":5,"closeButtonBorderRadius":0,"titlePaddingLeft":5,"closeButtonBorderSize":0,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"shadowOpacity":0.5,"bodyPaddingBottom":0,"shadowColor":"#000000","closeButtonRollOverBackgroundColorRatios":[0,0.09803921568627451,1],"minWidth":0,"minHeight":0,"closeButtonPressedBorderSize":0,"shadowHorizontalLength":3,"bodyPaddingRight":0,"closeButtonPressedBackgroundColorRatios":[0,0.09803921568627451,1],"titlePaddingTop":5,"headerBackgroundOpacity":0,"headerPaddingRight":0,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"closeButtonPressedBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"veilShowEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"closeButtonRollOverBorderSize":0,"closeButtonPressedIconColor":"#888888","footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"]},{"subtitlesGap":0,"progressHeight":2,"surfaceReticleColor":"#FFFFFF","progressBorderSize":0,"toolTipPaddingLeft":6,"progressBarBorderRadius":2,"class":"ViewerArea","progressBarBorderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"subtitlesBackgroundColor":"#000000","data":{"name":"Main Viewer"},"toolTipShadowColor":"#333138","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"toolTipFontColor":"#606060","progressLeft":"33%","progressBorderRadius":2,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"propagateClick":false,"surfaceReticleSelectionColor":"#FFFFFF","toolTipFontSize":"1.11vmin","playbackBarRight":0,"doubleClickAction":"none","playbackBarBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarProgressBackgroundColor":["#CC0033"],"playbackBarProgressBorderRadius":0,"playbackBarBackgroundOpacity":1,"playbackBarHeadShadowOpacity":0.7,"subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"subtitlesTop":0,"playbackBarProgressBorderColor":"#000000","firstTransitionDuration":0,"subtitlesTextShadowHorizontalLength":1,"progressBackgroundColorRatios":[0],"id":"MainViewer","subtitlesBottom":50,"subtitlesFontSize":"3vmin","progressRight":"33%","playbackBarHeadBorderRadius":0,"toolTipPaddingRight":6,"playbackBarHeadBorderColor":"#000000","progressOpacity":0.7,"toolTipFontFamily":"Arial","playbackBarBorderSize":0,"subtitlesTextShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColorDirection":"horizontal","subtitlesBackgroundOpacity":0.2,"progressBarBorderColor":"#000000","vrThumbstickRotationStep":20,"minHeight":50,"subtitlesTextShadowVerticalLength":1,"vrPointerColor":"#FFFFFF","vrPointerSelectionColor":"#CC0033","minWidth":100,"toolTipPaddingTop":4,"subtitlesFontFamily":"Arial","playbackBarHeadShadowBlurRadius":3,"progressBorderColor":"#000000","vrPointerSelectionTime":2000,"toolTipPaddingBottom":4,"progressBarBackgroundColor":["#3399FF"],"playbackBarLeft":0,"progressBackgroundColor":["#000000"],"progressBottom":10,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"width":"100%","playbackBarHeadShadow":true,"height":"100%","toolTipBorderColor":"#767676"},{"pitch":15.68,"yaw":-34.65,"hideEasing":"cubic_out","showDuration":500,"popupMaxWidth":"80%","popupMaxHeight":"80%","popupDistance":100,"showEasing":"cubic_in","hfov":22.54,"id":"popup_44DC07D3_4B6C_767D_41D0_F228F15564C6","image":"this.ImageResource_5B2BFEE4_4B73_965B_41D1_03F447AAD7D5","class":"PopupPanoramaOverlay","hideDuration":500},{"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer"},{"width":3840,"video":"this.videores_5DA6F65A_4B72_FA7E_41C1_606417AA2AAC","id":"video_5CB9C38F_4B77_7AD6_41B5_2E3FB8D5B519","height":2160,"data":{"label":"Casino"},"class":"Video","thumbnailUrl":"media/video_5CB9C38F_4B77_7AD6_41B5_2E3FB8D5B519_t.webp","label":trans('video_5CB9C38F_4B77_7AD6_41B5_2E3FB8D5B519.label')},{"backgroundColorRatios":[0],"id":"veilPopupPanorama","class":"UIComponent","left":0,"backgroundColor":["#000000"],"data":{"name":"UIComponent7323"},"backgroundOpacity":0.55,"right":0,"minHeight":0,"propagateClick":false,"minWidth":0,"top":0,"bottom":0,"visible":false,"showEffect":{"duration":350,"easing":"cubic_in_out","class":"FadeInEffect"}},{"backgroundColorRatios":[],"id":"zoomImagePopupPanorama","class":"ZoomImage","left":0,"backgroundColor":[],"data":{"name":"ZoomImage7324"},"right":0,"minHeight":0,"propagateClick":false,"minWidth":0,"top":0,"bottom":0,"scaleMode":"custom","visible":false},{"fontColor":"#FFFFFF","iconColor":"#000000","backgroundColorRatios":[0,0.09803921568627451,1],"pressedIconColor":"#888888","rollOverIconColor":"#666666","id":"closeButtonPopupPanorama","class":"CloseButton","data":{"name":"CloseButton7325"},"backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"fontSize":"1.29vmin","iconHeight":"100%","right":10,"fontFamily":"Arial","tabIndex":0,"minHeight":0,"layout":"horizontal","propagateClick":false,"minWidth":0,"top":10,"iconLineWidth":2,"borderColor":"#000000","visible":false,"iconWidth":"100%","showEffect":{"duration":350,"easing":"cubic_in_out","class":"FadeInEffect"}},{"class":"ImageResourceLevel","url":trans('imlevel_5B5FDD07_4B73_9BE5_41C8_7DEE3FC9949B.url'),"width":2047,"id":"imlevel_5B5FDD07_4B73_9BE5_41C8_7DEE3FC9949B","height":941},{"class":"ImageResourceLevel","url":trans('imlevel_5B5FED07_4B73_9BE5_41C3_B7AA1CEE931E.url'),"width":1023,"id":"imlevel_5B5FED07_4B73_9BE5_41C3_B7AA1CEE931E","height":470},{"class":"ImageResourceLevel","url":trans('imlevel_5B5FFD07_4B73_9BE5_41C4_371CB6318D82.url'),"width":511,"id":"imlevel_5B5FFD07_4B73_9BE5_41C4_371CB6318D82","height":235},{"maps":[],"enabledInCardboard":true,"items":[{"pitch":15.68,"distance":50,"yaw":-34.65,"vfov":46.3,"hfov":22.54,"image":{"class":"ImageResource","levels":[{"height":2047,"url":"media/panorama_459F59CE_4B36_F656_41D2_B9181CEE792A_HS_kxhjct9y.webp","class":"ImageResourceLevel","width":954}]},"class":"HotspotPanoramaOverlayImage","data":{"label":"Pol\u00edgono"}}],"areas":["this.HotspotPanoramaOverlayArea_5A4C985B_4B37_167F_41CE_798F395FE89C"],"rollOverDisplay":true,"useHandCursor":true,"id":"overlay_5A33F776_4B37_1A49_41D0_B79C4898C45D","class":"HotspotPanoramaOverlay","data":{"label":"Polígono"}},{"maps":[],"enabledInCardboard":true,"items":[{"pitch":-9.65,"distance":100,"yaw":-178.49,"scaleMode":"fit_inside","hfov":10.5,"image":"this.AnimatedImageResource_5E707E75_4B6D_B63A_41A3_C944803C1E09","class":"HotspotPanoramaOverlayImage","vfov":6.3,"data":{"label":"Arrow 02b"}}],"areas":["this.HotspotPanoramaOverlayArea_5DD6E8C2_4B53_164E_41BC_0958A6748D3E"],"useHandCursor":true,"id":"overlay_5D72083E_4B53_1639_41CA_B817EF0B3458","class":"HotspotPanoramaOverlay","data":{"label":"Arrow 02b"}},{"maps":[],"enabledInCardboard":true,"items":[{"pitch":33.48,"distance":50,"yaw":-106.1,"scaleMode":"fit_inside","data":{"label":"Dron"},"hfov":10.5,"image":"this.res_5DB311D5_4B72_F64A_41B9_5C5741A6F116","class":"HotspotPanoramaOverlayImage","vfov":10.5}],"areas":["this.HotspotPanoramaOverlayArea_5DEC8D58_4B75_0E79_41B4_B0E97D8BBE0D"],"useHandCursor":true,"id":"overlay_5C908C67_4B75_0E57_41C2_1D34934BF53F","class":"HotspotPanoramaOverlay","data":{"label":"Dron"}},{"maps":[],"enabledInCardboard":true,"items":[{"pitch":-7.96,"distance":100,"yaw":-3.46,"scaleMode":"fit_inside","hfov":10.5,"image":"this.AnimatedImageResource_5E735E76_4B6D_B626_41D1_1D18F5D8B66A","class":"HotspotPanoramaOverlayImage","vfov":6.3,"data":{"label":"Arrow 02b"}}],"areas":["this.HotspotPanoramaOverlayArea_587D116B_4B7C_8A2E_41CB_F354526BA58E"],"useHandCursor":true,"id":"overlay_587C416A_4B7C_8A2E_41B1_B34672327E35","class":"HotspotPanoramaOverlay","data":{"label":"Arrow 02b"}},{"height":2160,"levels":["this.videolevel_5F923E03_4B6D_B9DE_41C0_F9F27AE5E7F6"],"id":"videores_5DA6F65A_4B72_FA7E_41C1_606417AA2AAC","class":"VideoResource","hasAudio":false,"width":3840},{"viewerArea":"this.viewer_uid5E73BE97_4B6D_B6E6_41CF_5DA889F97EDD","displayPlaybackBar":true,"clickAction":"play_pause","id":"viewer_uid5E73BE97_4B6D_B6E6_41CF_5DA889F97EDDVideoPlayer","class":"VideoPlayer","displayPlayOverlay":true},{"subtitlesGap":0,"progressHeight":2,"surfaceReticleColor":"#FFFFFF","progressBorderSize":0,"toolTipPaddingLeft":6,"progressBarBorderRadius":2,"class":"ViewerArea","progressBarBorderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"subtitlesBackgroundColor":"#000000","data":{"name":"ViewerArea7322"},"toolTipShadowColor":"#333138","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"toolTipFontColor":"#606060","progressLeft":"33%","progressBorderRadius":2,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"propagateClick":false,"surfaceReticleSelectionColor":"#FFFFFF","toolTipFontSize":"1.11vmin","playbackBarRight":0,"doubleClickAction":"none","playbackBarBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarProgressBackgroundColor":["#CC0033"],"playbackBarProgressBorderRadius":0,"playbackBarBackgroundOpacity":1,"playbackBarHeadShadowOpacity":0.7,"subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"subtitlesTop":0,"playbackBarProgressBorderColor":"#000000","firstTransitionDuration":0,"subtitlesTextShadowHorizontalLength":1,"progressBackgroundColorRatios":[0],"id":"viewer_uid5E73BE97_4B6D_B6E6_41CF_5DA889F97EDD","subtitlesBottom":10,"subtitlesFontSize":"3vmin","progressRight":"33%","playbackBarHeadBorderRadius":0,"toolTipPaddingRight":6,"playbackBarHeadBorderColor":"#000000","progressOpacity":0.7,"toolTipFontFamily":"Arial","playbackBarBorderSize":0,"subtitlesTextShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColorDirection":"horizontal","subtitlesBackgroundOpacity":0.2,"progressBarBorderColor":"#000000","vrThumbstickRotationStep":20,"minHeight":50,"subtitlesTextShadowVerticalLength":1,"vrPointerColor":"#FFFFFF","vrPointerSelectionColor":"#CC0033","minWidth":100,"toolTipPaddingTop":4,"subtitlesFontFamily":"Arial","playbackBarHeadShadowBlurRadius":3,"progressBorderColor":"#000000","vrPointerSelectionTime":2000,"toolTipPaddingBottom":4,"progressBarBackgroundColor":["#3399FF"],"playbackBarLeft":0,"progressBackgroundColor":["#000000"],"progressBottom":10,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"width":"100%","playbackBarHeadShadow":true,"height":"100%","toolTipBorderColor":"#767676"},{"click":"this.showPopupPanoramaOverlay(this.popup_44DC07D3_4B6C_767D_41D0_F228F15564C6,{'pressedBorderColor':'#000000','pressedIconColor':'#888888','iconLineWidth':2,'iconWidth':0,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':2,'rollOverBackgroundColorDirection':'vertical','rollOverIconColor':'#666666','pressedBorderSize':0,'rollOverIconLineWidth':2,'rollOverBackgroundOpacity':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':0,'borderSize':0,'pressedIconWidth':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0,'rollOverIconWidth':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconColor':'#000000','borderColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverIconHeight':0,'borderRadius':0,'pressedIconHeight':0,'paddingTop':5,'paddingBottom':5,'rollOverBorderColor':'#000000','paddingLeft':5},this.ImageResource_5B2BFEE4_4B73_965B_41D1_03F447AAD7D5,null,null,null,false)","id":"HotspotPanoramaOverlayArea_5A4C985B_4B37_167F_41CE_798F395FE89C","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"image"},{"rowCount":6,"frameDuration":41,"frameCount":24,"levels":[{"height":360,"url":"media/res_5C6060C1_4B6D_164A_41A5_C4E946D21420_0.webp","class":"ImageResourceLevel","width":400}],"id":"AnimatedImageResource_5E707E75_4B6D_B63A_41A3_C944803C1E09","class":"AnimatedImageResource","colCount":4,"finalFrame":"first"},{"id":"HotspotPanoramaOverlayArea_5DD6E8C2_4B53_164E_41BC_0958A6748D3E","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"any"},{"id":"res_5DB311D5_4B72_F64A_41B9_5C5741A6F116","class":"ImageResource","levels":[{"height":285,"url":"media/res_5DB311D5_4B72_F64A_41B9_5C5741A6F116_0.webp","class":"ImageResourceLevel","width":285}]},{"click":"if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_5CB83EB6_4B75_0AC9_41A1_49BE6392685F,{'pressedBorderColor':'#000000','pressedIconColor':'#888888','iconLineWidth':2,'iconWidth':0,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':2,'rollOverBackgroundColorDirection':'vertical','rollOverIconColor':'#666666','pressedBorderSize':0,'rollOverIconLineWidth':2,'rollOverBackgroundOpacity':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':0,'borderSize':0,'pressedIconWidth':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0,'rollOverIconWidth':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconColor':'#000000','borderColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverIconHeight':0,'borderRadius':0,'pressedIconHeight':0,'paddingTop':5,'paddingBottom':5,'rollOverBorderColor':'#000000','paddingLeft':5},true) } else { this.showPopupMedia(this.window_41BF86E5_4B6C_F625_41D2_859A563830DF, this.video_5CB9C38F_4B77_7AD6_41B5_2E3FB8D5B519, this.playList_5B3FFE3C_4B73_962B_41D1_CFCEAE7D4191, '95%', '95%', true) }","id":"HotspotPanoramaOverlayArea_5DEC8D58_4B75_0E79_41B4_B0E97D8BBE0D","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"any"},{"rowCount":6,"frameDuration":41,"frameCount":24,"levels":[{"height":360,"url":"media/res_5C6060C1_4B6D_164A_41A5_C4E946D21420_0.webp","class":"ImageResourceLevel","width":400}],"id":"AnimatedImageResource_5E735E76_4B6D_B626_41D1_1D18F5D8B66A","class":"AnimatedImageResource","colCount":4,"finalFrame":"first"},{"id":"HotspotPanoramaOverlayArea_587D116B_4B7C_8A2E_41CB_F354526BA58E","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"any"},{"height":2160,"type":"video/mp4","codec":"h264","framerate":29.97,"bitrate":9943,"posterURL":trans('videolevel_5F923E03_4B6D_B9DE_41C0_F9F27AE5E7F6.posterURL'),"id":"videolevel_5F923E03_4B6D_B9DE_41C0_F9F27AE5E7F6","class":"VideoResourceLevel","url":trans('videolevel_5F923E03_4B6D_B9DE_41C0_F9F27AE5E7F6.url'),"width":3840}],"start":"this.init(); if(!this.get('fullscreenAvailable')) { [this.Image_5137A75F_4B75_7A77_41B7_947C8F909E2A].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","id":"rootPlayer","class":"Player","data":{"locales":{"es":"locale/es.txt"},"defaultLocale":"es","textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"rate":1,"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false},"name":"Player765","history":{},"displayTooltipInTouchScreens":true},"backgroundColor":["#FFFFFF"],"layout":"absolute","minHeight":0,"scrollBarMargin":2,"propagateClick":false,"minWidth":0,"gap":10,"scripts":{"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getComponentByName":TDV.Tour.Script.getComponentByName,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"clone":TDV.Tour.Script.clone,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"mixObject":TDV.Tour.Script.mixObject,"openLink":TDV.Tour.Script.openLink,"shareSocial":TDV.Tour.Script.shareSocial,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setValue":TDV.Tour.Script.setValue,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"resumePlayers":TDV.Tour.Script.resumePlayers,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getKey":TDV.Tour.Script.getKey,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getPixels":TDV.Tour.Script.getPixels,"executeJS":TDV.Tour.Script.executeJS,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showWindow":TDV.Tour.Script.showWindow,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"startMeasurement":TDV.Tour.Script.startMeasurement,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"initQuiz":TDV.Tour.Script.initQuiz,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"init":TDV.Tour.Script.init,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"showPopupImage":TDV.Tour.Script.showPopupImage,"playAudioList":TDV.Tour.Script.playAudioList,"quizStart":TDV.Tour.Script.quizStart,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"historyGoBack":TDV.Tour.Script.historyGoBack,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"quizFinish":TDV.Tour.Script.quizFinish,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"existsKey":TDV.Tour.Script.existsKey,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"unregisterKey":TDV.Tour.Script.unregisterKey,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getOverlays":TDV.Tour.Script.getOverlays,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"registerKey":TDV.Tour.Script.registerKey,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"textToSpeech":TDV.Tour.Script.textToSpeech,"historyGoForward":TDV.Tour.Script.historyGoForward,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"isPanorama":TDV.Tour.Script.isPanorama,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMainViewer":TDV.Tour.Script.getMainViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"createTween":TDV.Tour.Script.createTween,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"disableVR":TDV.Tour.Script.disableVR,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"toggleVR":TDV.Tour.Script.toggleVR,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"enableVR":TDV.Tour.Script.enableVR,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"initAnalytics":TDV.Tour.Script.initAnalytics,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"translate":TDV.Tour.Script.translate,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setMapLocation":TDV.Tour.Script.setMapLocation,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"downloadFile":TDV.Tour.Script.downloadFile,"setLocale":TDV.Tour.Script.setLocale},"width":"100%","height":"100%","defaultMenu":[],"watermark":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.2.10, Tue Dec 23 2025