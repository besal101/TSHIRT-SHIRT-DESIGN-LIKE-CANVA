import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks";
import { setSelectedMedia } from "@/redux/mediaSlice";

interface MediaImageProps {
  src: string;
}

const MediaImage: React.FC<MediaImageProps> = ({ src }) => {
  const dispatch = useAppDispatch();
  return (
    <div
      className="pt-1"
      onClick={(e) =>
        dispatch(setSelectedMedia({ isLoading: true, selectedMedia: src }))
      }
    >
      <Image
        src={src}
        alt="MediaImage"
        height={130}
        width={130}
        className="hover:border hover:border-white cursor-pointer rounded-sm"
      />
    </div>
  );
};

export default MediaImage;
