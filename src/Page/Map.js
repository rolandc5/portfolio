import React from 'react';

const Project = (props) => {
  return (
    <div className="p-propsContainer">
    { props.projects.map((value, i) => {
       return (
          <div>
            { props.number === i ? <div className="p-hContainer"><div className="p-buttonModal" onClick={ props.press }><img className="p-projectImage animated fadeIn" src={ value.picture }/></div></div>: null }
         </div>
       )
    })}
    </div>
  )
}

export {
  Project,
}

/*

{ this.state.file.map((value, i) => {
   return (
      <div>
      { this.state.number === i ? <div className="p-hContainer"><div className="p-buttonModal" onClick={ this.handleButtonPress }><img className="p-projectImage animated fadeIn" src={ value.picture }/></div></div>: null }
     </div>
   )
})}
*/
