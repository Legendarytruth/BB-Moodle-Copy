import React from 'react';
import {connect} from 'react-redux';
import { List, Divider, Skeleton } from 'antd';
import { Link } from "react-router-dom";
import * as actions from '../store/actions/assignments';
import Hoc from '../hoc/hoc';

class AssignmentList extends React.PureComponent{

    componentDidMount(){
        if(this.props.token !== undefined && this.props.token !== null){
            this.props.getASNTS(this.props.token);
        }
    }

    componentWillReceiveProps(newProps){
        if(newProps.token !== this.props.token){
            if(newProps.token !== undefined && newProps.token !== null){
                this.props.getASNTS(newProps.token);
            }
        }
    }

    renderItem(item) {
        return (
          <Link to={`/assignment/${item.id}`}>
            <List.Item>{item.title}</List.Item>
          </Link>
        );
    }

    
    render(){
        return (
            <Hoc>
            {this.props.loading ? (
                <Skeleton active/>
            ) : (
                <div style={{paddingTop: "50px"}}>
                <h3 orientation="left">Assignment List</h3>
                {console.log(this.props.assignments)}
                {console.log(this.props)}
                <List
                  size="large"
                  bordered
                  
                  dataSource={this.props.assignments}
                  renderItem={item => this.renderItem(item)}
                />
                </div>

            )};
            </Hoc>
        )
    }
}
    

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    assignments: state.assignments.assignments,
    loading: state.assignments.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getASNTS: token => dispatch(actions.getASNTS(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignmentList);