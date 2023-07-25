import Input from '@/components/Input'
import Image from 'next/image'
import assets from '@/assets/assets'
import SmallButton from '@/components/SmallButton'
import SocialAuthButton from '@/components/SocialLoginButton'

const Login = () => {
  return (
    <div className="h-screen grid md:grid-cols-2">
      <section className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-3xl font-bold my-4">Welcome Back 👋</h1>
          <span className="inline-block text-base font-normal mb-4">
            Connect with <strong>Engineers</strong> with one step!
          </span>
          <Input
            name="email"
            placeholder="Email"
            type="email"
            rightIcon={assets.icons.user}
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            rightIcon={assets.icons.lock}
            // leftIcon={}
          />

          <SmallButton title="Login" />

          <SocialAuthButton
            socialIcon={assets.icons.google}
            title="Login with Google"
          />

          <SocialAuthButton
            socialIcon={assets.icons.facebook}
            title="Login with Facebook"
          />
        </div>
      </section>
      <section className="bg-login-background-image flex justify-center items-center overflow-hidden md:h-auto h-0">
        <div className="relative lg:w-login-women-width-container md:w-login-women-width-container-md lg:h-96 md:h-80 bg-white rounded-xl backdrop-blur-xs bg-opacity-30 shadow-2xl border">
          <span className="inline-block lg:w-44 md:w-36  lg:text-3xl md:text-2xl text-white font-bold m-10">
            Very good works are waiting for you Login Now!!!
          </span>

          <div className="absolute bottom-0 left-[-6rem] w-[150%] h-full">
            <Image src={assets.images.womenWithTab} fill alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
