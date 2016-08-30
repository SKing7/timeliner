import React from 'react'
import classes from './AddProject.scss'

export const AddProject = (props) => (
  <div>
      <form className="form-inline">
          <div className="form-group">
              <label>项目名</label>
              <input type="text" className="form-control margin-left-1x" placeholder="xxxx"/>
          </div>
          <button type="submit" className="btn btn-primary margin-left-1x">提交</button>
      </form>
  </div>
)

AddProject.propTypes = {
}

export default AddProject
