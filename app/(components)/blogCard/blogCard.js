import "./blogCard.css";

export default function BlogCard() {
  return (
    <>
      

      <div className="blogCard max-w-[350px]">
        <h2 class="mb-3 text-xl font-bold">
          Maecenas laoree efficiture sagittis aliquam eleifend nisl
        </h2>
        <span className="pt-5 text-lg font-semibold text-blue-500"> Posted 7 March, 2020</span>
        <p class="my-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ducimus
          porro voluptates mollitia cumque! Veritatis fuga ut assumenda,
          nesciunt saepe cumque pariatur iusto fugiat tenetur animi facere porro
          maxime nostrum.
        </p>
        <button>Learn More</button>
      </div>
    </>
  );
}
