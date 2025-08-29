import React from 'react';
import styles from './BlogFilter.module.scss';
import { categories } from "../dummy-data/dummy-post.js";
import {useSearchParams} from "react-router-dom";

const BlogFilter = () => {

    // 쿼리 스트링 생성 기능
    const [searchParams, setSearchParams] = useSearchParams()

    // 카테고리 옵션 선택 이벤트
    const handlerCategoryChange = e => {
        // 쿼리스트링으로 ? 뒤에 ?category=xxx
        setSearchParams((prev) => {
            prev.set('category', e.target.value);
            return prev
        })
    }

    const handlerSortChange = e => {
        setSearchParams((prev) => {
            prev.set('sort', e.target.value);
            return prev;
        })
    }

    const handlerSearchInput = e => {

        setSearchParams((prev) => {
            prev.set('search', e.target.value);
            return prev;
        })
    }

    return (
        <div className={styles.filter}>
            <select onChange={handlerCategoryChange} value={searchParams.get('category')}>
                {
                    categories.map(ct => <option key={ct.id} value={ct.id}>{ct.name}</option>)
                }
            </select>

            <select onChange={handlerSortChange} value={searchParams.get('sort')}>
                <option value='latest'>최신순</option>
                <option value='oldest'>오래된순</option>
            </select>

            <input
                type='text'
                placeholder='검색어를 입력하세요'
                onInput={handlerSearchInput}
            />
        </div>
    );
};

export default BlogFilter;