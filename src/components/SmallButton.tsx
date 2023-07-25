interface Props {
  title: string
}

const SmallButton: React.FC<Props> = ({ title }) => {
  return (
    <button className="block border-0 outline-none bg-medium-blue hover:opacity-80 text-white font-bold text-lg px-10 py-2 rounded-full tracking-wider transition ease-in-out duration-300">
      {title}
    </button>
  )
}

export default SmallButton
