import React  from "react";

const UpdatedComp = OrignalComp => {
    class NewComp extends React.Component{
        render(){
            return <OrignalComp name="The user" />
        }
    }
    return NewComp;
};
export default UpdatedComp;