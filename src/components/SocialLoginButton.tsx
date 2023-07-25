import Image from 'next/image'

interface Props {
  socialIcon: string
  title: string
}

const SocialAuthButton: React.FC<Props> = ({ socialIcon, title }) => {
  return (
    <div className="flex justify-center items-center border-2 border-light-grey rounded-full px-20 py-2 my-4 cursor-pointer">
      {socialIcon && (
        <Image src={socialIcon} alt="social-icon" className="w-7 me-2" />
      )}
      {title && (
        <button className="border-0 outline-none text-sm">{title}</button>
      )}
    </div>
  )
}

export default SocialAuthButton
