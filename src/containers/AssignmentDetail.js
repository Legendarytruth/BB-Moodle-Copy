import React from 'react';
import {connect} from 'react-redux';
import { Card, Skeleton, message } from 'antd';
import Questions from './Questions';
import Choices from '../components/Choices';
import {getASNTSDetail} from '../store/actions/assignments';
import { createGradedASNT } from '../store/actions/gradedAssignments';
import Hoc from '../hoc/hoc';

const cardStyle = {
  marginTop: "20px",
  marginBottom: "20px"
};



class AssignmentDetail extends React.Component{

  state = {
    usersAnswers: {}
  }
  componentDidMount(){
    if(this.props.token !== undefined && this.props.token !== null){
        this.props.getASNTSDetail(this.props.token, this.props.match.params.id);
    }
}

componentWillReceiveProps(newProps){
    if(newProps.token !== this.props.token){
        if(newProps.token !== undefined && newProps.token !== null){
            this.props.getASNTSDetail(newProps.token, this.props.match.params.id);
        }
    }
}

  onChange = (e,qId) => {
    const {usersAnswers} = this.state;
    usersAnswers[qId] = e.target.value;
    this.setState({
      usersAnswers
    });
  };

  handleSubmit(){
    message.success("Submitting Your Assignment");
    const { usersAnswers } = this.state;
    //console.log(this.props.username)
    const asnt = {
      username: this.props.username,
      asntId: this.props.currentAssignment.id,
      answers: usersAnswers, 
    }
    this.props.createGradedASNT(this.props.token, asnt);
  }

    render(){
      const {currentAssignment} = this.props;
      const {title} = currentAssignment;
      const {usersAnswers} = this.state;
        return(
          <Hoc>
          {Object.keys(currentAssignment).length > 0 ?
            <div style={{paddingTop: "50px"}}>
            <Hoc>
              {
                this.props.loading ?
                <Skeleton active />
                :
                <Card title={title}>
                  
                    <Questions submit={() => this.handleSubmit()} questions ={currentAssignment.questions.map(q=>{
                      return (<Card style={cardStyle} type='inner' key={q.id} title={`${q.order}.${q.question}`}>
                        <Choices questionId ={q.order} choices={q.choices} change={this.onChange} usersAnswers={usersAnswers}></Choices>
                      </Card>)
                    })}/>
                </Card>
              }
            </Hoc> 
            </div> : null
          }
          </Hoc>
        )
    }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    currentAssignment: state.assignments.currentAssignment,
    loading: state.assignments.loading,
    username: state.auth.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getASNTSDetail: (token,id) => dispatch(getASNTSDetail(token, id)),
    createGradedASNT: (token, asnt) => dispatch(createGradedASNT(token, asnt))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AssignmentDetail);