$.alertModal = function(message, title){
	/*
	var html = '<div class="modal hide">'
	 + '<div class="modal-header"><a href="#" class="close" data-dismiss="modal">&times;</a><h3>' + (title || '') +'</h3></div>'
	 + '<div class="modal-body"><p>' + message + '</p></div>'
	 + '<div class="modal-footer"><a href="#" class="btn primary" data-dismiss="modal">确定</a></div>'
	+'</div>';
	return $(html).modal({keyboard:true, show:true});
	*/
};

$.alertMessage = function(message, content){
	var html = '<div class="alert alert-success fade in">'
		+'<button type="button" class="close" data-dismiss="alert">×</button>'
		+'<strong>'+ message + '</strong>' + '<p>' + content + '</p>' + '</div>';
	$('#alertMsg').html(html);
};
$.checkResponse = function(successCallback, errorCallback){
	return function(rsp, result, xhr){
		if (rsp === null)
			Callbacks.alert(xhr.responseText);
		else if(typeof rsp == 'object'){
			switch(rsp.code){
				case 0:
					(successCallback || Callbacks.successAlert)(rsp, result, xhr);//return f.run(arguments);
					break;
				case 'INVALID':
				case 'ERROR':
				default: 
					(errorCallback || Callbacks.errorAlert)(rsp, result, xhr);
			}
		}
		else
			Callbacks.alert(rsp);
			//Callbacks.errorAlert(rsp);
	};
};

var Callbacks = window.Callbacks = {
		errorAlert:function(rsp, result, xhr){
			//alert(xhr.responseText);
			alert(rsp.errorMessage);
			//$.alertModal(rsp.errorMessage,'错误提示');
			//$.alertMessage('错误提示:', rsp.errorMessage);
		},
		successAlert:function(rsp, result, xhr){
			//alert(xhr.responseText);
			alert(rsp.response['message']);
		},
		successDoNothing:function(rsp, result, xhr){
			if(rsp.response['message'] != 'success')
				alert('no success');
		},
		alertMsg:function(rsp, result, xhr){
			$.alertMessage(rsp.response['message'],rsp.response['content']);
		},
		redirect:function(key) {
			return function(rsp, result){
				window.location = rsp.response[key];
			}
		},
		
		refresh:function(rsp, result) {
				window.location.reload(true);
		},
		
		buttonToggle:function(rsp, result){
			if(rsp.response['type'] == 'add'){
				if(rsp.response['message'] == 'success'){
					var pid = '#' + rsp.response['pid'];
					$(pid).find('.remove').show();
					$(pid).find('.add').hide();
				}
			}else if(rsp.response['type'] == 'remove'){
				if(rsp.response['message'] == 'success'){
					var pid = '#' + rsp.response['pid'];
					$(pid).find('.remove').hide();
					$(pid).find('.add').show();
				}
			}
		},
		
		participate:function(rsp, result){
			$('.js-participated').show();
			$('.js-not-participated').hide();
		}
	};

$.fn.freeze = function (){
	$.each($(this).find('button[type=submit]'), function(){this.disabled = true;});
	$.each(this.find('input, select, textarea'), function(){this.readOnly = true;});
};

$.fn.unfreeze = function(){
	$.each($(this).find('button[type=submit]'), function(){this.disabled = false;});
	$.each(this.find('input, select, textarea'), function(){this.readOnly = false;});
};

$.fn.ajaxsubmit = function(successCallback, errorCallback){//这个函数，适用于各种ajax方式提交请求的form，只要在form的属性中加入onsubmit=$(this).ajaxsubmit(event,回调函数名)就可以了。
	var form = this;
	$.ajax({
	url  : this.attr('action'),
    type: this.attr('method').toUpperCase(),
    data: this.serialize(),
    beforeSend: function(){
		form.freeze();
		//form.find('span.error-message').remove();
	},
	complete: function(){form.unfreeze();},
	success: $.checkResponse(successCallback, errorCallback)
  });
};


// post list card dom backgroud-color
$(function(){
	var color = ['#00AFF0','#F0A30A', '#16499A', '#60A917', '#00ABA9', '#CE352C', '#DC4FAD', '#6A00FF'];
	var card_list = $('#js-card-list .card-content');

	for (var i = 0; i <= card_list.length - 1; i++) {
		var c = i % 8;
		card_list[i].style.backgroundColor = color[c];
	}
});



