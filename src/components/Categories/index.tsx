import React from 'react';
import { AppContextProvider, useAppContext } from '../../hooks/appContext';
import { Container, Button } from './styles';

const Categories: React.FC = () => {
  const {
    appMedias,
    selectedMedia, 
    handleSelectedMedia, 
  } = useAppContext();

  return (
    <AppContextProvider>
      <Container className="to-the-right">
        <ul>
          {appMedias && appMedias.map((media, index) => (
            <li key={media.name}>
              <Button 
                onClick={() => handleSelectedMedia(index)}
                className={selectedMedia === index ? "selected-category" : ""}
              >
                {media.name}
              </Button>
            </li>
          ))}
        </ul>
      </Container>
    </AppContextProvider>
  );
}
 
export default Categories;