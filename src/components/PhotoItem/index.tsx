import * as C from "./styles";
import * as PhotosService from "../../services/photos";

type Props = {
  url: string;
  name: string;
};

export const PhotoItem = ({ url, name }: Props) => {

    
  const handleDeleteItem = (name: string) => {
    PhotosService.deleteImage(name);
    window.location.reload();
  };

  return (
    <C.Container>
      <img src={url} alt={name} />
      {name}
        <C.Button onClick={() => handleDeleteItem(name)}>X</C.Button>
    </C.Container>
  );
};

export default PhotoItem;
