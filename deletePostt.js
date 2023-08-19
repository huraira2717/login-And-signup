import { doc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { db, loadBlogPosts } from "./dashboard";


async function deletePostt(postId) {
    try {
        await deleteDoc(doc(db, "posts", postId));
        alert("Blog post deleted successfully.");
        loadBlogPosts();
    } catch (error) {
        console.error("Error deleting blog post:", error);
        alert("An error occurred while deleting the blog post.");
    }
}
