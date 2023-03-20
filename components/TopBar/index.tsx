import ThemeSwitch from '../ThemeSwitch';

function TopBar() {
  return (
    <div className="w-full p-2 bg-green-500">
      {/*
      최대 폭이 100%이고 배경이 초록색이면서 패딩이 0.5rem
      */}
      <div className="w-10/12 m-auto">
        {/*
         최대 폭이 75%면서 가운데로 정렬 - 83.333333%
        */}
        <ThemeSwitch />
      </div>
    </div>
  );
}

export default TopBar;