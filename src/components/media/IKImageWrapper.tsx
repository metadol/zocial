"use client";

import { IKImageWrapperProps } from "@/types/interface";
import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;


const IKImageWrapper = ({
  path,
  width,
  height,
  alt,
  className,
}: IKImageWrapperProps) => {
  return (
    <IKImage
      path={path}
      width={width}
      height={height}
      alt={alt}
      className={className}
      lqip={{ active: true, quality: 20 }}
      urlEndpoint={urlEndpoint as string}
      // transformation={[{ height: 600, width: 600, quality: 90 }]}
    />
  );
};

export default IKImageWrapper;
