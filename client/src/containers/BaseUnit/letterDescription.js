import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from './tifinaghLetterStyle';
import ControlledCarousel from './letterSlider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function LetterDescriptions({ letters, letterTypes }) {
  const classes = useStyles();

  const togglePlay = (sound) => {
    const audio = new Audio(require(`../../assets/sounds/lettersounds/${letterTypes.type}/${sound}.mp3`));
    audio.play();
  };
  const renderLetter = (letters) => {
    return letters.map((item, index) => {
      return (
        <div className="item" key={index}>
          <div style={styles.letterContainer}>
            <h1 style={styles.newText}>{item.latin}</h1>
            <h1 style={styles.secondText}>{item.arabic}</h1>
          </div>
          <div style={localStyles.wrapper}>
            <div style={styles.container}>
              <h1 style={styles.letterFont}>{item.tifinagh}</h1>
            </div>
            <div style={styles.audioContainer}>
              <i className="fa fa-volume-up" style={localStyles.iconStyle} onClick={() => togglePlay(item.sound)} />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={classes.root}>
      <div style={localStyles.container}>
        <div id="sync1" className="owl-carousel owl-theme" style={localStyles.topCarousel}>
          {renderLetter(letters)}
        </div>
        <div id="sync2" className="owl-carousel owl-theme" style={localStyles.bottomCarousel}>
          {letters.map((item, index) => {
            return (
              <div key={`${index}_index`} className="item" style={localStyles.bottomContentCarousel}>
                <h1 style={{ margin: 0 }}>{item.tifinagh}</h1>
              </div>
            );
          })}
        </div>
        {/* <ControlledCarousel /> */}
      </div>
    </div>
  );
}

const localStyles = {
  container: {
    flex: 8,
    display: 'flex',
    flexDirection: 'column',
  },
  wrapper: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  },
  bottomCarousel: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomContentCarousel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
  },
  topCarousel: {
    flex: 2,
    display: 'flex',
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: '3rem',
    color: 'white',
  },
};
