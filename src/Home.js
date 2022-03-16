import React, { useContext } from 'react'
import { datastore } from './Context'
import PortraitCard from './PortraitCard';
import Landscapecard from "./Landscapecard"
import Toppost from "./Toppost"
import Advertisement from "./Advertisement"
import "./stylehome.css"



const Home = () => {

  const data = useContext(datastore);



  return (
    <div className='main'>
      <div className='container'>
        <div id='img1'></div>
        <div id='img2'></div>
        <div id='img3'></div>
        <h2 id='text-over'>Featured Walpapers!</h2>

      </div><br /><br /><br /><br />
      <div className='subheading'><h1>The Latest</h1><hr /></div>
      <div className='box'>
        {data[0].slice(0, 3).map((e) => { return (<PortraitCard key={e.id} id={e.id} detail={e.detail} img={e.img} subhead={e.subhead} content={e.content} type={e.type} created={e.created} />) })}
      </div><br /><br />
      <div className='subheading'><h1>Latest Articles</h1><hr /></div><br /><br /><hr className='line' /><br />
      <div className='box-2'>
        {data[1].map((e) => { return (<Landscapecard key={e.id} id={e.id} detail={e.detail} img={e.img} subhead={e.subhead} content={e.content} type={e.type} created={e.created} />) })}
      </div><br /><br />
      <Advertisement />
      <div className='toppost'><h1>Top Posts</h1><hr /></div>
      <div className='box-3'>
        {data[2].map((e) => { return (<Toppost key={e.id} id={e.id} detail={e.detail} img={e.img} subhead={e.subhead} content={e.content} type={e.type} created={e.created} />) })}
      </div>
      <div className='subheading'><h1>Latest Stories</h1><hr /></div>
      <div className='box'>
        {data[0].slice(3, 6).map((e) => { return (<PortraitCard key={e.id} id={e.id} detail={e.detail} img={e.img} subhead={e.subhead} content={e.content} type={e.type} created={e.created} />) })}
      </div>
    </div>
  )

}

export default Home