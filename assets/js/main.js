/* var categoryChoices = document.querySelector(".categoryChoices");

categoryChoices.addEventListener("click", () => {
	document.querySelector(
		".container1 input:checked ~ .checkmark"
	).checked = true;
});
 */

$(document).ready(function () {
	$(".categoryChoices").click(function () {
		$(".categoryChoices").css({
			backgroundColor: "#000",
			color: "#fff",
		});
	});
});
