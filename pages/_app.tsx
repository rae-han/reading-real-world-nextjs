// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import 'tailwindcss/tailwind.css'
import TopBar from "@/components/TopBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-gray-900 bg-gray-50 w-full min-h-screen">
        {/*
          dark:bg-gray-900 - 다크 테마를 사용할때의 배경 색
          bg-gray-50  - 기본 배경 색
          w-full - full-width, 가로 폭을 100%로 한다.
          min-h-screen 최소 높이 속성값을 전체 화면의 높이 값으로 지정, min-height: 100vh와 같다.
        */}
        <TopBar />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )

}
