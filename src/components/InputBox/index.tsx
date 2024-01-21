'use client';

interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: React.CSSProperties;
}

const InputBox = ({ containerStyle, ...props }: InputBoxProps) => {
  return (
    <div
      style={containerStyle}
      className="flex justify-between pb-[12px] w-full text-lg border-b-2 border-[#f1f1f1]"
    >
      <input {...props} placeholder="이름으로 검색하기" />
      <span className="cursor-pointer">🔍</span>
    </div>
  );
};

export default InputBox;
