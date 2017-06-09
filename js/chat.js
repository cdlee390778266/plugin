
$(document).ready(function() {

    // Full featured editor
    $('#textarea').wysiwyg({
            classes: 'some-more-classes',
            // 'selection'|'top'|'top-selection'|'bottom'|'bottom-selection'
            toolbar: 'top-selection',
            buttons: {
                // Smiley plugin
                smilies: {
                    title: 'Smilies',
                    image: '\uf118', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    popup: function( $popup, $button ) {
                            var list_smilies = [
                                    '<img src="smiley/emo_01.gif" alt="" />',
                                    '<img src="smiley/emo_02.gif" alt="" />',
                                    '<img src="smiley/emo_03.gif" alt="" />',
                                    '<img src="smiley/emo_04.gif" alt="" />',
                                    '<img src="smiley/emo_05.gif" alt="" />',
                                    '<img src="smiley/emo_06.gif" alt="" />',
                                    '<img src="smiley/emo_07.gif" alt="" />',
                                    '<img src="smiley/emo_08.gif" alt="" />',
                                    '<img src="smiley/emo_09.gif" alt="" />',
                                    '<img src="smiley/emo_10.gif" alt="" />',
                                    '<img src="smiley/emo_11.gif" alt="" />',
                                    '<img src="smiley/emo_12.gif" alt="" />',
                                    '<img src="smiley/emo_13.gif" alt="" />',
                                    '<img src="smiley/emo_14.gif" alt="" />',
                                    '<img src="smiley/emo_15.gif" alt="" />',
                                    '<img src="smiley/emo_16.gif" alt="" />',
                                    '<img src="smiley/emo_17.gif" alt="" />',
                                    '<img src="smiley/emo_18.gif" alt="" />',
                                    '<img src="smiley/emo_19.gif" alt="" />',
                                    '<img src="smiley/emo_20.gif" alt="" />',
                                    '<img src="smiley/emo_21.gif" alt="" />',
                                    '<img src="smiley/emo_22.gif" alt="" />',
                                    '<img src="smiley/emo_23.gif" alt="" />',
                                    '<img src="smiley/emo_24.gif" alt="" />',
                                    '<img src="smiley/emo_25.gif" alt="" />',
                                    '<img src="smiley/emo_26.gif" alt="" />',
                                    '<img src="smiley/emo_27.gif" alt="" />',
                                    '<img src="smiley/emo_28.gif" alt="" />',
                                    '<img src="smiley/emo_29.gif" alt="" />',
                                    '<img src="smiley/emo_30.gif" alt="" />',
                                    '<img src="smiley/emo_31.gif" alt="" />',
                                    '<img src="smiley/emo_32.gif" alt="" />',
                                    '<img src="smiley/emo_33.gif" alt="" />',
                                    '<img src="smiley/emo_34.gif" alt="" />',
                                    '<img src="smiley/emo_35.gif" alt="" />',
                                    '<img src="smiley/emo_36.gif" alt="" />',
                                    '<img src="smiley/emo_37.gif" alt="" />',
                                    '<img src="smiley/emo_38.gif" alt="" />',
                                    '<img src="smiley/emo_39.gif" alt="" />',
                                    '<img src="smiley/emo_40.gif" alt="" />',
                                    '<img src="smiley/emo_41.gif" alt="" />',
                                    '<img src="smiley/emo_42.gif" alt="" />',
                                    '<img src="smiley/emo_43.gif" alt="" />',
                                    '<img src="smiley/emo_44.gif" alt="" />',
                                    '<img src="smiley/emo_45.gif" alt="" />',
                                    '<img src="smiley/emo_46.gif" alt="" />',
                                    '<img src="smiley/emo_47.gif" alt="" />',
                                    '<img src="smiley/emo_48.gif" alt="" />',
                                    '<img src="smiley/emo_49.gif" alt="" />',
                                    '<img src="smiley/emo_50.gif" alt="" />',
                                    '<img src="smiley/emo_51.gif" alt="" />',
                                    '<img src="smiley/emo_52.gif" alt="" />',
                                    '<img src="smiley/emo_53.gif" alt="" />',
                                    '<img src="smiley/emo_54.gif" alt="" />',
                                    '<img src="smiley/emo_55.gif" alt="" />',
                                    '<img src="smiley/emo_56.gif" alt="" />',
                                    '<img src="smiley/emo_57.gif" alt="" />',
                                    '<img src="smiley/emo_58.gif" alt="" />',
                                    '<img src="smiley/emo_59.gif" alt="" />',      
                            ];
                            var $smilies = $('<div/>').addClass('wysiwyg-toolbar-smilies')
                                                      .attr('unselectable','on');
                            $.each( list_smilies, function(index,smiley){
                                if( index != 0 )
                                    $smilies.append(' ');
                                var $image = $(smiley).attr('unselectable','on');
                                // Append smiley
                                var imagehtml = ' '+$('<div/>').append($image.clone()).html()+' ';
                                $image
                                    .css({ cursor: 'pointer' })
                                    .click(function(event){
                                        $('#textarea').wysiwyg('shell').insertHTML(imagehtml); // .closePopup(); - do not close the popup
                                    })
                                    .appendTo( $smilies );
                            });
                            var $container = $('#textarea').wysiwyg('container');
                            $smilies.css({ maxWidth: parseInt($container.width()*0.95)+'px' });
                            $popup.append( $smilies );
                            // Smilies do not close on click, so force the popup-position to cover the toolbar
                            var $toolbar = $button.parents( '.wysiwyg-toolbar' );
                            if( ! $toolbar.length ) // selection toolbar?
                                return ;
                            var left = 0,
                                top = 0,
                                node = $toolbar.get(0);
                            while( node )
                            {
                                left += node.offsetLeft;
                                top += node.offsetTop;
                                node = node.offsetParent;
                            }
                            left += parseInt( ($toolbar.outerWidth() - $popup.outerWidth()) / 2 );
                            if( $toolbar.hasClass('wysiwyg-toolbar-top') )
                                top -= $popup.height() - parseInt($button.outerHeight() * 1/4);
                            else
                                top += parseInt($button.outerHeight() * 3/4);
                            $popup.css({ left: left + 'px',
                                         top: top + 'px'
                                       });
                            // prevent applying position
                            return false;
                           }
                },
                insertimage: {
                    title: 'Insert image',
                    image: '\uf030', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    //showstatic: true,    // wanted on the toolbar
                    showselection: false    // wanted on selection
                },
            },
            // Submit-Button
            submit: {
                title: 'Submit',
                image: '\uf00c' // <img src="path/to/image.png" width="16" height="16" alt="" />
            },
            // Other properties
            dropfileclick: 'Drop image or click',
            maxImageSize: [600,200]
        })
        .change(function(){
            if( typeof console != 'undefined' )
                console.log( 'change' );
        })
        .focus(function(){
            if( typeof console != 'undefined' )
                console.log( 'focus' );
        })
        .blur(function(){
            if( typeof console != 'undefined' )
                console.log( 'blur' );
        });
    //wysiwygeditor.setHTML( '<html>' );

    function message() {
        var a = $.blinkTitle.show();
        setTimeout(function() {
            $.blinkTitle.clear(a)
        },
        8e3)
    }
    function e() {
        var e = new Date,
        f = "";
        f += e.getFullYear() + "-",
        f += e.getMonth() + 1 + "-",
        f += e.getDate() + "  ",
        f += e.getHours() + ":",
        f += e.getMinutes() + ":",
        f += e.getSeconds();
        var g = $("#textarea").val();
        var i = "<div class='message clearfix message-self'>"
              +     "<div class='user-logo'>"
              +         "<img src='" + b + "'/>" 
              +     "</div>"  
              +     "<div class='wrap-text'>" 
              +         "<div>" + g + "</div>" 
              +     "</div>" 
              +     "<div style='clear:both;'></div>" 
              + "</div>" 
              + "<div class='message clearfix'>" 
              +     "<div class='user-logo'>" 
              +         "<img src='" + c + "'/>" 
              +     "</div>" 
              +     "<div class='wrap-text'>" 
              +         "<h5 class='clearfix'>" + d + "</h5>" 
              +         "<div>" + g + "</div>" 
              +     "</div>" 
              +     "<div class='wrap-ri'>" 
              +         "<div clsss='clearfix'><span>" + f + "</span>"
                    "</div>" 
              + "</div>" 
              + "<div style='clear:both;'></div>";

        null != g && "" != g ? ($(".mes" + a).append(i), $(".chat01_content").scrollTop($(".mes" + a).height()), $("#textarea").val(""), message()) : alert("\u8bf7\u8f93\u5165\u804a\u5929\u5185\u5bb9!");
        $('.wysiwyg-editor').html('');

    }
    var a = 1,           
    b = "images/2015.jpg",  //管理员头像
    c = "images/2024.jpg",  //默认用户头像
    d = "\u738b\u65ed";
    $(".close_btn").click(function() {
        $(".chatBox").hide()
    }),
    $(".chat03_content li").mouseover(function() {
        $(this).addClass("hover").siblings().removeClass("hover")
    }).mouseout(function() {
        $(this).removeClass("hover").siblings().removeClass("hover")
    }),
    $(".chat03_content li").dblclick(function() {
        var b = $(this).index() + 1;
        a = b,
        c = $(this).find('img').attr('src'),
        d = $(this).find(".chat03_name").text(),
        $(".chat01_content").scrollTop(0),
        $(this).addClass("choosed").siblings().removeClass("choosed"),
        $(".talkTo a").text($(this).children(".chat03_name").text()),
        $(".mes" + b).show().siblings().hide();
        $(this).removeClass('active');
    }),
    $(".ctb01").mouseover(function() {
        $(".wl_faces_box").show()
    }).mouseout(function() {
        $(".wl_faces_box").hide()
    }),
    $(".wl_faces_box").mouseover(function() {
        $(".wl_faces_box").show()
    }).mouseout(function() {
        $(".wl_faces_box").hide()
    }),
    $(".wl_faces_close").click(function() {
        $(".wl_faces_box").hide()
    }),
    $(".wl_faces_main img").click(function() {
        var a = $(this).attr("src");
        $("#textarea").val($("#textarea").val() + "*#" + a.substr(a.indexOf("images/") + 7, 6) + "#*"),
        $("#textarea").focusEnd(),
        $(".wl_faces_box").hide()
    }),
    $(".chat02_bar img").click(function() {
        e()
    }),
    document.onkeydown = function(a) {
        var b = document.all ? window.event: a;
        return 13 == b.keyCode ? (e(), !1) : void 0
    },
    $.fn.setCursorPosition = function(a) {
        return 0 == this.lengh ? this: $(this).setSelection(a, a)
    },
    $.fn.setSelection = function(a, b) {
        if (0 == this.lengh) return this;
        if (input = this[0], input.createTextRange) {
            var c = input.createTextRange();
            c.collapse(!0),
            c.moveEnd("character", b),
            c.moveStart("character", a),
            c.select()
        } else input.setSelectionRange && (input.focus(), input.setSelectionRange(a, b));
        return this
    },
    $.fn.focusEnd = function() {
        this.setCursorPosition(this.val().length)
    }

    // 双击图片查看大图
    var index = 0;
    var sProportion = 600 / 400 ;
    
    var showBigImg = function($bigImg, $messageBox, direction) {
        var $imgs = $messageBox.find('.wrap-text img');
        $('.fa-angle-left, .fa-angle-right').addClass('disabled');
        if(!direction) {
            $('.bigImg-img').html('');
            $imgs.each(function(i, val) {
                if($(this).attr('bigimg') == 'true'){
                    $imgs.eq(i).attr('imgindex',i);
                    $('.bigImg-img').append($imgs.eq(i).clone().attr('imgindex',i));
                    $('.bigImg-img img:last-child').get(0).onload = function(){
                        var imgW = this.width;
                        var imgH = this.height;
                        var proportion = imgW / imgH;
                        if(imgW > $('.bigImg').width() || imgH > $('.bigImg').height()) {
                            if(proportion > sProportion) {
                                imgW = $('.bigImg').width();
                                imgH = imgW / proportion;
                            }else{
                                imgH = $('.bigImg').height();
                                imgW = imgH * proportion;
                            }
                        }

                        var top = ($('.bigImg').height() - imgH) / 2;
                        var left = ($('.bigImg').width() - imgW) / 2;
                        $(this).css({
                            width : imgW + 'px',
                            height : imgH + 'px',
                            top: top + 'px',
                            left: left + 'px'
                        });
                    }
                }
            });
            index = $('.bigImg-img img[imgindex="' + $bigImg.attr('imgindex') + '"]').index();
        }else {
            if(direction == 'prev'){
                index--;
            }else if(direction == 'next') {
                index++;
            }
        }

        if(index > 0){
            $('.fa-angle-left').removeClass('disabled');
        }

        if(index < $('.bigImg-img img').length - 1) {
            $('.fa-angle-right').removeClass('disabled');
        }

        $('.bigImg-img img').css('display','none');
        $('.bigImg-loading').hide();
        $('.bigImg-img img').eq(index).show();
        $('.bigImg-box , .bigImg').show();
    }

    $('body').delegate('.wrap-text img', 'dblclick', function(event) {
        if($(this).attr('bigimg') != 'true') return;
        var html = '';
        if(!$('body').find('.bigImg').length){
            html += '<div class="bigImg">'
                 +      '<div class="bigImg-mask"></div>'
                 +      '<div class="bigImg-box">'
                 +          '<div class="bigImg-head"><i class="fa fa-close"></i></div>'
                 +          '<div class="bigImg-body">'
                 +              '<div class="bigImg-img"></div>'
                 +              '<div class="bigImg-menu">'
                 +                   '<span><i class="fa fa-angle-left"></i></span>'
                 +                   '<span><i class="fa fa-angle-right"></i></span>'
                 +               '</div>'
                 +          '</div>'
                 +      '</div>'
                 +      '<div class="bigImg-loading"><i class="fa fa-spinner fa-spin"></i></div>'
                 +  '</div>'
            $('body').append(html);

            $('.bigImg-menu .fa-angle-left').click(function(event) {
                if($('.fa-angle-left').hasClass('disabled')) return;
                showBigImg('', $activeMessage, 'prev');
            });

            $('.bigImg-menu .fa-angle-right').click(function(event) {
                if($('.fa-angle-right').hasClass('disabled')) return;
                showBigImg('', $activeMessage, 'next');
            });

            $(document).click(function(event) {
                $('.bigImg').hide();
            });

            $('.bigImg-head i').click(function(event) {
                $('.bigImg').hide();
            });

            $('.bigImg').click(function(event) {
                event.stopPropagation();
            });
        }

        $activeBigImg = $(this);
        $activeMessage = $(this).parents('.message_box');
        showBigImg($activeBigImg, $activeMessage);
    });

    //查看更多历史消息
    $('.message_box').attr('flag','true');
    $('.chat01_content').scroll(function(event) {
        var $messageBox = '';
        $('.message_box').each(function(index, val) {
             if($(this).css('display') == 'block'){
                $messageBox = $(this);
                return false;
             }
        });

        if($messageBox.find('.loading-more').length && $messageBox.attr('flag') == 'true' && $('.chat01_content').scrollTop() <= 0) {
            $messageBox.attr('flag', 'false');
            $('.loading-more span').hide();
            $('.loading-more i').show();
            $.ajax({
                url: 'chat.html',
                type: 'post',
                data: {}
            })
            .done(function(data) {
                var html = '';
                //if(data){
                if(1){
                    //模拟数据
                     html += "<div class='message clearfix message-self'>"
                          +      "<div class='user-logo'>"
                          +          "<img src='" + b + "'/>" 
                          +      "</div>"  
                          +      "<div class='wrap-text'>" 
                          +          "<div>" + 'test' + "</div>" 
                          +      "</div>" 
                          +      "<div style='clear:both;'></div>" 
                          +  "</div>" 
                          +  "<div class='message clearfix'>" 
                          +      "<div class='user-logo'>" 
                          +          "<img src='" + c + "'/>" 
                          +      "</div>" 
                          +      "<div class='wrap-text'>" 
                          +          "<h5 class='clearfix'>" + d + "</h5>" 
                          +          "<div>" + 'test' + "</div>" 
                          +      "</div>" 
                          +      "<div class='wrap-ri'>" 
                          +          "<div clsss='clearfix'><span>" + '2017-6-8 15:8:32' + "</span>"
                                "</div>" 
                          +  "</div>" 
                          +  "<div style='clear:both;'></div>"
                    $messageBox.find('.loading-more').after(html);
                    $messageBox.attr('flag', 'true');
                }else{
                    $('.loading-more span').html('没有更多历史数据了');
                }
                $('.loading-more span').show();
                $('.loading-more i').hide();
            })
            .fail(function() {
                $messageBox.attr('flag', 'true');
                alert('获取历史数据失败！');
            })
            
        }
    });
}),
function(a) {
    a.extend({
        blinkTitle: {
            show: function() {
                var a = 0,
                b = document.title;
                if ( - 1 == document.title.indexOf("\u3010")) var c = setInterval(function() {
                    a++,
                    3 == a && (a = 1),
                    1 == a && (document.title = "\u3010\u3000\u3000\u3000\u3011" + b),
                    2 == a && (document.title = "\u3010\u65b0\u6d88\u606f\u3011" + b)
                },
                500);
                return [c, b]
            },
            clear: function(a) {
                a && (clearInterval(a[0]), document.title = a[1])
            }
        }
    })
} (jQuery);