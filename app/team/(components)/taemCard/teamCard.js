import Image from 'next/image';
import './teamCard.css'

export default function TeamCard(props) {
  return (
    <div className='mb-14 sm:mb-1 '>
      <div className="teamCard">
        <Image
          className="bg-gray-400"
          src={props.src}
        />
      </div>
        <div className="mt-3 m-auto w-72  flex justify-center items-center flex-col">
          <h3 className="font-bold text-lg">{props.heading}</h3>
          <p className="text-sm">{props.skill}</p>
        </div>
    </div>
  );
}
