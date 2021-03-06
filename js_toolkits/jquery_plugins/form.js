jQuery(function() {
	jQuery('.error').hide();
	jQuery('input.text-input').css({backgroundColor:"#FFFFFF"});
	jQuery('input.text-input').focus(function(){
		jQuery(this).css({backgroundColor:"#FFDDAA"});
		jQuery(this).width = 600;
		//jQuery(this).animate({ width:"600px"}, 1000); // enlarge width
	});
	jQuery('input.text-input').blur(function(){
		jQuery(this).css({backgroundColor:"#FFFFFF"});
		jQuery(this).width = 200;
		//jQuery(this).animate({ width:"200px"}, 1000); // enlarge width
	});
	jQuery(".button").click(function() {
		// validate and process form
		// first hide any error messages
		jQuery('.error').hide();
		var name = jQuery("input#name").val();
		if (name == "") {
			jQuery("label#name_error").show();
			jQuery("input#name").focus();
			return false;
		}
		var email = jQuery("input#email").val();
		if (email == "") {
			jQuery("label#email_error").show();
			jQuery("input#email").focus();
			return false;
		}
		var phone = jQuery("input#phone").val();
		if (phone == "") {
			jQuery("label#phone_error").show();
			jQuery("input#phone").focus();
			return false;
		}
		var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone;
		//alert (dataString);return false;
		jQuery.ajax({
			type: "POST",
			url: "process.php",
			data: dataString,
			error: function() {
				jQuery('#message').html("error");
			},
			success: function() {
				jQuery('#message').html("ok");
			}
		});
		return false;
	});
});
jQuery(document).ready(function(){
	jQuery("input#name").select().focus();
});
