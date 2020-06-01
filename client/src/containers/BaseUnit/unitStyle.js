import board from '../../assets/images/Blackboard.png';
const letterContainer = {
  flex: 7,
  display: 'flex',
  margin: 10,
  padding: 10,
  backgroundImage: `url(${board})`,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

const unitContent = {
  display: 'flex',
  flex: 1,
  zIndex: 1000,
};

const letterList = {
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  marginRight: 5,
};

const contentWrapper = {
  display: 'flex',
  flex: 1,
};

const content = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};

const logoContainer = {
  flex: 1,
  display: 'flex',
  borderBottom: '0px solid black',
  boxShadow: '0px 0px 10px #00a65a',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoContent = {
  flex: 1,
  color: '#00a65a',
};

const pageTitle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  color: '#00a65a',
};

const letterPageContainer = {
  letterSpacing: '25px',
  margin: '20px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  padding: '40px',
};

const letterStyle = {
  cursor: 'pointer',
  fontSize: 30,
};
export default {
  letterContainer,
  unitContent,
  letterList,
  contentWrapper,
  content,
  logoContainer,
  logoContent,
  pageTitle,
  letterPageContainer,
  letterStyle,
};
