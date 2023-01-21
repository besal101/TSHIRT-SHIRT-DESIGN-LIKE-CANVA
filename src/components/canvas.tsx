import { useState, useEffect, useRef } from "react";
import { Stage, Layer, Image, Transformer } from "react-konva";
import Konva from "konva";
import useImage from "use-image";
import { useAppSelector } from "@/redux/hooks";

interface IURLProps {
  url: string;
}
interface ICanvasProps {}

const url = "/st-y.png";

const URLImage = ({ url }: IURLProps) => {
  const [image] = useImage(url, "anonymous", "origin");
  const [isDragging, setIsDragging] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [transformer, setTransformer] = useState<Konva.Transformer | null>(
    null
  );
  const imageRef = useRef<Konva.Image>(null);
  transformer?.nodes([imageRef.current as Konva.Image]);
  transformer?.getLayer()?.batchDraw();

  // useEffect(() => {
  //   if (isDragging) {
  //     setIsSelected(false);
  //   }
  // }, [isSelected]);

  return (
    <>
      <Image
        ref={imageRef}
        name="image"
        image={image}
        x={300}
        y={300}
        width={200}
        height={200}
        draggable
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onClick={() => setIsSelected(!isSelected)}
        onTap={() => setIsSelected(!isSelected)}
        onTransformEnd={() => {
          const node = imageRef.current;
          const scaleX = node?.scaleX();
          const scaleY = node?.scaleY();
        }}
      />
      {isSelected && (
        <Transformer
          ref={(node) => {
            setTransformer(node);
          }}
        />
      )}
    </>
  );
};

const Canvas: React.FC<ICanvasProps> = () => {
  const [image, status] = useImage(url, "anonymous", "origin");

  const value = useAppSelector((state) => state.selectedMedia);

  return (
    <div className="flex justify-center items-center">
      <Stage
        width={800}
        height={800}
        style={{
          marginTop: "40px",
          backgroundColor: "white",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <Layer>
          <Image className="img-fluid" image={image} />
          {value.selectedMedia !== "" && <URLImage url={value.selectedMedia} />}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
