import React, {useEffect, useCallback, useState} from 'react';
import {View} from 'react-native';
import DetailHeader from 'movie_machine/src/components/detailHeader';
import ContentDetailInfo from 'movie_machine/src/containers/ContentDetailInfo';
import styles from './styles';

function ContentDetails({moviesActions, contentId}) {
  const {getContentDetails} = moviesActions;
  const [content, setContent] = useState({});
  const handleContentChange = useCallback((type, response) => {
    if (type !== 'error') {
      setContent(response);
    }
  }, []);

  useEffect(() => {
    getContentDetails(contentId, handleContentChange);
  }, []);

  if (
    content &&
    Object.keys(content).length === 0 &&
    Object.getPrototypeOf(content) === Object.prototype
  ) {
    return null;
  }

  return (
    <View style={styles.container}>
      <DetailHeader data={content} />
      <ContentDetailInfo data={content} />
    </View>
  );
}

export default ContentDetails;
