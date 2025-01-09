import "./Content.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import ContentMain from '../../components/ContentMain/ContentMain';

const Content = () => {
  return (
    <div className='main-content'>
      <h1 className="uki">Hai Uke Welcome To Admin Dhashboard </h1>
      
      <ContentTop />
      <ContentMain />
    </div>
  )
}

export default Content