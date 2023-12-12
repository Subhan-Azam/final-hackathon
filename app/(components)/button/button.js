

export default function Button(props) {
  return (
    <>
      <button className='bg-blue-500 text-white rounded-2xl py-2 px-6 hover:bg-blue-600 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>{props.btnText}</button>
    </>
  )
}
