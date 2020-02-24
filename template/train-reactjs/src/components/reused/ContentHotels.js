import React from 'react'
import PageHeader from '../reused/PageHeader'
// import Filter from '../trains/Filter'
// import PageNumber from '../trains/PageNumber'
// import Loading from '../reused/Loading'
import loadable from '@loadable/component'

const TrainList = loadable(() => import('../trains/TrainList'));

class ContentHotels extends React.Component {    
    render() {
      return ( 
        <div>
          <PageHeader />
          <div className="container">
            {/* <Filter />
            <TrainList fallback={<Loading />} />
            <PageNumber /> */}
          </div>
        </div>
      )
    }
}

export default ContentHotels