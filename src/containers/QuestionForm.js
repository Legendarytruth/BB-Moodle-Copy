import React from "react";
import { Form, Input, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Icon from "@ant-design/icons";
import Hoc from "../hoc/hoc";

const FormItem = Form.Item;
let id = 0;

class QuestionForm extends React.Component {
  /*
  state = {
    choiceCount: 1
  };
  
  remove = () => {
    const { choiceCount } = this.state;
    this.setState({
      choiceCount: choiceCount - 1
    });
  };

  add = () => {
    const { choiceCount } = this.state;
    this.setState({
      choiceCount: choiceCount + 1
    });
  };

  render() {
    const choices = [];
    for (let i = 0; i < this.state.choiceCount; i += 1) {
      choices.push(
        <Hoc key={i}>
          <FormItem name= {`questions[${this.props.id}]choices[${choices[i]}]`} label={i === 0 ? "Choices" : ""} key={choices[i]} validateTrigger= {["onChange", "onBlur"]} rules= {[
            {required: true, whitespace: true, message: "Please input a choice to the question"}]}>
              <Input placeholder="Answer choice" />
            {choices.length > 1 ? (
      <MinusCircleOutlined
      className="dynamic-delete-button"
      disabled={choices.length === 1}
      onClick={() => this.remove()}
    />
            ) : null}
          </FormItem>
        </Hoc>
      )
    }
  */
 render(){
    return(   
    <Hoc>
        <FormItem name = {`question[${this.props.id}]`} label="Question: " validateTrigger= {["onChange", "onBlur"]} rules= {[
        {required: true, message: "Please input a question"}]}>
          <Input placeholder="Add a question" />
        </FormItem>
        <FormItem name = {`answers[${this.props.id}]`} label="Answer: " validateTrigger= {["onChange", "onBlur"]} rules= {[
        {required: true, message: "Please input an answer to this question"}]}>
          <Input placeholder="What is the answer?" />
        </FormItem>
        {/*choices*/} 
        <Form.List name= {`question[${this.props.id}]choices`} initialValue = {['']}>
        {(fields, { add, remove }) => (
          <>
          {fields.map((field, index) => (
            <FormItem label={index === 0 ? 'Choice' : ''} key={`question[${this.props.id}]choices[${field.key}]`} required={false}>
            <FormItem {...field}  validateTrigger= {["onChange", "onBlur"]} rules= {[
                        {required: true, whitespace: true, message: "Please input a choice to the question"}]} noStyle>
                          <Input placeholder="Answer choice"/>
            </FormItem>
            {fields.length > 1 ? (
                  <MinusCircleOutlined
                  className="dynamic-delete-button"
                  disabled={fields.length === 1}
                  onClick={() => remove(field.name)}
                />) : null}
            </FormItem>
          ))}
          <FormItem>
          <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
           Add an answer choice
          </Button>
        </FormItem>
        
        </>
          )}
        </Form.List> 
        </Hoc>      
      )

  
    /*
    console.log(this.props);
    //const { getFieldDecorator, getFieldValue } = formRef;
    //getFieldDecorator("keys", { initialValue: [] });
    <Form.List name="keys" initialValue = {[]}>
    const formItems = keys.map((k, index) => (
      <FormItem name= {`questions[${this.props.id}]choices[${k}]`} label={index === 0 ? "Choices" : ""} key={k} validateTrigger= {["onChange", "onBlur"]} rules= {[
        {required: true, whitespace: true, message: "Please input a choice to the question"}]}>
          <Input placeholder="Answer choice" />
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            disabled={keys.length === 1}
            onClick={() => this.remove(k)}
          />
        ) : null}
      </FormItem>
      
    ))
    </Form.List>
    return (
      <Hoc>
        <FormItem name = {`question[${this.props.id}]`} label="Question: " validateTrigger= {["onChange", "onBlur"]} rules= {[
        {required: true, message: "Please input a question"}]}>
          <Input placeholder="Add a question" />
        </FormItem>
        <FormItem name = {`answers[${this.props.id}]`} label="Answer: " validateTrigger= {["onChange", "onBlur"]} rules= {[
        {required: true, message: "Please input an answer to this question"}]}>
          <Input placeholder="What is the answer?" />
        </FormItem>
        {formItems}
        <FormItem>
          <Button type="dashed" onClick={this.add}>
            <Icon type="plus" /> Add an answer choice
          </Button>
        </FormItem>
      </Hoc>
    );*/
  }
}

export default QuestionForm;