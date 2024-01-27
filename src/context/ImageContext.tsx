// src/contexts/ImageContext.tsx
import React, { createContext, useContext, ReactNode, useReducer } from "react";

export interface Image {
  imageID: number;
  imageURL: string;
}

interface ImageContextProps {
  children: ReactNode;
}

interface ImageContextValue {
  images: Image[];
  addImage?: (image: Image) => void;
}

const sampleCarImages: Image[] = [
  { imageID: 1, imageURL: "https://example.com/car3.jpg" },
  { imageID: 2, imageURL: "https://example.com/car3.jpg" },
  { imageID: 3, imageURL: "https://example.com/car3.jpg" },
  { imageID: 4, imageURL: "https://example.com/car4.jpg" },
  { imageID: 5, imageURL: "https://example.com/car5.jpg" },
  { imageID: 6, imageURL: "https://example.com/car6.jpg" },
  { imageID: 7, imageURL: "https://example.com/car7.jpg" },
  { imageID: 8, imageURL: "https://example.com/car8.jpg" },
  { imageID: 9, imageURL: "https://example.com/car10.jpg" },
  { imageID: 10, imageURL: "https://example.com/car11.jpg" },
  { imageID: 11, imageURL: "https://example.com/car12.jpg" },
  { imageID: 12, imageURL: "https://example.com/car13.jpg" },
  { imageID: 13, imageURL: "https://example.com/car14.jpg" },
  { imageID: 14, imageURL: "https://example.com/car15.jpg" },
];

const ImageContext = createContext<ImageContextValue | undefined>(undefined);

const imageReducer = (
  state: Image[],
  action: { type: string; payload: Image }
): Image[] => {
  switch (action.type) {
    case "ADD_IMAGE":
      return [...state, action.payload];
    default:
      return state;
  }
};

export const ImageProvider: React.FC<ImageContextProps> = ({ children }) => {
  const [images, dispatch] = useReducer(imageReducer, sampleCarImages);

  const addImage = (image: Image) => {
    dispatch({ type: "ADD_IMAGE", payload: image });
  };

  const contextValue: ImageContextValue = {
    images,
    addImage,
  };

  return (
    <ImageContext.Provider value={contextValue}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImage = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImage must be used within an ImageProvider");
  }
  return context;
};
