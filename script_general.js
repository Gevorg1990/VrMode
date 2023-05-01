(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
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
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
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
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
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
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","children":["this.MainViewer","this.HTMLText_C6BCF012_D61E_78E2_41DA_1FF9419E11EC","this.ThumbnailList_C4DC4D16_D63E_68E5_41E3_D786C9064CBE","this.Container_C2AC6992_D625_ABFD_41E6_7B48F563766C"],"backgroundColor":["#FFFFFF"],"data":{"textToSpeechConfig":{"speechOnInfoWindow":false,"rate":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"volume":1,"pitch":1,"stopBackgroundAudio":false},"locales":{"ru":"locale/ru.txt"},"defaultLocale":"ru","name":"Player1126","history":{}},"scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"backgroundColorRatios":[0],"class":"Player","scripts":{"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"isPanorama":TDV.Tour.Script.isPanorama,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"shareSocial":TDV.Tour.Script.shareSocial,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizFinish":TDV.Tour.Script.quizFinish,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"showWindow":TDV.Tour.Script.showWindow,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"createTween":TDV.Tour.Script.createTween,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"historyGoForward":TDV.Tour.Script.historyGoForward,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"getKey":TDV.Tour.Script.getKey,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"initQuiz":TDV.Tour.Script.initQuiz,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"init":TDV.Tour.Script.init,"getMediaByName":TDV.Tour.Script.getMediaByName,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"translate":TDV.Tour.Script.translate,"setLocale":TDV.Tour.Script.setLocale,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getComponentByName":TDV.Tour.Script.getComponentByName,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"mixObject":TDV.Tour.Script.mixObject,"executeJS":TDV.Tour.Script.executeJS,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"cloneBindings":TDV.Tour.Script.cloneBindings,"historyGoBack":TDV.Tour.Script.historyGoBack,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMainViewer":TDV.Tour.Script.getMainViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"clone":TDV.Tour.Script.clone,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"startMeasurement":TDV.Tour.Script.startMeasurement,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setValue":TDV.Tour.Script.setValue,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizStart":TDV.Tour.Script.quizStart,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"unregisterKey":TDV.Tour.Script.unregisterKey,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"resumePlayers":TDV.Tour.Script.resumePlayers,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"existsKey":TDV.Tour.Script.existsKey,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"registerKey":TDV.Tour.Script.registerKey,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"downloadFile":TDV.Tour.Script.downloadFile,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPixels":TDV.Tour.Script.getPixels,"getOverlays":TDV.Tour.Script.getOverlays,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playAudioList":TDV.Tour.Script.playAudioList,"openLink":TDV.Tour.Script.openLink},"hash": "c3e6ca7416680eadd17233bd7bd479e4928a994d6f8ceb055d439672faf47e78", "definitions": [{"id":"IconButton_C4A545C0_D627_9B5D_41EA_15571C108856","iconURL":"skin/IconButton_C4A545C0_D627_9B5D_41EA_15571C108856.png","data":{"name":"IconButton13821"},"class":"IconButton","verticalAlign":"middle","maxHeight":43,"width":42,"height":43,"maxWidth":42,"minHeight":1,"backgroundOpacity":0,"minWidth":1,"horizontalAlign":"center","propagateClick":false},{"enterPointingToHorizon":true,"id":"panorama_DCE731C5_D1CD_BBB8_41E0_51EA2E1E1BFB_camera","initialSequence":"this.sequence_DD7D6C7F_D1CD_6947_4182_F1BBD61ACD26","class":"PanoramaCamera","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"}},{"id":"panorama_DD34D7E5_D1BA_E778_41D3_4AB9F0B380F8_camera","enterPointingToHorizon":true,"class":"PanoramaCamera","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"}},{"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","arrowKeysAction":"translate","class":"PanoramaPlayer","touchControlMode":"drag_rotation","aaEnabled":true,"buttonCardboardView":"this.IconButton_C4A545C0_D627_9B5D_41EA_15571C108856"},{"id":"ThumbnailList_C4DC4D16_D63E_68E5_41E3_D786C9064CBE_playlist","items":[{"camera":"this.panorama_DCE731C5_D1CD_BBB8_41E0_51EA2E1E1BFB_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_DCE731C5_D1CD_BBB8_41E0_51EA2E1E1BFB","class":"PanoramaPlayListItem"},{"camera":"this.panorama_DD7A48AF_D1CD_A9C7_41E9_58391ADE2BC0_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_DD7A48AF_D1CD_A9C7_41E9_58391ADE2BC0","class":"PanoramaPlayListItem"},{"camera":"this.panorama_DD34D7E5_D1BA_E778_41D3_4AB9F0B380F8_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_DD34D7E5_D1BA_E778_41D3_4AB9F0B380F8","begin":"this.executeAudioAction([this.audio_C15A88C0_D1DA_A9B8_41E3_C72150EAD281],'play',null,true,false,false)"}],"class":"PlayList"},{"selectedBackgroundColor":"#202020","id":"Menu_C298A27E_D626_9922_41D1_D929416EE3C3","label":trans('Menu_C298A27E_D626_9922_41D1_D929416EE3C3.label'),"fontFamily":"Arial","backgroundColor":"#404040","class":"Menu","children":["this.MenuItem_C020590D_D63B_A8E6_41C2_82CB49D0BE1B","this.MenuItem_C020290D_D63B_A8E6_41D5_166038BE1E33","this.MenuItem_C020490D_D63B_A8E6_41DB_2D4C6D6E8C21"],"rollOverOpacity":0.8,"distance":2,"selectedFontColor":"#FFFFFF","fontColor":"#FFFFFF","rollOverBackgroundColor":"#000000","opacity":0.4,"rollOverFontColor":"#FFFFFF"},{"id":"HTMLText_C6BCF012_D61E_78E2_41DA_1FF9419E11EC","backgroundColor":["#FFFFFF","#CCCCCC"],"left":"2.04%","shadowColor":"#000000","data":{"name":"HTMLText53815"},"paddingLeft":20,"paddingTop":20,"paddingBottom":10,"paddingRight":20,"scrollBarMargin":2,"backgroundColorRatios":[0.7254901960784313,1],"class":"HTMLText","propagateClick":false,"shadowOpacity":0.19,"top":"5.49%","borderColor":"#000000","shadowVerticalLength":2,"scrollBarColor":"#000000","width":"33.114%","shadowSpread":1,"height":"14.707%","minHeight":1,"shadow":true,"html":trans('HTMLText_C6BCF012_D61E_78E2_41DA_1FF9419E11EC.html',null,{'title':regTextVar('HTMLText_C6BCF012_D61E_78E2_41DA_1FF9419E11EC.html', 'title')}),"backgroundOpacity":0.91,"minWidth":1,"borderSize":3,"shadowBlurRadius":7,"shadowHorizontalLength":2},{"id":"audio_C15A88C0_D1DA_A9B8_41E3_C72150EAD281","class":"MediaAudio","data":{"label":"mixkit-retro-game-emergency-alarm-1000"},"audio":"this.audiores_DE31E3E9_D1DB_7F4B_41E7_86BC5016B367","autoplay":true},{"id":"Container_C5184B71_D63A_AF3F_4190_8F3BD0645FE3","backgroundColor":["#FFFFFF","#FFFFFF"],"data":{"name":"Container11494"},"scrollBarMargin":0,"backgroundColorRatios":[0,1],"class":"Container","layout":"absolute","gap":10,"overflow":"scroll","scrollBarColor":"#000000","width":50,"height":50,"scrollBarWidth":0,"minHeight":20,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_C2D400DD_D63B_9966_419D_1DF1FF13D350, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_C2D310DD_D63B_9966_41DE_F4C3554D1115, 'hideEffect', false)}.bind(this); if(!this.ThumbnailList_C4DC4D16_D63E_68E5_41E3_D786C9064CBE.get('visible')){ visibleFunc(this.ThumbnailList_C4DC4D16_D63E_68E5_41E3_D786C9064CBE) } else { invisibleFunc(this.ThumbnailList_C4DC4D16_D63E_68E5_41E3_D786C9064CBE) }","backgroundOpacity":0.3,"minWidth":20,"borderRadius":46,"propagateClick":false},{"id":"mainPlayList","items":[{"camera":"this.panorama_DCE731C5_D1CD_BBB8_41E0_51EA2E1E1BFB_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_DCE731C5_D1CD_BBB8_41E0_51EA2E1E1BFB","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_DD7A48AF_D1CD_A9C7_41E9_58391ADE2BC0_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_DD7A48AF_D1CD_A9C7_41E9_58391ADE2BC0","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"camera":"this.panorama_DD34D7E5_D1BA_E778_41D3_4AB9F0B380F8_camera","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_DD34D7E5_D1BA_E778_41D3_4AB9F0B380F8","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)"}],"class":"PlayList"},{"id":"effect_C2D400DD_D63B_9966_419D_1DF1FF13D350","duration":500,"class":"FadeInEffect"},{"id":"Container_C2AC6992_D625_ABFD_41E6_7B48F563766C","backgroundColor":["#FFFFFF","#FFFFFF"],"right":"0%","data":{"name":"Container12862"},"scrollBarMargin":2,"backgroundColorRatios":[0,1],"class":"Container","verticalAlign":"middle","top":"0%","layout":"vertical","gap":10,"overflow":"scroll","scrollBarColor":"#000000","width":"7.496%","height":"19.342%","minHeight":20,"backgroundOpacity":0.3,"children":["this.Container_C5184B71_D63A_AF3F_4190_8F3BD0645FE3","this.IconButton_C4A545C0_D627_9B5D_41EA_15571C108856"],"minWidth":20,"propagateClick":false,"horizontalAlign":"center"},{"id":"effect_C2D310DD_D63B_9966_41DE_F4C3554D1115","duration":500,"class":"FadeOutEffect"},{"id":"ThumbnailList_C4DC4D16_D63E_68E5_41E3_D786C9064CBE","backgroundColor":["#000000"],"left":"32.45%","itemThumbnailShadowSpread":1,"paddingLeft":20,"paddingTop":10,"data":{"name":"ThumbnailList35762"},"itemLabelFontFamily":"Arial","itemPaddingRight":3,"itemThumbnailHeight":75,"paddingBottom":10,"itemThumbnailOpacity":1,"paddingRight":20,"itemThumbnailShadowOpacity":0.27,"itemLabelGap":8,"backgroundColorRatios":[0],"itemThumbnailBorderRadius":5,"itemBackgroundColorRatios":[],"layout":"horizontal","rollOverItemLabelFontWeight":"bold","itemLabelFontSize":14,"itemThumbnailShadowBlurRadius":8,"itemThumbnailWidth":75,"itemBackgroundOpacity":0,"itemPaddingBottom":3,"width":"34.97%","selectedItemLabelFontColor":"#FFCC00","scrollBarColor":"#FFFFFF","minHeight":20,"scrollBarMargin":2,"visible":false,"borderRadius":5,"minWidth":20,"itemBorderRadius":0,"itemThumbnailShadowColor":"#000000","itemLabelFontColor":"#FFFFFF","itemBackgroundColor":[],"class":"ThumbnailList","itemPaddingLeft":3,"itemLabelFontWeight":"normal","bottom":"9.16%","gap":13,"itemLabelTextDecoration":"none","itemThumbnailShadow":true,"rollOverItemBackgroundOpacity":0,"playList":"this.ThumbnailList_C4DC4D16_D63E_68E5_41E3_D786C9064CBE_playlist","itemBackgroundColorDirection":"vertical","backgroundOpacity":0.33,"itemLabelFontStyle":"normal","itemPaddingTop":3,"propagateClick":false,"itemThumbnailScaleMode":"fit_outside","selectedItemLabelFontWeight":"bold"},{"id":"panorama_DD7A48AF_D1CD_A9C7_41E9_58391ADE2BC0","hfovMax":130,"label":trans('panorama_DD7A48AF_D1CD_A9C7_41E9_58391ADE2BC0.label'),"vfov":161.29,"frames":[{"cube":{"levels":[{"height":3584,"colCount":42,"rowCount":7,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_DD7A48AF_D1CD_A9C7_41E9_58391ADE2BC0_0/{face}/0/{row}_{column}.jpg","width":21504},{"height":2048,"colCount":24,"rowCount":4,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_DD7A48AF_D1CD_A9C7_41E9_58391ADE2BC0_0/{face}/1/{row}_{column}.jpg","width":12288},{"height":1024,"colCount":12,"rowCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_DD7A48AF_D1CD_A9C7_41E9_58391ADE2BC0_0/{face}/2/{row}_{column}.jpg","width":6144},{"height":512,"colCount":6,"rowCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_DD7A48AF_D1CD_A9C7_41E9_58391ADE2BC0_0/{face}/3/{row}_{column}.jpg","width":3072},{"height":2048,"colCount":6,"rowCount":1,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","url":"media/panorama_DD7A48AF_D1CD_A9C7_41E9_58391ADE2BC0_0/{face}/vr2gen/0.jpg","width":12288}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_DD7A48AF_D1CD_A9C7_41E9_58391ADE2BC0_t.jpg","class":"CubicPanoramaFrame"}],"data":{"label":"pano 3"},"overlays":["this.overlay_C421F1FF_D61A_BB22_41E1_D5401CD724D2"],"hfov":360,"class":"Panorama","cardboardMenu":"this.Menu_C298A27E_D626_9922_41D1_D929416EE3C3","thumbnailUrl":"media/panorama_DD7A48AF_D1CD_A9C7_41E9_58391ADE2BC0_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_DD34D7E5_D1BA_E778_41D3_4AB9F0B380F8","yaw":30.86,"distance":13.35,"class":"AdjacentPanorama","data":{"overlayID":"overlay_C421F1FF_D61A_BB22_41E1_D5401CD724D2"},"select":"this.overlay_C421F1FF_D61A_BB22_41E1_D5401CD724D2.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"enterPointingToHorizon":true,"id":"panorama_DD7A48AF_D1CD_A9C7_41E9_58391ADE2BC0_camera","initialSequence":"this.sequence_DD7A8C80_D1CD_69B9_4183_C594C3F0A628","class":"PanoramaCamera","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"}},{"id":"MainViewer","toolTipPaddingTop":4,"playbackBarHeadShadowColor":"#000000","subtitlesFontFamily":"Arial","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowOpacity":0.7,"data":{"name":"Main Viewer"},"toolTipPaddingRight":6,"subtitlesTextShadowVerticalLength":1,"playbackBarBorderColor":"#FFFFFF","subtitlesGap":0,"subtitlesBackgroundColor":"#000000","playbackBarBottom":5,"toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundOpacity":1,"width":"100%","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarRight":0,"subtitlesTextShadowOpacity":1,"height":"100%","vrPointerSelectionTime":2000,"minHeight":50,"vrPointerSelectionColor":"#FF6600","subtitlesFontColor":"#FFFFFF","minWidth":100,"progressBackgroundColorRatios":[0],"playbackBarBorderRadius":0,"playbackBarHeadBorderRadius":0,"progressRight":"33%","progressOpacity":0.7,"playbackBarProgressBorderRadius":0,"toolTipFontSize":"1.11vmin","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"toolTipFontColor":"#606060","progressBarBorderColor":"#000000","toolTipPaddingBottom":4,"toolTipPaddingLeft":6,"toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderColor":"#000000","progressBorderColor":"#000000","class":"ViewerArea","subtitlesBottom":50,"progressBarBackgroundColor":["#3399FF"],"vrPointerColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBorderSize":0,"progressBackgroundColor":["#000000"],"subtitlesTop":0,"playbackBarHeadShadowBlurRadius":3,"top":0,"playbackBarHeight":10,"toolTipShadowColor":"#333138","progressBottom":10,"subtitlesTextShadowColor":"#000000","progressHeight":2,"subtitlesFontSize":"3vmin","surfaceReticleColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","toolTipTextShadowColor":"#000000","subtitlesBackgroundOpacity":0.2,"progressBorderSize":0,"progressBarBorderSize":0,"playbackBarHeadShadow":true,"progressBarBorderRadius":2,"playbackBarHeadWidth":6,"subtitlesBorderColor":"#FFFFFF","doubleClickAction":"none","playbackBarBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarLeft":0,"transitionMode":"fade_out_fade_in","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderSize":0,"progressBorderRadius":2,"toolTipFontFamily":"Arial","left":0,"playbackBarBackgroundColorDirection":"vertical","progressLeft":"33%","firstTransitionDuration":0,"propagateClick":false,"playbackBarHeadHeight":15},{"id":"panorama_DD34D7E5_D1BA_E778_41D3_4AB9F0B380F8","hfovMax":130,"label":trans('panorama_DD34D7E5_D1BA_E778_41D3_4AB9F0B380F8.label'),"frames":[{"cube":{"levels":[{"height":3584,"colCount":42,"rowCount":7,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_DD34D7E5_D1BA_E778_41D3_4AB9F0B380F8_0/{face}/0/{row}_{column}.jpg","width":21504},{"height":2048,"colCount":24,"rowCount":4,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_DD34D7E5_D1BA_E778_41D3_4AB9F0B380F8_0/{face}/1/{row}_{column}.jpg","width":12288},{"height":1024,"colCount":12,"rowCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_DD34D7E5_D1BA_E778_41D3_4AB9F0B380F8_0/{face}/2/{row}_{column}.jpg","width":6144},{"height":512,"colCount":6,"rowCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_DD34D7E5_D1BA_E778_41D3_4AB9F0B380F8_0/{face}/3/{row}_{column}.jpg","width":3072},{"height":2048,"colCount":6,"rowCount":1,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","url":"media/panorama_DD34D7E5_D1BA_E778_41D3_4AB9F0B380F8_0/{face}/vr2gen/0.jpg","width":12288}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_DD34D7E5_D1BA_E778_41D3_4AB9F0B380F8_t.jpg","class":"CubicPanoramaFrame"}],"data":{"label":"pano 1"},"vfov":152.15,"overlays":["this.overlay_C1F7C291_D2C7_59DB_41BA_174FB5680BDE","this.overlay_C1A3411F_D2CA_B8C8_41E7_1DBC5FF01662"],"hfov":360,"class":"Panorama","cardboardMenu":"this.Menu_C298A27E_D626_9922_41D1_D929416EE3C3","thumbnailUrl":"media/panorama_DD34D7E5_D1BA_E778_41D3_4AB9F0B380F8_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_DCE731C5_D1CD_BBB8_41E0_51EA2E1E1BFB","yaw":6.65,"distance":100,"class":"AdjacentPanorama","data":{"overlayID":"overlay_C1F7C291_D2C7_59DB_41BA_174FB5680BDE"},"select":"this.overlay_C1F7C291_D2C7_59DB_41BA_174FB5680BDE.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"id":"panorama_DCE731C5_D1CD_BBB8_41E0_51EA2E1E1BFB","hfovMax":130,"label":trans('panorama_DCE731C5_D1CD_BBB8_41E0_51EA2E1E1BFB.label'),"vfov":163.4,"frames":[{"cube":{"levels":[{"height":1536,"colCount":18,"rowCount":3,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_DCE731C5_D1CD_BBB8_41E0_51EA2E1E1BFB_0/{face}/0/{row}_{column}.jpg","width":9216},{"height":1024,"colCount":12,"rowCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_DCE731C5_D1CD_BBB8_41E0_51EA2E1E1BFB_0/{face}/1/{row}_{column}.jpg","width":6144},{"height":512,"colCount":6,"rowCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_DCE731C5_D1CD_BBB8_41E0_51EA2E1E1BFB_0/{face}/2/{row}_{column}.jpg","width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_DCE731C5_D1CD_BBB8_41E0_51EA2E1E1BFB_t.jpg","class":"CubicPanoramaFrame"}],"data":{"label":"pano 2"},"overlays":["this.overlay_C78E96B1_D61B_993F_41E2_50375893235F"],"hfov":360,"hfovMin":"150%","class":"Panorama","cardboardMenu":"this.Menu_C298A27E_D626_9922_41D1_D929416EE3C3","thumbnailUrl":"media/panorama_DCE731C5_D1CD_BBB8_41E0_51EA2E1E1BFB_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_DD7A48AF_D1CD_A9C7_41E9_58391ADE2BC0","yaw":58.91,"distance":2.25,"class":"AdjacentPanorama","data":{"overlayID":"overlay_C78E96B1_D61B_993F_41E2_50375893235F"},"select":"this.overlay_C78E96B1_D61B_993F_41E2_50375893235F.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"id":"sequence_DD7D6C7F_D1CD_6947_4182_F1BBD61ACD26","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}]},{"id":"MenuItem_C020590D_D63B_A8E6_41C2_82CB49D0BE1B","label":trans('MenuItem_C020590D_D63B_A8E6_41C2_82CB49D0BE1B.label'),"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","class":"MenuItem"},{"id":"MenuItem_C020290D_D63B_A8E6_41D5_166038BE1E33","label":trans('MenuItem_C020290D_D63B_A8E6_41D5_166038BE1E33.label'),"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","class":"MenuItem"},{"id":"MenuItem_C020490D_D63B_A8E6_41DB_2D4C6D6E8C21","label":trans('MenuItem_C020490D_D63B_A8E6_41DB_2D4C6D6E8C21.label'),"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","class":"MenuItem"},{"class":"AudioResource","id":"audiores_DE31E3E9_D1DB_7F4B_41E7_86BC5016B367","mp3Url":trans('audiores_DE31E3E9_D1DB_7F4B_41E7_86BC5016B367.mp3Url')},{"id":"overlay_C421F1FF_D61A_BB22_41E1_D5401CD724D2","class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"distance":50,"class":"HotspotPanoramaOverlayImage","vfov":10.59,"scaleMode":"fit_inside","yaw":30.86,"data":{"label":"Arrow Black Up"},"image":"this.res_C42700C5_D625_B966_41EA_B4E9E0581E35","hfov":10.5,"pitch":-7.25}],"maps":[],"data":{"label":"Arrow Black Up","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_C7A80298_D61A_B9ED_41E5_972B429A5E79"],"enabledInCardboard":true},{"id":"sequence_DD7A8C80_D1CD_69B9_4183_C594C3F0A628","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}]},{"id":"overlay_C1F7C291_D2C7_59DB_41BA_174FB5680BDE","class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"distance":50,"class":"HotspotPanoramaOverlayImage","vfov":10.5,"scaleMode":"fit_inside","yaw":6.65,"data":{"label":"Image"},"image":"this.res_C0F2520A_D2C7_B8C8_41E8_C23F1E9B224E","hfov":10.5,"pitch":-0.67}],"maps":[],"data":{"label":"Image","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_C18B7293_D2C7_59DF_41E9_74CD30A49C8F"],"enabledInCardboard":true},{"id":"overlay_C1A3411F_D2CA_B8C8_41E7_1DBC5FF01662","enabled":false,"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_C1A3C11E_D2CA_B8C8_41C1_19BCF3900173"],"maps":[],"data":{"label":"Text"},"areas":["this.HotspotPanoramaOverlayArea_C1A1C123_D2CA_B8F8_41E6_2F7B665BF180"],"enabledInCardboard":true},{"id":"overlay_C78E96B1_D61B_993F_41E2_50375893235F","class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"distance":50,"class":"HotspotPanoramaOverlayImage","roll":-16.53,"pitch":-37.07,"vfov":11.9,"yaw":58.91,"data":{"label":"Arrow Black Up"},"image":"this.res_C42700C5_D625_B966_41EA_B4E9E0581E35","hfov":12.37,"scaleMode":"fit_inside"}],"maps":[],"data":{"label":"Arrow Black Up","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_C702E737_D61B_A722_41BA_5925A8515279"],"enabledInCardboard":true},{"id":"res_C42700C5_D625_B966_41EA_B4E9E0581E35","levels":[{"height":119,"class":"ImageResourceLevel","url":"media/res_C42700C5_D625_B966_41EA_B4E9E0581E35_0.png","width":118}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_C7A80298_D61A_B9ED_41E5_972B429A5E79","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"res_C0F2520A_D2C7_B8C8_41E8_C23F1E9B224E","levels":[{"height":119,"class":"ImageResourceLevel","url":"media/res_C0F2520A_D2C7_B8C8_41E8_C23F1E9B224E_0.png","width":119}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_C18B7293_D2C7_59DF_41E9_74CD30A49C8F","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"HotspotPanoramaOverlayTextImage_C1A3C11E_D2CA_B8C8_41C1_19BCF3900173","vfov":4.78,"data":{"label":"Text"},"hfov":41.94,"distance":50,"class":"HotspotPanoramaOverlayImage","pitch":-1.34,"yaw":35.78,"image":{"levels":["this.imlevel_C06FECDF_D2CA_E948_41CF_E49D03683744"],"class":"ImageResource"}},{"id":"HotspotPanoramaOverlayArea_C1A1C123_D2CA_B8F8_41E6_2F7B665BF180","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_C702E737_D61B_A722_41BA_5925A8515279","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"imlevel_C06FECDF_D2CA_E948_41CF_E49D03683744","height":250.64,"class":"ImageResourceLevel","url":trans('imlevel_C06FECDF_D2CA_E948_41CF_E49D03683744.url'),"width":2302.56}],"backgroundPreloadEnabled":false,"layout":"absolute","gap":10,"scrollBarColor":"#000000","width":"100%","height":"100%","defaultVRPointer":"gaze","minHeight":0,"minWidth":0,"propagateClick":false,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_C4A545C0_D627_9B5D_41EA_15571C108856], 'cardboardAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_C4DC4D16_D63E_68E5_41E3_D786C9064CBE_playlist])"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.9.js.map
})();
//Generated with v2023.0.9, Mon May 1 2023