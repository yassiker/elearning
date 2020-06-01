import Background from '../../assets/images/cedarBack.jpg';
const container = { flex: 1, height: '100%' };
const contentWrapper = { display: 'flex', flex: 1 };
const unitContainer = {
  borderLeft: '22px solid white',
  borderRight: '22px solid white',
  height: '100%',
  left: '45.9%',
  position: 'absolute',
  top: '0px',
  zIndex: 0,
};
const unit = {
  top: '68%',
  left: '7.5%',
  position: 'absolute',
  color: 'darkorange',
  cursor: 'pointer',
  zIndex: 1,
};
const dictionary = {
  left: '13%',
  position: 'absolute',
  top: '60%',
  color: 'darkorange',
  cursor: 'pointer',
  zIndex: 1,
  fontSize: 23,
};
const places = {
  left: '19%',
  position: 'absolute',
  top: '42%',
  color: 'darkorange',
  cursor: 'pointer',
  zIndex: 1,
  fontSize: 23,
};
const people = {
  left: '27%',
  position: 'absolute',
  top: '21%',
  color: 'darkorange',
  cursor: 'pointer',
  zIndex: 1,
  fontSize: 23,
};
const documentries = {
  left: '65.5%',
  position: 'absolute',
  top: '70%',
  color: 'darkorange',
  cursor: 'pointer',
  zIndex: 1,
};
const interview = {
  left: '59.5%',
  position: 'absolute',
  top: '58%',
  color: 'darkorange',
  cursor: 'pointer',
  zIndex: 1,
};
const music = {
  left: '58.5%',
  position: 'absolute',
  top: '39%',
  color: 'darkorange',
  cursor: 'pointer',
  zIndex: 1,
};
const stories = {
  left: '54.5%',
  position: 'absolute',
  top: '21%',
  color: 'darkorange',
  cursor: 'pointer',
  zIndex: 1,
};
const contentContainer = {
  flex: 1,
  height: '100%',
  display: 'flex',
};
const treeBackground = {
  flex: 1,
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};
const unitContent = {
  display: 'flex',
  justifyContent: 'center',
};
const courseStructure = {
  flex: 1,
  display: 'flex',
  height: '100%',
  zIndex: 1,
};
const unitLink = {
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
};
const conceptText = { fontSize: 23 };

export default {
  container,
  contentWrapper,
  unitContainer,
  unit,
  dictionary,
  places,
  people,
  documentries,
  interview,
  music,
  stories,
  contentContainer,
  treeBackground,
  unitContent,
  courseStructure,
  unitLink,
  conceptText,
};
