"use client";

import { IKVideoWrapperProps } from "@/types/interface";
import { IKVideo } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;


const IKVideoWrapper = ({ path, className }: IKVideoWrapperProps) => {
  return (
    <IKVideo
      path={path}
      className={className}
      transformation={[{ height: 1080, width: 1920, quality: 90 }]}
      controls={true}
      urlEndpoint={urlEndpoint as string}
    />
  );
};

export default IKVideoWrapper;
