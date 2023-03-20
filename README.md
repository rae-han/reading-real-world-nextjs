…or create a new repository on the command line
echo "# reading-real-world-nextjs" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/rae-han/reading-real-world-nextjs.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/rae-han/reading-real-world-nextjs.git
git branch -M main
git push -u origin main

# for TailWind
npm i -D autoprefixer postcss tailwindcss

npm i next-themes
- TailwindCSS는 자바스크립트를 제공하지 않기 때문에 테마 변경에 관련된 로직을 직접 만들어야한다. 이때 next-themes 라이브러리를 사용하면 좀 더 쉽게 구현 가능하다.
 
npx tailwindcss init -p
- tailwind.config.js: 사용하지 않는 CSS를 제거하거나 TailwindCSS 테마, 어두운 테마 플러그인 등을 설정할 때 사용
- postcss.config.js: TailwindCSS는 PostCSS를 사용하며 이때 postcss.config.js 파일의 설정을 사용한다. 필요한 경우 이 파일을 수정하여 설정을 변경할 수 있다.

