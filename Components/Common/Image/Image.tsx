import { NextPage } from 'next';
import Image, { ImageLoader } from 'next/image';

const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: any;
  width: any;
  quality: any;
}) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const Img: NextPage = () => {
  return (
    <Image
      loader={imageLoader as ImageLoader}
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  );
};
export default Img;
