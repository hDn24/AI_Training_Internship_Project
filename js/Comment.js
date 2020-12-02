function addComment() {
	var comment = document.getElementById("comment").value
	var commentText = document.createTextNode(comment)
	var newComment = document.createElement("p")
	newComment.className = "user-comment"
	newComment.appendChild(commentText)
	document.getElementById("section-comment").appendChild(newComment)
	document.getElementById("comment").value = ""
};