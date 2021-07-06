import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({title, description, keywords}) => {
    return (
        <>
          <Helmet>
              <title>{title}</title>
              <meta name='description' content={description}/>
              <meta name='keywords' content={keywords}/>
          </Helmet>
        </>
    )
}

Meta.defaultProps = {
    title: 'Welcome To West Kings',
    description: '',
    keywords: 'West, West Coast, Urban, Urban Streetwear, Westcoast Style'
}

export default Meta
