import Image from "next/image";

export default function AboutServices(props) {
  return (
    <div className="flex w-64 my-1">
      <Image
        src="/assets/images.png"
        width={30}
        height={30}
      />
      <p>{props.title}</p>
    </div>
  );
}
