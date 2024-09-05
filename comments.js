// Initialize Firebase
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

// Function to post a comment
function postComment() {
    const commentText = document.getElementById("comment-input").value;
    if (commentText.trim() === "") return alert("Please enter a comment!");

    const commentId = db.ref().child('comments').push().key;
    const commentData = {
        text: commentText,
        likes: 0
    };

    db.ref('comments/' + commentId).set(commentData);
    document.getElementById("comment-input").value = ""; // Clear input field
}

// Function to like a comment
function likeComment(commentId) {
    const likesRef = db.ref('comments/' + commentId + '/likes');
    likesRef.transaction(likes => (likes || 0) + 1);
}

// Function to display comments
function displayComments() {
    const commentsList = document.getElementById("comments-list");
    db.ref('comments').orderByChild('likes').limitToLast(10).on('value', (snapshot) => {
        commentsList.innerHTML = ""; // Clear previous comments
        snapshot.forEach((childSnapshot) => {
            const comment = childSnapshot.val();
            const commentItem = document.createElement("li");
            commentItem.className = "list-group-item d-flex justify-content-between align-items-center";
            commentItem.innerHTML = `
                ${comment.text}
                <span>
                    <button class="btn btn-success btn-sm" onclick="likeComment('${childSnapshot.key}')">Like (${comment.likes})</button>
                </span>
            `;
            commentsList.prepend(commentItem);
        });
    });
}

// Display comments on page load
window.onload = displayComments;
