import React from "react";
import { Radio, Input, Space } from 'antd';

class Choices extends React.Component {
  render() {
    const {questionId} = this.props;
    const {usersAnswers} = this.props;
    return (
      <Radio.Group onChange={(e, qId) => this.props.change(e, questionId)} value={usersAnswers[questionId] !== undefined && usersAnswers[questionId] !== null ? usersAnswers[questionId]: null}>
        <Space direction="vertical">
            {this.props.choices.map((c, index) =>{
                return(<Radio value={c} key={index}>{c}</Radio>)
            })}
          
        </Space>
      </Radio.Group>
    );
  }
}

export default Choices;