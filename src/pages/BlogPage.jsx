import styles from "./IndexPage.module.scss";

const BlogPage = () => {

    // 에러 페이지 테스트를 위한 강제 에러 발생
    /*useEffect(() => {
        throw new Error('알 수 없는 에러가 발생했습니다.');
    }, [])*/

    return (
        <>
            <h1 className={styles.title}>
               blog 페이지 입니다.
            </h1>
        </>
    );
};

export default BlogPage;