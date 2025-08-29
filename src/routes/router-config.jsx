// 라우터 설정
import IndexPage from "../pages/IndexPage.jsx";
import BlogPage from "../pages/BlogPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        // children -> Layout의 Outlet 부분을 뭘로 바꿀지를 설정
        children: [
            {
                index: true,
                element: <IndexPage />
            },
            {
                path: 'blog',
                element: <BlogPage />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
        ]
    },
]);