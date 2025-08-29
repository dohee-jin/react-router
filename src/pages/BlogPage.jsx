import {posts} from "../dummy-data/dummy-post.js";
import PostCard from "../components/PostCard.jsx";
import styles from "./BlogPage.module.scss"

const BlogPage = () => {

    // 에러 페이지 테스트를 위한 강제 에러 발생
    /*useEffect(() => {
        throw new Error('알 수 없는 에러가 발생했습니다.');
    }, [])*/

    return (
        <>
            <div className={styles.blog}>
                <div className={styles.grid}>
                    {posts.map(post =>
                        <PostCard key={post.id} post={post} />
                    )}
                </div>
            </div>
        </>
    );
};

export default BlogPage;