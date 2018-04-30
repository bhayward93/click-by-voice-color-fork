$(document).ready(function() {
 //    $("#color_dropdown").change(function() {
 //    	var inputValue = $("#changeLinkColor").val();
	// 	changeLinkColor(this.val, true);
	// 	return false;
	// });

    $(".CBV_popup_form").on("submit", function() {
		var input_text = $("#hint_number").val();
		doUserCommand(input_text, true);
    });
});
