import React from 'react'

export const DefaultLayout = ({ children }) => (
  <div>
      {children}
  </div>
)

DefaultLayout.propTypes = {
  //children: React.PropTypes.element.isRequired
}

export default DefaultLayout
