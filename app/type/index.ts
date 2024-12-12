import { StaticImageData } from "next/image";

export interface serviceCardPropsType {
  title: string;
  body: string;
  iconUrl: string;
}
export interface psycologistCardPropsType {
  photo: string;
  name: string;
  titel: string;
}
export interface centerImageGridType {
  middleImage: StaticImageData;
  topRight: React.ReactNode;
  topLeft: React.ReactNode;
  bottomLeft: React.ReactNode;
  bottomRight: React.ReactNode;
}
export interface testimonialCardType {
  rating: string;
  body: string;

  autor: string;
}
export interface inputFieldType {
  placeholder: string;
  type: string;
  className: string;
}
