import Image from 'next/image'

interface Props {
  name: string
  placeholder: string
  type: string
  rightIcon?: string
  leftIcon?: string
  onPressLeftIcon?: () => void
}

const Input: React.FC<Props> = ({
  name,
  placeholder,
  type,
  rightIcon,
  leftIcon,
  onPressLeftIcon,
}) => {
  return (
    <div className="flex flex-row md:w-80 bg-input-color rounded-lg border border-input-border border-opacity-10 outline-none hover:shadow-lg show-shadow my-5">
      {rightIcon && (
        <Image src={rightIcon} alt="" className="relative w-5 ms-2" />
      )}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="bg-transparent outline-none flex-1 px-2 py-2 peer-[.show-shadow]:active:shadow-lg"
      />
      {leftIcon && (
        <Image src={leftIcon} alt="" className="relative w-5 me-2" />
      )}
    </div>
  )
}

export default Input
