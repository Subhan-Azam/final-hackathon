import Image from 'next/image';
import './portfolioCard.css'

export default function PortfolioCard(props) {
  return (
    <>
        <div className='portfolioCard'>
          <Image src={props.src} />
        </div>
    </>
  );
}
