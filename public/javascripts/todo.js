$(function () {
	$('#newform').on('submit', function () {
		$.post("/ingredient/new", $('#newform').serialize());

		var li = $('<li>' + $('#newinput').val() + '</li>')
		$('#todolist').append(li);

		return false;
	})
})